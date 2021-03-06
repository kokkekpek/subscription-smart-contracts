import {Contract, ResultOfCall} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalAssetOwnerContract from './contracts/CrystalAssetOwner'

export {CrystalAssetOwnerContract}

export interface CreateIn {
    root: string
    value: number | string
    deploymentValue: number | string
    balanceAfterDeployment: number | string
    gasReceiver: string
}

export interface GetInfoOut {
    asset: string
    gasReceiver: string
    service: string
    payload: string
}

export class CrystalAssetOwner extends Contract {
    public constructor(client: TonClient, keys: KeyPair, timeout?: number) {
        super(client, {
            abi: CrystalAssetOwnerContract.abi,
            tvc: CrystalAssetOwnerContract.tvc,
            initialData: {},
            keys: keys
        }, timeout)
    }


    /**********
     * PUBLIC *
     **********/
    public async create(input: CreateIn): Promise<ResultOfCall> {
        return await this.call('create', input)
    }


    /***********
     * GETTERS *
     ***********/
    public async getInfo(): Promise<GetInfoOut> {
        return (await this.run('getInfo')).value
    }
}