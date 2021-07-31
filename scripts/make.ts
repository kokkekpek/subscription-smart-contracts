import {root} from '../root'
import {make} from 'jton'

make({
    root: root,
    compile: [
        'src/contracts/Demiurge',
        'src/contracts/Customer',
        'src/contracts/Vendor',
        'src/contracts/storages/crystal/CrystalStorageRoot',
        'src/contracts/storages/crystal/CrystalStorage',

        // Tests
        'tests/_src/contracts/CrystalStorageOwner'
    ],
    compiler: '0.47.0',
    linker: '0.11.90',
    stdlib: '0.47.0'
}).then().catch((e: any) => console.log(e))