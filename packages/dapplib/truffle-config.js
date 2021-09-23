require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember arrow hope clinic bottom gas'; 
let testAccounts = [
"0x9fba5b7415a5a510ab4cde252b5801e5b0caf18366a47789a91b0f9d5542c457",
"0x220cb9280d75ae856b2c6a847b0316fff82e6cc2d95e22270c9dcdfb3c77aa9c",
"0xd877538e5bba173bec261c8e92ad82dd5d79255d3811b61af47189f0799cea26",
"0x7d88e8b46828df3d5b08b0e545e1569ee66c1a5e87d6b33259f76ca638103c0b",
"0x47cc6d508cf2b07e6b3d639bc2c594101fb103fbe42f50c47efc15a5e7198796",
"0x002c421ca64158ada098e7077b1917ce5b84680a5e9a23d1032e33dc48abec1d",
"0x1bde27149f3924407fdc263a2bfe2c46c6c90d9f0d5937f945bcb53f78ed5f1a",
"0x36446b9a55b206a36d9ddbffb6238e12745e55abaec055813db75e1ec5c1e5eb",
"0x766e40012730116ae79ff376aaad9b9ddf59c42889b085c64a343a883044b94c",
"0xb3084926991137f88133cb81d4bc0aeaf75d80c89a19cbeb0ae205980665a8b8"
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

