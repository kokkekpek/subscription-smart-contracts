import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'
import {VendorContract} from '../src/Vendor'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        demiurge: config.contracts.demiurge.requiredForDeployment * B
    }
}
it('deploy', async () => {
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
    expect((await demiurge.accountType())).toBe(AccountType.active)
    client.close()
}, testTimeout)