import { BigInt, Address } from "@graphprotocol/graph-ts"

export const zeroAddress = '0x0000000000000000000000000000000000000000'

export const parseAddressInput = (address: Address | null): string => {
  if (address === null) {
    return zeroAddress
  }
  return address.toHexString()
}

export function isValidDepositor(amount: BigInt, token: string, targetContract: string): boolean {
  // Ethereum
  if (targetContract.toLowerCase() == '0x1a26ef6575b7bbb864d984d9255c069f6c361a14' || targetContract.toLowerCase() == '0xdc1664458d2f0b6090bea60a8793a4e66c2f1c00') {
    // ETH
    if (token == "0x0000000000000000000000000000000000000000") {
      const minAmount = BigInt.fromString("35000000000000000")
      return amount.ge(minAmount)
    }
    // USDT
    if (token.toLowerCase() == "0xdac17f958d2ee523a2206206994597c13d831ec7") {
      const minAmountUSDT = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDT)
    }
    // USDC
    if (token.toLowerCase() == "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48") {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // BOBA
    if (token.toLowerCase() == "0x42bbfa2e77757c645eeaad1655e0911a7553efbc") {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    // SUSHI
    if (token.toLowerCase() == "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2") {
      const minAmountSUSHI = BigInt.fromString("40000000000000000000")
      return amount.ge(minAmountSUSHI)
    }
    return false
  }
  // BNB
  if (targetContract.toLowerCase() == '0x1e0f7f4b2656b14c161f1cadf3076c02908f9acc' || targetContract.toLowerCase() == '0x88b5d70be4fc644c55b164ad09a3dfd44e31ec59') {
    // BNB
    if (token == "0x0000000000000000000000000000000000000000") {
      const minAmount = BigInt.fromString("200000000000000000")
      return amount.ge(minAmount)
    }
    // USDT
    if (token.toLowerCase() == "0x55d398326f99059ff775485246999027b3197955") {
      const minAmountUSDT = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountUSDT)
    }
    // USDC
    if (token.toLowerCase() == "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d") {
      const minAmountUSDC = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountUSDC)
    }
    // BUSD
    if (token.toLowerCase() == "0xe9e7cea3dedca5984780bafc599bd69add087d56") {
      const minAmountBUSD = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountBUSD)
    }
    // BOBA
    if (token.toLowerCase() == "0xe0db679377a0f5ae2bae485de475c9e1d8a4607d") {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    return false
  }
  // Moonbeam
  if (targetContract.toLowerCase() == '0xaf5297f68d48cd2de37ee5cbac0647fba4132985' || targetContract.toLowerCase() == '0x3fbc139f80a474c9b19a734e9abb285b6550df58') {
    // GLMR
    if (token == "0x0000000000000000000000000000000000000000") {
      const minAmount = BigInt.fromString("130000000000000000000")
      return amount.ge(minAmount)
    }
    // BOBA
    if (token.toLowerCase() == "0x18d17a9fd652d7d6a59903e23792ab97f832ed6c") {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    // ETH.mc
    if (token.toLowerCase() == "0xfa9343c3897324496a05fc75abed6bac29f8a40f") {
      const minAmountETH = BigInt.fromString("35000000000000000")
      return amount.ge(minAmountETH)
    }
    // ETH.wh
    if (token.toLowerCase() == "0xab3f0245b83feb11d15aaffefd7ad465a59817ed") {
      const minAmountETH = BigInt.fromString("35000000000000000")
      return amount.ge(minAmountETH)
    }
    // WBTC.mc
    if (token.toLowerCase() == "0x922d641a426dcffaef11680e5358f34d97d112e1") {
      const minAmountWBTC = BigInt.fromString("277777")
      return amount.ge(minAmountWBTC)
    }
    // WBTC.wh
    if (token.toLowerCase() == "0xe57ebd2d67b462e9926e04a8e33f01cd0d64346d") {
      const minAmountWBTC = BigInt.fromString("277777")
      return amount.ge(minAmountWBTC)
    }
    // USDC.mc
    if (token.toLowerCase() == "0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b") {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // USDC.wh
    if (token.toLowerCase() == "0x931715fee2d06333043d11f658c8ce934ac61d0c") {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    return false
  }
  // Avalanche
  if (targetContract.toLowerCase() == '0xf188f1e92b2c78956d2859b84684bfd17103e22c' || targetContract.toLowerCase() == '0x1e6d9f4ddd7c52ef8964e81e5a9a137ee2489b21') {
    // AVAX
    if (token == "0x0000000000000000000000000000000000000000") {
      const minAmount = BigInt.fromString("4000000000000000000")
      return amount.ge(minAmount)
    }
    // USDT.e
    if (token.toLowerCase() == "0xc7198437980c041c805a1edcba50c1ce5db95118") {
      const minAmountUSDT = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDT)
    }
    // USDt
    if (token.toLowerCase() == "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7") {
      const minAmountUSDT = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDT)
    }
    // USDC
    if (token.toLowerCase() == "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e") {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // USDC.e
    if (token.toLowerCase() == "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664") {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // BUSD.e
    if (token.toLowerCase() == "0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98") {
      const minAmountBUSD = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountBUSD)
    }
    // BUSD
    if (token.toLowerCase() == "0xd586e7f844cea2f87f50152665bcbc2c279d8d70") {
      const minAmountDAI = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountDAI)
    }
    // DAI
    if (token.toLowerCase() == "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39") {
      const minAmountBUSD = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountBUSD)
    }
    // EVO
    if (token.toLowerCase() == "0x42006ab57701251b580bdfc24778c43c9ff589a1") {
      const minAmountEVO = BigInt.fromString("15000000000000000000000")
      return amount.ge(minAmountEVO)
    }
    // BOBA
    if (token.toLowerCase() == "0x3cd790449cf7d187a143d4bd7f4654d4f2403e02") {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    return false
  }
  return false
}