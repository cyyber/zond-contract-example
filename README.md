# QRL smart contract example

## Step 1: Install the QRL POS Node

It's recommended you follow the instructions here: [https://test-zond.theqrl.org/install](https://test-zond.theqrl.org/install)

## Step 2: Create a QRL ML-DSA-87 wallet & get some testnet QRL

Use the [wallet creation instructions](https://test-zond.theqrl.org/creating-wallet) to create a wallet and note the public address.

You will now seen some Testnet funds. This can be done by going to the [QRL Discord](https://www.theqrl.org/discord) and requesting some Testnet QRL.  Later we'll have a faucet that can be drawn from.

## Step 3: Fill out config.json with preliminary information

Open up `config.json`, there you'll see:

```json
{
    "provider":"http://localhost:8545",
    "hexseed":"hexseed_here",
    "contract_address":"contract_address_here",
    "tx_required_confirmations": 12
}
```

As an overview:

1. **Provider**: The provider is the node that you send contract requests too. If you're running a local node, it can be changed to `http://localhost:8545/`
2. **Hexseed**: The hexseed of the wallet you want to deploy from **beginning with 0x**.
3. **Contract Address**: The contract address from your deployment step after running `1-deploy.js`
4. **Transaction confirmation blocks** This defines the number of blocks it requires until a transaction will be handled as confirmed.

The hexseed should be prefixed with `0x` and put in the `config.json` file in place of the `hexseed_here` placeholder.

```json
{
    "provider":"http://localhost:4545",
    "hexseed":"0x010000cea755979937e2dc6137c0e51ba0d1eb2a44920cefffb1a860cf194ea7d23d694045fd2c8a72ec5aecf1e7e5bb591ff2",
    "contract_address":"contract_address_here",
    "tx_required_confirmations": 12
}
```

## Step 4: Install dependancies and deploy contract

If you haven't already, install [nvm (node version manager)](https://github.com/nvm-sh/nvm), then use `nvm use` and `npm install` to install the dependencies.

After that, deploy the smart contract

```
node 1-deploy.js
```

It should return a decent sized json response. While it's being confirmed (2 confirmations with the default config), take your `contractAddress`, and put it in the `contract_address` section of `config.json`

```
{
  blockHash: '0xb962fb7e2c908b28d1edd710675b15304e95d6c750c9ffec9c1e4708c6e6adb5',
  blockNumber: 9036,
  contractAddress: 'Qecf54b758c2793466FD48517E5E84313Dc5C89ee',
  cumulativeGasUsed: 949989,
  effectiveGasPrice: 10000,
  from: 'Q2050c62aa00299bdc38da3e353a260efd546d756',
  gasUsed: 949989,
  logs: [
    {
      address: 'Qecf54b758c2793466FD48517E5E84313Dc5C89ee',
      topics: [Array],
      data: '0x0000000000000000000000000000000000000000000000056bc75e2d63100000',
      blockNumber: 9036,
      transactionHash: '0xfbceaac8cd27931b62f995b821dc70e8b04359a27f4ac8c13ae51e6d2e7e3840',
      transactionIndex: 0,
      blockHash: '0xb962fb7e2c908b28d1edd710675b15304e95d6c750c9ffec9c1e4708c6e6adb5',
      logIndex: 0,
      removed: false,
      id: 'log_b373cf94'
    }
  ],
  logsBloom: '0x00020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000200008000000000000000000000000000000002000000000000000020000000000000000000800000000000000000000000010000000000000000000000000000000000000080000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: 'Q2025214ab115eacc5873c29869d955d749d1002a',
  transactionHash: '0xfbceaac8cd27931b62f995b821dc70e8b04359a27f4ac8c13ae51e6d2e7e3840',
  transactionIndex: 0,
  type: '0x2'
}
```

Your `config.json` file should look now look something like this:

```json
{
    "provider":"http://45.76.43.83:4545",
    "hexseed":"0x010000cea755979937e2dc6137c0e51ba0d1eb2a44920cefffb1a860cf194ea7d23d694045fd2c8a72ec5aecf1e7e5bb591ff2",
    "contract_address":"Qecf54b758c2793466FD48517E5E84313Dc5C89ee",
    "tx_required_confirmations": 2
}
```

## Step 5: Interact with the smart contract

Congratulations, you've deployed a smart contract! Now lets interact with it. 

You can do an onchain call by running `2-onchain-call.js`

```javascript
node 2-onchain-call.js
```

## Step 6: Where to go from here

Right now we've just covered running and calling a smart contract to get everyone started. More detailed documentation is in development.
