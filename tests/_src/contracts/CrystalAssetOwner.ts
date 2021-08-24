const CrystalAssetOwnerContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "deploymentValue",
                        "type": "uint128"
                    },
                    {
                        "name": "balanceAfterDeployment",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onCreate",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "toService",
                "inputs": [
                    {
                        "name": "service",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    },
                    {
                        "name": "service",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_gasReceiver",
                "type": "address"
            },
            {
                "name": "_service",
                "type": "address"
            },
            {
                "name": "_payload",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECGAEAA8oAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsVBQQXAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAoGA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FBQGAiggghBotV8/u+MCIIIQeb09NrrjAggHAlAw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39EB+Gr4a9s8f/hnExEEUCCCEAyZoFu64wIgghAaZIHhuuMCIIIQRZUO77rjAiCCEGi1Xz+64wIQDw0JAiQw+EJu4wD4RvJz0fgA2zx/+GcKEQIW7UTQ10nCAYqOgOITCwL+cO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhsiPhtgED0DhcMABTyvdcL//hicPhjAnww+Eby4Ez6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/R2zzjAH/4Zw4RAGj4AFRwEvgoU3jIz4WIzgH6AnHPC2pVMMjPkbDJ6yrPkeb09NrOy3/LfwHIzs3NyXD7AF8FAnYw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39Ei+GwB+G34azDbPH/4ZxMRA4gw+Eby4Ez4Qm7jANHbPCSOKibQ0wH6QDAxyM+HIM5xzwthXjDIz5IyZoFuzlUgyM5ZyM7Mzc3NyXD7AJJfBOLjAH/4ZxMSEQBC+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOzM3Nye1UAe6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIXwT4SvhL+Ez4TRcASO1E0NP/0z/TADH6QNTR0PpA1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShFxYAFHNvbCAwLjQ4LjAAAA==",
    code: "te6ccgECFQEAA50ABCSK7VMg4wMgwP/jAiDA/uMC8gsSAgEUAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAcDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8EREDAiggghBotV8/u+MCIIIQeb09NrrjAgUEAlAw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39EB+Gr4a9s8f/hnEA4EUCCCEAyZoFu64wIgghAaZIHhuuMCIIIQRZUO77rjAiCCEGi1Xz+64wINDAoGAiQw+EJu4wD4RvJz0fgA2zx/+GcHDgIW7UTQ10nCAYqOgOIQCAL+cO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhsiPhtgED0DhQJABTyvdcL//hicPhjAnww+Eby4Ez6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/R2zzjAH/4ZwsOAGj4AFRwEvgoU3jIz4WIzgH6AnHPC2pVMMjPkbDJ6yrPkeb09NrOy3/LfwHIzs3NyXD7AF8FAnYw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39Ei+GwB+G34azDbPH/4ZxAOA4gw+Eby4Ez4Qm7jANHbPCSOKibQ0wH6QDAxyM+HIM5xzwthXjDIz5IyZoFuzlUgyM5ZyM7Mzc3NyXD7AJJfBOLjAH/4ZxAPDgBC+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOzM3Nye1UAe6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIXwT4SvhL+Ez4TRQASO1E0NP/0z/TADH6QNTR0PpA1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShFBMAFHNvbCAwLjQ4LjAAAA==",
    codeHash: "438c4027d86e370e8bfba4d017fe3bc737b5b52f5270aee36f981968fca89732",
};
export default CrystalAssetOwnerContract;