async function addPulsarTrivium() {
    await window.keplr.experimentalSuggestChain({
        chainId: "pulsar-2", 
        chainName: "Secret Pulsar", 
        rpc: "https://rpc.pulsar.scrttestnet.com", 
        rest: "https://api.pulsar.scrttestnet.com", 
        bip44: { coinType: 529 }, 
        coinType: 529, 
        stakeCurrency: { 
            coinDenom: "SCRT", 
            coinMinimalDenom: "uscrt", 
            coinDecimals: 6 
        }, 
        bech32Config: { 
            bech32PrefixAccAddr: "secret", 
            bech32PrefixAccPub: "secretpub", 
            bech32PrefixValAddr: "secretvaloper", 
            bech32PrefixValPub: "secretvaloperpub", 
            bech32PrefixConsAddr: "secretvalcons", 
            bech32PrefixConsPub: "secretvalconspub" 
        }, 
        currencies: [{ coinDenom: "SCRT", coinMinimalDenom: "uscrt", coinDecimals: 6 }], 
        feeCurrencies: [{ coinDenom: "SCRT", coinMinimalDenom: "uscrt", coinDecimals: 6 }], 
        gasPriceStep: { low: .1, average: .25, high: .4 }, 
        features: ["secretwasm", "ibc-transfer", "ibc-go"] 
    });
}

async function addCosmosTheta() {
    await window.keplr.experimentalSuggestChain({
        chainId: "theta-testnet-001", 
        chainName: "Cosmos Theta-v7", 
        rpc: "https://rpc.sentry-01.theta-testnet.polypore.xyz", 
        rest: "https://rest.sentry-01.theta-testnet.polypore.xyz", 
        bip44: { coinType: 118 }, 
        coinType: 118, 
        stakeCurrency: { 
            coinDenom: "ATOM", 
            coinMinimalDenom: "uatom", 
            coinDecimals: 6 
        }, 
        bech32Config: { 
            bech32PrefixAccAddr: "cosmos", 
            bech32PrefixAccPub: "cosmospub", 
            bech32PrefixValAddr: "cosmosvaloper", 
            bech32PrefixValPub: "cosmosvaloperpub", 
            bech32PrefixConsAddr: "cosmosvalcons", 
            bech32PrefixConsPub: "cosmosvalconspub" 
        }, 
        currencies: [{ coinDenom: "ATOM", coinMinimalDenom: "uatom", coinDecimals: 6 }], 
        feeCurrencies: [{ coinDenom: "ATOM", coinMinimalDenom: "uatom", coinDecimals: 6 }], 
        gasPriceStep: { low: .1, average: .25, high: .4 }, 
        features: ["ibc-transfer", "ibc-go"] 
    });
}

async function addAxelarLisbon() {
    await window.keplr.experimentalSuggestChain({
        chainId: "axelar-testnet-lisbon-3", 
        chainName: "Axelar Lisbon", 
        rpc: "https://axelartest-rpc.quickapi.com/", 
        rest: "https://axelartest-lcd.quickapi.com/", 
        bip44: { coinType: 118 }, 
        coinType: 118, 
        stakeCurrency: { 
            coinDenom: "AXL", 
            coinMinimalDenom: "uaxl", 
            coinDecimals: 6 
        }, 
        bech32Config: { 
            bech32PrefixAccAddr: "axelar", 
            bech32PrefixAccPub: "axelarpub", 
            bech32PrefixValAddr: "axelarvaloper", 
            bech32PrefixValPub: "axelarvaloperpub", 
            bech32PrefixConsAddr: "axelarvalcons", 
            bech32PrefixConsPub: "axelarvalconspub" 
        }, 
        currencies: [
            { coinDenom: "AXL", coinMinimalDenom: "uaxl", coinDecimals: 6 }, // axelar
        ], 
        feeCurrencies: [{ coinDenom: "AXL", coinMinimalDenom: "uaxl", coinDecimals: 6 }], 
        gasPriceStep: { low: .1, average: .25, high: .4 }, 
        features: ["ibc-transfer", "ibc-go"] 
    });
}
