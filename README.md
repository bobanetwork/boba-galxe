# Galxe Subgraphs

Subgraphs for the Galxe project. Any txs that have the value of more than or equal to $50 are marked as `isValidDepositor: true`. 

> Note: the batch transaction via the L1 liquidity pool is marked as qualified tx if the total token value is more than or equal to $50.

## Endpoints

### Ethereum Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-mainnet

### BNB Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-bnb

### Avalanche Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-avalanche

### Moonbeam Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-moonbeam

## Example Queries

To test whether a wallet address is qualified for the condition of bridging $50

```mysql
# Query
{
  deposits(where:{
    sender: "0xff6219d252b354dcdd7c935128d8ef5419a4ddca"
    isValidDepositor: true
    timestamp_gt: 1670663808
  }) {
    id
  }
}
# Response
{
  "data": {
    "deposits": [
      {
        "id": "0x3cc3d469eca585865b51d4ba77945a84feff5c627540462c342ebd8c835aec95"
      },
      {
        "id": "0xad6f9fbb0ea6c6759237a8783cd5eda78e88ec03c95dd84693a2696f936e0266"
      }
    ]
  }
}
```

If the length of response is larger than 0, then at least one transaction bridges more than $50.

## Support Tokens

### Ethereum Mainnet

|       | Contract Address                           | Minimium Amount |
| ----- | ------------------------------------------ | --------------- |
| ETH   | 0x0000000000000000000000000000000000000000 | 0.035           |
| USDT  | 0xdac17f958d2ee523a2206206994597c13d831ec7 | 50              |
| USDC  | 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 | 50              |
| BOBA  | 0x42bbfa2e77757c645eeaad1655e0911a7553efbc | 250             |
| SUSHI | 0x6b3595068778dd592e39a122f4f5a5cf09c90fe2 | 40              |
| OMG   | 0xd26114cd6EE289AccF82350c8d8487fedB8A0C07 | 40              |
| DODO  | 0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd | 40              |

### BNB Mainnet

|      | Contract Address                           | Minimum Amount |
| ---- | ------------------------------------------ | -------------- |
| BNB  | 0x0000000000000000000000000000000000000000 | 0.2            |
| USDT | 0x55d398326f99059fF775485246999027B3197955 | 50             |
| USDC | 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d | 50             |
| BUSD | 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56 | 50             |
| BOBA | 0xe0db679377a0f5ae2bae485de475c9e1d8a4607d | 250            |

### Avalanche Mainnet

|        | Contract Address                           | Minimum Amount |
| ------ | ------------------------------------------ | -------------- |
| AVAX   | 0x0000000000000000000000000000000000000000 | 4              |
| USDT.e | 0xc7198437980c041c805A1EDcbA50c1Ce5db95118 | 50             |
| USDt   | 0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7 | 50             |
| USDC   | 0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E | 50             |
| USDC.e | 0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664 | 50             |
| BUSD   | 0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39 | 50             |
| BUSD.e | 0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98 | 50             |
| EVO    | 0x42006ab57701251b580bdfc24778c43c9ff589a1 | 15000          |
| BOBA   | 0x3cd790449cf7d187a143d4bd7f4654d4f2403e02 | 250            |

## Moonbeam Mainnet

|         | Contract Address                           | Minimum Amount |
| ------- | ------------------------------------------ | -------------- |
| GLMR    | 0x0000000000000000000000000000000000000000 | 130            |
| BOBA    | 0x18d17a9fd652d7d6a59903e23792ab97f832ed6c | 250            |
| ETH.mc  | 0xfA9343C3897324496A05fC75abeD6bAC29f8A40f | 0.035          |
| ETH.wh  | 0xab3f0245B83feB11d15AAffeFD7AD465a59817eD | 0.035          |
| USDC.mc | 0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b | 50             |
| USDC.wh | 0x931715FEE2d06333043d11F658C8CE934aC61D0c | 50             |