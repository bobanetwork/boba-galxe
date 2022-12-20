import { BigInt, Address } from "@graphprotocol/graph-ts"

import {
  zeroAddress, L2NativeToken, BOBAEth, BOBAEthL2, BOBABnb, BOBAMoonbeam, USDCEth,
  USDCEthL2, USDCBnb, USDCBnbL2, USDCmcMoonbeam, USDCmcMoonbeamL2, USDCwhMoonbeam,
  USDCwhMoonbeamL2, USDCeAvalanche, USDCeAvalancheL2, USDCAvalanche, USDCAvalancheL2,
  USDTEth, USDTEthL2, USDTBnb, USDTBnbL2, USDTeAvalanche, USDTeAvalancheL2, USDTAvalanche,
  USDTAvalancheL2, BUSDBnb, BUSDBnbL2, BUSDAvalanche, BUSDAvalancheL2, BUSDeAvalanche,
  BUSDeAvalancheL2, OMGEth, OMGEthL2, DODOEth, DODOEthL2, SUSHIEth, SUSHIEthL2, ETHmcMoonbeam,
  ETHmcMoonbeamL2, ETHwhMoonbeam, ETHwhMoonbeamL2, EVOAvalanche, EVOAvalancheL2,
  ETHPrice, AVAXPrice, BNBPrice, GLMRPrice, OMGPrice,
  DODOPrice, SUSHIPrice, EVOPrice,
  L1LPEth, L1LPAvalanche, L1LPBnb, L1LPMoonbeam,
  L1StandardBridgeEth, L1StandardBridgeAvalanche, L1StandardBridgeBnb, L1StandardBridgeMoonbeam, BOBAAvalanche, BOBAPrice,
} from './constants'

export const parseAddressInput = (address: Address | null): string => {
  if (address === null) {
    return zeroAddress
  }
  return address.toHexString()
}

export const getUSDValue = (token: string, amount: BigInt, targetContract: string): string => {
  const tokenLowerCase = token.toLowerCase()
  const decimal18 = BigInt.fromString('1000000000000000000')
  const decimal6 = BigInt.fromString('1000000')
  const decimal5 = BigInt.fromString('100000')
  const decimal2 = BigInt.fromString('100')
  const decimal1 = BigInt.fromString('10')
  if (tokenLowerCase == zeroAddress){
    // ETH
    if (targetContract.toLowerCase() == L1StandardBridgeEth || targetContract.toLowerCase() == L1LPEth) {
      return amount.times(ETHPrice).div(decimal18).toString()
    }
    // BNB
    if (targetContract.toLowerCase() == L1StandardBridgeBnb || targetContract.toLowerCase() == L1LPBnb) {
      return amount.times(BNBPrice).div(decimal18).toString()
    }
    // GLMR
    if (targetContract.toLowerCase() == L1StandardBridgeMoonbeam || targetContract.toLowerCase() == L1LPMoonbeam) {
      return amount.times(GLMRPrice).div(decimal18).div(decimal1).toString()
    }
    // AVAX
    if (targetContract.toLowerCase() == L1StandardBridgeAvalanche || targetContract.toLowerCase() == L1LPAvalanche) {
      return amount.times(AVAXPrice).div(decimal18).div(decimal1).toString()
    }
  }
  // ETH
  if (tokenLowerCase == ETHmcMoonbeam || tokenLowerCase == ETHmcMoonbeamL2 || tokenLowerCase == ETHwhMoonbeam ||
    tokenLowerCase == ETHwhMoonbeamL2 || (targetContract.toLowerCase() == L1LPEth && tokenLowerCase == L2NativeToken)) {
    return amount.times(ETHPrice).div(decimal18).toString()
  }
  // BOBA
  if (
    tokenLowerCase == BOBAEth || tokenLowerCase == BOBABnb || tokenLowerCase == BOBAAvalanche ||
    tokenLowerCase == BOBAMoonbeam || tokenLowerCase == BOBAEthL2 ||
    (targetContract.toLowerCase() != L1LPEth && tokenLowerCase == L2NativeToken)
  ) {
    return amount.times(BOBAPrice).div(decimal18).div(decimal1).toString()
  }
  // USDC || USDT decimal 6
  if (
    tokenLowerCase == USDCEth || tokenLowerCase == USDCEthL2 || tokenLowerCase == USDCmcMoonbeam ||
    tokenLowerCase == USDCmcMoonbeamL2 || tokenLowerCase == USDCwhMoonbeam || tokenLowerCase == USDCwhMoonbeamL2 ||
    tokenLowerCase == USDCeAvalanche || tokenLowerCase == USDCeAvalancheL2 || tokenLowerCase == USDCAvalanche ||
    tokenLowerCase == USDCAvalancheL2 || tokenLowerCase == USDTEth || tokenLowerCase == USDTEthL2 ||
    tokenLowerCase == USDTeAvalanche || tokenLowerCase == USDTeAvalancheL2 || tokenLowerCase == USDTAvalanche ||
    tokenLowerCase == USDTAvalancheL2
  ) {
    return amount.div(decimal6).toString()
  }
  // USDC ||USDT || BUSD decimal 18
  if (
    tokenLowerCase == USDCBnb || tokenLowerCase == USDCBnbL2 || tokenLowerCase == USDTBnb ||
    tokenLowerCase == USDTBnbL2 || tokenLowerCase == BUSDBnb || tokenLowerCase == BUSDBnbL2 ||
    tokenLowerCase == BUSDAvalanche || tokenLowerCase == BUSDAvalancheL2 || tokenLowerCase == BUSDeAvalanche ||
    tokenLowerCase == BUSDeAvalancheL2
  ) {
    return amount.div(decimal18).toString()
  }
  // OMG
  if (tokenLowerCase == OMGEth || tokenLowerCase == OMGEthL2) {
    return amount.times(OMGPrice).div(decimal18).div(decimal2).toString()
  }
  // DODO
  if (tokenLowerCase == DODOEth || tokenLowerCase == DODOEthL2) {
    return amount.times(DODOPrice).div(decimal18).div(decimal2).toString()
  }
  // SUSHI
  if (tokenLowerCase == SUSHIEth || tokenLowerCase == SUSHIEthL2) {
    return amount.times(SUSHIPrice).div(decimal18).div(decimal2).toString()
  }
  // EVO
  if (tokenLowerCase == EVOAvalanche || tokenLowerCase == EVOAvalancheL2) {
    return amount.times(EVOPrice).div(decimal18).div(decimal5).toString()
  }
  return '0'
}

export function isValidDepositor(amount: BigInt, token: string, targetContract: string): boolean {
  // Ethereum
  if (targetContract.toLowerCase() == L1StandardBridgeEth || targetContract.toLowerCase() == L1LPEth) {
    // ETH
    if (token == zeroAddress) {
      const minAmount = BigInt.fromString("35000000000000000")
      return amount.ge(minAmount)
    }
    // USDT
    if (token.toLowerCase() == USDTEth) {
      const minAmountUSDT = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDT)
    }
    // USDC
    if (token.toLowerCase() == USDCEth) {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // BOBA
    if (token.toLowerCase() == BOBAEth) {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    // SUSHI
    if (token.toLowerCase() == SUSHIEth) {
      const minAmountSUSHI = BigInt.fromString("40000000000000000000")
      return amount.ge(minAmountSUSHI)
    }
    // OMG
    if (token.toLowerCase() == OMGEth) {
      const minAmountOMG = BigInt.fromString("40000000000000000000")
      return amount.ge(minAmountOMG)
    }
    // DODO
    if (token.toLowerCase() == DODOEth) {
      const minAmountDODO = BigInt.fromString("400000000000000000000")
      return amount.ge(minAmountDODO)
    }
    return false
  }
  // BNB
  if (targetContract.toLowerCase() == L1StandardBridgeBnb || targetContract.toLowerCase() == L1LPBnb) {
    // BNB
    if (token == zeroAddress) {
      const minAmount = BigInt.fromString("200000000000000000")
      return amount.ge(minAmount)
    }
    // USDT
    if (token.toLowerCase() == USDTBnb) {
      const minAmountUSDT = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountUSDT)
    }
    // USDC
    if (token.toLowerCase() == USDCBnb) {
      const minAmountUSDC = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountUSDC)
    }
    // BUSD
    if (token.toLowerCase() == BUSDBnb) {
      const minAmountBUSD = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountBUSD)
    }
    // BOBA
    if (token.toLowerCase() == BOBABnb) {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    return false
  }
  // Moonbeam
  if (targetContract.toLowerCase() == L1StandardBridgeMoonbeam || targetContract.toLowerCase() == L1LPMoonbeam) {
    // GLMR
    if (token == zeroAddress) {
      const minAmount = BigInt.fromString("130000000000000000000")
      return amount.ge(minAmount)
    }
    // BOBA
    if (token.toLowerCase() == BOBAMoonbeam) {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    // ETH.mc
    if (token.toLowerCase() == ETHmcMoonbeam) {
      const minAmountETH = BigInt.fromString("35000000000000000")
      return amount.ge(minAmountETH)
    }
    // ETH.wh
    if (token.toLowerCase() == ETHwhMoonbeam) {
      const minAmountETH = BigInt.fromString("35000000000000000")
      return amount.ge(minAmountETH)
    }
    // USDC.mc
    if (token.toLowerCase() == USDCmcMoonbeam) {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // USDC.wh
    if (token.toLowerCase() == USDCwhMoonbeam) {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    return false
  }
  // Avalanche
  if (targetContract.toLowerCase() == L1StandardBridgeAvalanche || targetContract.toLowerCase() == L1LPAvalanche) {
    // AVAX
    if (token == zeroAddress) {
      const minAmount = BigInt.fromString("4000000000000000000")
      return amount.ge(minAmount)
    }
    // USDT.e
    if (token.toLowerCase() == USDTeAvalanche) {
      const minAmountUSDT = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDT)
    }
    // USDt
    if (token.toLowerCase() == USDTAvalanche) {
      const minAmountUSDT = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDT)
    }
    // USDC
    if (token.toLowerCase() == USDCAvalanche) {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // USDC.e
    if (token.toLowerCase() == USDCeAvalanche) {
      const minAmountUSDC = BigInt.fromString("50000000")
      return amount.ge(minAmountUSDC)
    }
    // BUSD.e
    if (token.toLowerCase() == BUSDeAvalanche) {
      const minAmountBUSD = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountBUSD)
    }
    // BUSD
    if (token.toLowerCase() == BUSDAvalanche) {
      const minAmountDAI = BigInt.fromString("50000000000000000000")
      return amount.ge(minAmountDAI)
    }
    // EVO
    if (token.toLowerCase() == EVOAvalanche) {
      const minAmountEVO = BigInt.fromString("15000000000000000000000")
      return amount.ge(minAmountEVO)
    }
    // BOBA
    if (token.toLowerCase() == BOBAAvalanche) {
      const minAmountBOBA = BigInt.fromString("250000000000000000000")
      return amount.ge(minAmountBOBA)
    }
    return false
  }
  return false
}