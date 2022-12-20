import { Address, BigInt } from '@graphprotocol/graph-ts'

import { ERC20DepositInitiated, ETHDepositInitiated } from '../generated/Proxy__L1StandardBridge/Proxy__L1StandardBridge'
import { ClientDepositL1, ClientDepositL1Batch } from '../generated/Proxy__L1LiquidityPool/Proxy__L1LiquidityPool'
import { Deposit } from '../generated/schema'

import { isValidDepositor, parseAddressInput, getUSDValue } from './utils'
import { zeroAddress } from './constants'

export function handleStandardBridgeERC20DepositInitiated(event: ERC20DepositInitiated): void {
  let txHash = event.transaction.hash.toHex()
  let storage = new Deposit(txHash)
  storage.id = txHash
  storage.transactionHash = txHash
  storage.sender = event.params._from
  storage.token = event.params._l1Token
  storage.amount = event.params._amount.toString()
  storage.blockNumber = event.block.number
  storage.timestamp = event.block.timestamp
  storage.event = 'ERC20DepositInitiated'
  storage.targetContract = event.transaction.to

  storage.isValidDepositor = isValidDepositor(
    event.params._amount,
    parseAddressInput(event.params._l1Token),
    parseAddressInput(event.transaction.to)
  )
  storage.USDValue = getUSDValue(
    parseAddressInput(event.params._l1Token),
    event.params._amount,
    parseAddressInput(event.transaction.to)
  )

  storage.save()
}

export function handleStandardBridgeETHDepositInitiated(event: ETHDepositInitiated): void {
  let txHash = event.transaction.hash.toHex()
  let storage = new Deposit(txHash)
  storage.id = txHash
  storage.transactionHash = txHash
  storage.sender = event.params._from
  storage.token = Address.fromString(zeroAddress)
  storage.amount = event.params._amount.toString()
  storage.blockNumber = event.block.number
  storage.timestamp = event.block.timestamp
  storage.event = 'ETHDepositInitiated'
  storage.targetContract = event.transaction.to

  storage.isValidDepositor = isValidDepositor(
    event.params._amount,
    '0x0000000000000000000000000000000000000000',
    parseAddressInput(event.transaction.to)
  )

  storage.USDValue = getUSDValue(
    parseAddressInput(Address.fromString(zeroAddress)),
    event.params._amount,
    parseAddressInput(event.transaction.to)
  )

  storage.save()
}

export function handleClientDepositL1(event: ClientDepositL1): void {
  let txHash = event.transaction.hash.toHex()
  let storage = new Deposit(txHash)

  storage.id = txHash
  storage.transactionHash = txHash
  storage.sender = event.params.sender
  storage.amount = event.params.receivedAmount.toString()
  storage.token = event.params.tokenAddress
  storage.blockNumber = event.block.number
  storage.timestamp = event.block.timestamp
  storage.event = 'ClientDepositL1'
  storage.targetContract = event.transaction.to

  storage.isValidDepositor = isValidDepositor(
    event.params.receivedAmount,
    parseAddressInput(event.params.tokenAddress),
    parseAddressInput(event.transaction.to)
  )
  storage.USDValue = getUSDValue(
    parseAddressInput(event.params.tokenAddress),
    event.params.receivedAmount,
    parseAddressInput(event.transaction.to)
  )

  storage.save()
}

export function handleClientDepositL1Batch(event: ClientDepositL1Batch): void {
  let txHash = event.transaction.hash.toHex()
  let storage = new Deposit(txHash)

  storage.id = txHash
  storage.transactionHash = txHash
  storage.sender = event.transaction.from
  storage.blockNumber = event.block.number
  storage.timestamp = event.block.timestamp

  const amount: String[] = []
  const tokens: String[] = []
  let USDValue = BigInt.fromString('0')

  const payloadLength = event.parameters.length
  for (let i = 0; i < payloadLength; i++) {
    const payload = event.params._tokens
    amount.push(payload[i].amount.toString())
    tokens.push(parseAddressInput(payload[i].l2TokenAddress))
    const USDValueSrt = getUSDValue(parseAddressInput(payload[i].l2TokenAddress), payload[i].amount, parseAddressInput(event.transaction.to))
    USDValue = USDValue.plus(BigInt.fromString(USDValueSrt))
  }

  storage.batchAmounts = amount.toString()
  storage.batchTokens = tokens.toString()
  storage.USDValue = USDValue.toString()
  storage.event = 'ClientDepositL1Batch'

  if (USDValue.ge(BigInt.fromString('50'))) {
    storage.isValidDepositor = true
  } else {
    storage.isValidDepositor = false
  }

  storage.save()
}