import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getNetConfig, getRandomKeyPair, NetConfig, x0, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {Demiurge, DemiurgeContract} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'
import {Vendor, VendorContract} from '../src/Vendor'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const netConfig: NetConfig = getNetConfig(config)

it('deploy', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys)
    await giver.sendTransaction({
        dest: await demiurge.address(),
        value: config.contracts.demiurge.requiredForDeployment * B
    })
    await demiurge.deploy({
        customerCode: CustomerContract.code,
        vendorCode: VendorContract.code,
    })

    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, timeout, safeMultisigWalletKeys)
    await giver.sendTransaction({dest: await safeMultisigWallet.address(), value: 0.2 * B})
    await safeMultisigWallet.deploy({
        owners: [x0(safeMultisigWalletKeys.public)],
        reqConfirms: 1
    })
    const safeMultisigWalletBalanceAfter: number = parseInt(await safeMultisigWallet.balance())
    await safeMultisigWallet.callAnotherContract(
        await demiurge.address(),
        safeMultisigWalletBalanceAfter - netConfig.transactionFee * B,
        true,
        1,
        DemiurgeContract.abi,
        Demiurge.EXTERNAL.createVendor,
        {
            publicKey: ZERO_UINT256,
            owner: await safeMultisigWallet.address(),
            deployValue: config.contracts.vendor.requiredForDeployment * B
        }
    )
    const vendor: Vendor = new Vendor(client, timeout, ZERO_KEY_PAIR, {
        _demiurge: await demiurge.address(),
        _owner: await safeMultisigWallet.address()
    })
    await vendor.waitForTransaction()
    expect(await vendor.accountType()).toBe(AccountType.active)
    client.close()
}, testTimeout)