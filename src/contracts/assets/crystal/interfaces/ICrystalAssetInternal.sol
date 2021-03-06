pragma ton-solidity >= 0.48.0;

interface ICrystalAssetInternal {
    /************
     * EXTERNAL *
     ************/
    /*
       value .......... How much grams to transfer from
       gasReceiver .... Remaining balance receiver
       payload ........ Information for destination contract
     */
    function internalTransfer(uint128 value, address gasReceiver, TvmCell payload) external view;
}