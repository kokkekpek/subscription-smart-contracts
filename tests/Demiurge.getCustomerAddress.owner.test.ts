import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {Customer, CustomerContract} from '../src/Customer'
import {VendorContract} from '../src/Vendor'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        demiurge: config.contracts.demiurge.requiredForDeployment * B
    }
}

it('getCustomerAddress.owner', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })
    await giver.sendTransaction({
        dest: await demiurge.address(),
        value: values.giver.demiurge
    })
    await demiurge.deploy()

    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, safeMultisigWalletKeys)
    const customerAddress: string = await demiurge.getCustomerAddress({
        publicKey: ZERO_UINT256,
        owner: await safeMultisigWallet.address()
    })
    const customer: Customer = new Customer(client, ZERO_KEY_PAIR, {
        _demiurge: await demiurge.address(),
        _owner: await safeMultisigWallet.address()
    })
    expect(await customer.address()).toBe(customerAddress)
    client.close()
}, testTimeout)