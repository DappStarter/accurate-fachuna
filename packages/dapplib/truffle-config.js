require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain slow gloom dry fortune secret'; 
let testAccounts = [
"0xc017a29ab6f30c62a62323a2bf342932282c93d5a0b16529e2e4686a5f726af6",
"0x89a7638a89d0893ff4a77d05be21967d502dee2bf154c419d879c8b9d0d63eee",
"0x2cf8b35a1cefa8486279e8e6c95cbda2e9c3ea1a961038bd8b2c10bd2506ce49",
"0xead3c2398255d4216f32bd9cf164ab15666602983741abd49aa398fec021472e",
"0x7a53eda22ec34e2cabfabe62360c51fafef2aa70a377660bbaa6192ad038f1cf",
"0xb7d89a07459d02f13c43e4ddd586b9e5368d9ba33c803b99cea0ad427418be1e",
"0xba99960da67868c634dcedcdaed011c5a1d1013ce5f1a6ca8f01dbf0a24f97a5",
"0xc3191041794d99e794df487a5887b9f20116ab9bb8cb203c1ebcfab9e261d7bc",
"0x8d7cb6e7e9c19dc95a73d7ac3bd956f4dd5a23d0f8c4cce239afeecf4e6fe721",
"0x4dc809b8e80f55d76822b39c23856f9b04ace562a2ff7f8199f62e9a1b407fef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

