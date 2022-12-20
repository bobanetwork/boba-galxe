
import { BigInt } from "@graphprotocol/graph-ts"

// Native Token
export const zeroAddress = '0x0000000000000000000000000000000000000000'
export const L2NativeToken = '0x4200000000000000000000000000000000000006'

// BOBA
export const BOBAEth = '0x42bbfa2e77757c645eeaad1655e0911a7553efbc'.toLowerCase()
export const BOBAEthL2 = '0xa18bF3994C0Cc6E3b63ac420308E5383f53120D7'.toLowerCase()
export const BOBABnb = '0xe0db679377a0f5ae2bae485de475c9e1d8a4607d'.toLowerCase()
export const BOBAMoonbeam = '0x18d17a9fd652d7d6a59903e23792ab97f832ed6c'.toLowerCase()
export const BOBAAvalanche = '0x3cd790449cf7d187a143d4bd7f4654d4f2403e02'.toLowerCase()

// USDC
export const USDCEth = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'.toLowerCase()
export const USDCEthL2 = '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc'.toLowerCase()
export const USDCBnb = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'.toLowerCase() // 18 decimals
export const USDCBnbL2 = '0x9F98f9F312D23d078061962837042b8918e6aff2'.toLowerCase() // 18 decimals
export const USDCmcMoonbeam = '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b'.toLowerCase()
export const USDCmcMoonbeamL2 = '0x078b2D8ce51eD85400959FC5c362d1c53A41C375'.toLowerCase()
export const USDCwhMoonbeam = '0x931715FEE2d06333043d11F658C8CE934aC61D0c'.toLowerCase()
export const USDCwhMoonbeamL2 = '0xEa89117fC0150f9042b0aE0C3058ea6dB970A780'.toLowerCase()
export const USDCeAvalanche = '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664'.toLowerCase()
export const USDCeAvalancheL2 = '0x126969743a6d300bab08F303f104f0f7DBAfbe20'.toLowerCase()
export const USDCAvalanche = '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'.toLowerCase()
export const USDCAvalancheL2 = '0x12bb1A120dcF8Cb7152eDAC9f04d176DD7f41F7e'.toLowerCase()

// USDT
export const USDTEth = '0xdac17f958d2ee523a2206206994597c13d831ec7'.toLowerCase()
export const USDTEthL2 = '0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d'.toLowerCase()
export const USDTBnb = '0x55d398326f99059fF775485246999027B3197955'.toLowerCase() // 18 decimals
export const USDTBnbL2 = '0x1E633Dcd0d3D349126983D58988051F7c62c543D'.toLowerCase() // 18 decimals
export const USDTeAvalanche = '0xc7198437980c041c805A1EDcbA50c1Ce5db95118'.toLowerCase()
export const USDTeAvalancheL2 = '0x4ED96c1dc969d7E2310D9582A68c39556C005912'.toLowerCase()
export const USDTAvalanche = '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7'.toLowerCase()
export const USDTAvalancheL2 = '0xfaA13D82756f1e0e4dec9416b83121db3Fc35199'.toLowerCase()

// BUSD
export const BUSDBnb = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'.toLowerCase()
export const BUSDBnbL2 = '0x4a2c2838c3907D024916c3f4Fe07832745Ae4bec'.toLowerCase()
export const BUSDeAvalanche = '0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98'.toLowerCase()
export const BUSDeAvalancheL2 = '0xb8B0034CFD89925944C07Ac6CcB2834d1774cfb6'.toLowerCase()
export const BUSDAvalanche = '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39'.toLowerCase()
export const BUSDAvalancheL2 = '0x87e062dE99Ed71aF9b22dDA63e1b6D43333798f8'.toLowerCase()

// OMG
export const OMGEth = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'.toLowerCase()
export const OMGEthL2 = '0xe1E2ec9a85C607092668789581251115bCBD20de'.toLowerCase()

// DODO
export const DODOEth = '0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd'.toLowerCase()
export const DODOEthL2 = '0x572c5B5BF34f75FB62c39b9BFE9A75bb0bb47984'.toLowerCase()

// SUSHI
export const SUSHIEth = '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2'.toLowerCase()
export const SUSHIEthL2 = '0x5fFccc55C0d2fd6D3AC32C26C020B3267e933F1b'.toLowerCase()

// ETH
export const ETHmcMoonbeam = '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f'.toLowerCase()
export const ETHmcMoonbeamL2 = '0x9790a5640c4cca26e8689CC4163d5719C1A79A03'.toLowerCase()
export const ETHwhMoonbeam = '0xab3f0245B83feB11d15AAffeFD7AD465a59817eD'.toLowerCase()
export const ETHwhMoonbeamL2 = '0x03Ee748da8951c976BfC06190b7e646c8Cc3f2d1'.toLowerCase()

// EVO
export const EVOAvalanche = '0x42006ab57701251b580bdfc24778c43c9ff589a1'.toLowerCase()
export const EVOAvalancheL2 = '0xc8849f32138de93F6097199C5721a9EfD91ceE01'.toLowerCase()

// price
export const ETHPrice = BigInt.fromString('1400')
export const AVAXPrice = BigInt.fromString('125') // has to divide by 10
export const GLMRPrice = BigInt.fromString('4') // has to divide by 10
export const BOBAPrice = BigInt.fromString('2') // has to divide by 10
export const BNBPrice = BigInt.fromString('250') // has to divide by 10
export const OMGPrice = BigInt.fromString('125') // has to divide by 100
export const DODOPrice = BigInt.fromString('125') // has to divide by 100
export const SUSHIPrice = BigInt.fromString('125') // has to divide by 100
export const EVOPrice = BigInt.fromString('333') // has to divide by 100000

// LP
export const L1LPEth = '0x1A26ef6575B7BBB864d984D9255C069F6c361a14'.toLowerCase()
export const L1StandardBridgeEth = '0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00'.toLowerCase()
export const L1LPBnb = '0x88b5d70be4fc644c55b164AD09A3DFD44E31eC59'.toLowerCase()
export const L1StandardBridgeBnb = '0x1E0f7f4b2656b14C161f1caDF3076C02908F9ACC'.toLowerCase()
export const L1LPAvalanche = '0x1E6D9F4dDD7C52EF8964e81E5a9a137Ee2489b21'.toLowerCase()
export const L1StandardBridgeAvalanche = '0xf188F1e92B2c78956D2859b84684BFD17103e22c'.toLowerCase()
export const L1LPMoonbeam = '0x3fBc139f80a474c9B19A734e9ABb285b6550dF58'.toLowerCase()
export const L1StandardBridgeMoonbeam = '0xAf5297f68D48cd2DE37Ee5cbaC0647fbA4132985'.toLowerCase()
