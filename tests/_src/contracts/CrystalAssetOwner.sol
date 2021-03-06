pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "../../../src/contracts/assets/crystal/interfaces/ICrystalAssetRoot.sol";
import "../../../src/contracts/interfaces/IVendorToService.sol";

contract CrystalAssetOwner is IVendorToService {
    /*************
     * VARIABLES *
     *************/
    address private _asset;
    address private _gasReceiver;
    address private _service;
    TvmCell private _payload;


    /************
     * EXTERNAL *
     ************/
    /*
       root ...................... Address of asset root
       value ..................... How much crystals send total
       deploymentValue ........... How much crystals send to asset on deployment
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function create(
        address root,
        uint128 value,
        uint128 deploymentValue,
        uint128 balanceAfterDeployment,
        address gasReceiver
    )
        public pure
    {
        tvm.accept();
        ICrystalAssetRoot(root).create{value: value, callback: CrystalAssetOwner.onCreate}(
            address(this),
            deploymentValue,
            balanceAfterDeployment,
            gasReceiver
        );
    }

    /*
       assetAddress .... Address of asset
     */
    function onCreate(address asset, address gasReceiver) external {
        _asset = asset;
        _gasReceiver = gasReceiver;
    }

    /*
       service ........ Address of service contract
       payload ........ Payload for service contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toService(address service, TvmCell payload, address gasReceiver) override external {
        _service = service;
        _payload = payload;
        _gasReceiver = gasReceiver;
    }


    /***********
     * GETTERS *
     ***********/
    function getInfo() public view returns(address asset, address gasReceiver, address service, TvmCell payload) {
        asset = _asset;
        gasReceiver = _gasReceiver;
        service = _service;
        payload = _payload;
    }
}