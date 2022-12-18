# Galxe Subgraphs

## Endpoints

### Ethereum Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-mainnet

### BNB Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-bnb

### Avalanche Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-avalanche

### Moonbeam Mainnet

https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-moonbeam

## Example Requests

To test whether a wallet address is qualified the condition of bridging $50

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