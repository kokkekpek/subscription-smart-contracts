import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import DemiurgeContract from './contracts/Demiurge'

export {DemiurgeContract}

export interface InitialData {
    _vendorCode: string
    _customerCode: string
}

export interface GetCustomerAddressIn {
    publicKey: number | string
    owner: string
}

export interface GetVendorAddressIn {
    publicKey: number | string
    owner: string
}

export class Demiurge extends Contract {
    public static readonly EXTERNAL = {
        createCustomer: 'createCustomer',
        createVendor: 'createVendor'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: DemiurgeContract.abi,
            tvc: DemiurgeContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getCustomerCode(): Promise<string> {
        return (await this.run('getCustomerCode', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getVendorCode(): Promise<string> {
        return (await this.run('getVendorCode', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getCustomerAddress(input: GetCustomerAddressIn): Promise<string> {
        return (await this.run('getCustomerAddress', {...input, ...ZERO_ANSWER_ID_V2})).value.value0
    }

    public async getVendorAddress(input: GetVendorAddressIn): Promise<string> {
        return (await this.run('getVendorAddress', {...input, ...ZERO_ANSWER_ID_V2})).value.value0
    }
}