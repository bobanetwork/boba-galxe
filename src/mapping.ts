import { Address } from '@graphprotocol/graph-ts'

import { ERC20DepositInitiated, ETHDepositInitiated } from '../generated/Proxy__L1StandardBridge/Proxy__L1StandardBridge'
import { ClientDepositL1 } from '../generated/Proxy__L1LiquidityPool/Proxy__L1LiquidityPool'
import { Deposit } from '../generated/schema'

import { isValidDepositor, parseAddressInput } from './tokenFilter'

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

  storage.save()
}

export function handleStandardBridgeETHDepositInitiated(event: ETHDepositInitiated): void {
  let txHash = event.transaction.hash.toHex()
  let storage = new Deposit(txHash)
  storage.id = txHash
  storage.transactionHash = txHash
  storage.sender = event.params._from
  storage.token = Address.fromString('0x0000000000000000000000000000000000000000')
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

  storage.save()
}

export function handleLPClientDepositL1(event: ClientDepositL1): void {
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

  storage.save()
}