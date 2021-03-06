import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair} from 'jton'
import {CrystalAssetContract} from '../src/contracts/assets/CrystalAsset'
import {CrystalAssetRoot} from '../src/contracts/assets/CrystalAssetRoot'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        crystalAssetRoot: config.contracts.crystalAssetRoot.requiredForDeployment * B
    }
}
it('deploy', async () => {
    const crystalAssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetRoot: CrystalAssetRoot = new CrystalAssetRoot(client, crystalAssetRootKeys, {
        _code: CrystalAssetContract.code,
    })
    await giver.sendTransaction({
        dest: await crystalAssetRoot.address(),
        value: values.giver.crystalAssetRoot
    })
    await crystalAssetRoot.deploy()
    expect((await crystalAssetRoot.accountType())).toBe(AccountType.active)
    client.close()
}, testTimeout)