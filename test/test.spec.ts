import { expect } from "./setup";
import fetch from "node-fetch";

const ethAPI =
  "https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-mainnet";
const bnbAPI = "https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-bnb";
const avaxAPI = "https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-avalanche";
const moonbeamAPI = "https://api.thegraph.com/subgraphs/name/bobanetwork/boba-galxe-moonbeam";

const apis = [ethAPI, bnbAPI, avaxAPI, moonbeamAPI];

const apiCall = async (apiURL: string, query: string) => {
  const resp = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
  return resp
}

describe("abi test", () => {
  it("should fetach events", async () => {
    const query = `query {
      deposits(where:{
        isValidDepositor: true
      }) {
        sender
      }}
    `;
    for (const apiURL of apis) {
      const resp = await apiCall(apiURL, query)
      const body = await resp.json();
      expect(body.data.deposits.length).to.be.gt(1)
    }
  });

  it('should query events', async () => {
    // ethereum
    const payload = {
      boba: {
        address: '0x3f295442aa481677bfff7330001511d1a1b3d455',
        blockNumber: '16183061',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      sushi: {
        address: '0x4bb4c1b0745ef7b4642feeccd0740dec417ca0a0',
        blockNumber: '15947317',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      omg: {
        address: '0xc2df5c999cc42086bb212a85c2f4dffb5761695d',
        blockNumber: '15950175',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      usdt: {
        address: '0xd95d47e2f7723d463d585c774a3f020836b6dcf2',
        blockNumber: '15995397',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      usdc: {
        address: '0x04db8416e90422aff6625d8dfc61b32e77da46f3',
        blockNumber: '16123051',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      eth: {
        address: '0x5180db0237291a6449dda9ed33ad90a38787621c',
        blockNumber: '16219905',
        event: 'ETHDepositInitiated',
        isQualified: true
      },
      dodo: {
        address: '0x063366f0f022871891e83ddf2f5a8931703b46a1',
        blockNumber: '16205525',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      ethLP: {
        address: '0xbe85bcb9985353b703d3f6b816324b3dda618b81',
        blockNumber: '15999900',
        event: 'ClientDepositL1',
        isQualified: true
      },
      bobaLP: {
        address: '0x6796198cb0db153648d1ef60ac94f5784eaee8d0',
        blockNumber: '16117227',
        event: 'ClientDepositL1',
        isQualified: true
      },
      omgLP: {
        address: '0x70f73bbcdf0b27248c2c9c9faf408f45aa870e32',
        blockNumber: '15942504',
        event: 'ClientDepositL1',
        isQualified: true
      },
      ethUSDCBatchLP: {
        address: '0xbf9ff8c9fa62d72b6f80a514f7bf70ba8574eee7',
        blockNumber: '15805478',
        event: 'ClientDepositL1Batch',
        isQualified: true
      },
      ethUnqualified: {
        address: '0xccc68eec0b2a2c3a2ac9baf962f6564c09421be4',
        blockNumber: '16216685',
        event: 'ETHDepositInitiated',
        isQualified: false
      },
      ethLPUnqualified: {
        address: '0x12e6cc56a058e2f48ce1e398f52d33981f83188f',
        blockNumber: '16194295',
        event: 'ClientDepositL1',
        isQualified: false
      },
      bobaLPUnqualified: {
        address: '0x3aff09f0891cd4ed24ecfc125f1476ff4e8f8671',
        blockNumber: '16129240',
        event: 'ClientDepositL1',
        isQualified: false
      },
      bobaUSDTBatchUnqualified: {
        address: '0x6b49c89dc6480094c234a0db749de8649d44b1fa',
        blockNumber: '16115032',
        event: 'ClientDepositL1Batch',
        isQualified: false
      },
    }
    for (const [tokenName, info] of Object.entries(payload)) {
      const query = `query {
        deposits(where:{
          sender: "${info.address}"
          isValidDepositor: ${info.isQualified ? true : false}
          blockNumber: ${info.blockNumber}
          event: "${info.event}"
        }) {
          sender
          blockNumber
        }}
      `
      const resp = await apiCall(ethAPI, query)
      const body = await resp.json()
      const data = body.data.deposits
      expect(data.length).to.eq(1)
      expect(data[0].sender).to.eq(info.address)
      expect(data[0].blockNumber).to.eq(info.blockNumber)
      console.log(`    -> Ethereum Token: ${tokenName} -> Qualified test passed!`)
    }

    // bnb
    const bnbPayload = {
      bnb: {
        address: '0xd88f19d444019b3726d83099c8c1dd9b85f19bac',
        blockNumber: '23855958',
        event: 'ETHDepositInitiated',
        isQualified: true
      },
      USDC: {
        address: '0x27229c5c34c018e6a43d2a00f8f81e06f54a9a5d',
        blockNumber: '23948478',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      BUSD: {
        address: '0x27229c5c34c018e6a43d2a00f8f81e06f54a9a5d',
        blockNumber: '23946693',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      BOBA: {
        address: '0xe1b5383666e5b6ea684b98371d6abccdb8f4e4d9',
        blockNumber: '23545117',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      bnbUnqualified: {
        address: '0x3483ed7d3444a311a7585f0e59c9a74d6c111218',
        blockNumber: '24041001',
        event: 'ETHDepositInitiated',
        isQualified: false
      },
      hackerUnqualified: {
        address: '0x4bb4c1b0745ef7b4642feeccd0740dec417ca0a0',
        blockNumber: '23622648',
        event: 'ERC20DepositInitiated',
        isQualified: false
      },
      busdUnqualified: {
        address: '0x2702d89c1c8658b49c45dd460deebcc45faec03c',
        blockNumber: '23045886',
        event: 'ERC20DepositInitiated',
        isQualified: false
      },
      usdcUnqualified: {
        address: '0x4d842c484484f629064b99c57104174f87debe06',
        blockNumber: '22813226',
        event: 'ERC20DepositInitiated',
        isQualified: false
      },
    }
    for (const [tokenName, info] of Object.entries(bnbPayload)) {
      const query = `query {
        deposits(where:{
          sender: "${info.address}"
          isValidDepositor: ${info.isQualified ? true : false}
          blockNumber: ${info.blockNumber}
          event: "${info.event}"
        }) {
          sender
          blockNumber
        }}
      `
      const resp = await apiCall(bnbAPI, query)
      const body = await resp.json()
      const data = body.data.deposits
      expect(data.length).to.eq(1)
      expect(data[0].sender).to.eq(info.address)
      expect(data[0].blockNumber).to.eq(info.blockNumber)
      console.log(`    -> BNB Token: ${tokenName} -> Qualified test passed!`)
    }

    // avalanche
    const avalanchePayload = {
      avax: {
        address: '0xcf94b92133c23e98788b0b091239dffba9ced457',
        blockNumber: '23686257',
        event: 'ETHDepositInitiated',
        isQualified: true
      },
      evo: {
        address: '0x53d8637e3f0490bf365a0cf8a0c6b4d9a4a02c4a',
        blockNumber: '23378450',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      evoLP: {
        address: '0x16a3b0b9120af92d3593d71b19354f541d7874ff',
        blockNumber: '23625584',
        event: 'ClientDepositL1',
        isQualified: true
      },
      avaxUnqualified: {
        address: '0x60c7773ba96bb377cef8506807b8cba9a8d5cf6e',
        blockNumber: '23851689',
        event: 'ETHDepositInitiated',
        isQualified: false
      },
      evoUnqualified: {
        address: '0x992a37a955ccac4cbbceae4ed429d7c03021a86e',
        blockNumber: '23768983',
        event: 'ERC20DepositInitiated',
        isQualified: false
      },
      evoLPUnqualified: {
        address: '0x1280a0129fa93bb1f1a5ebb5c8d428d8054c9b47',
        blockNumber: '23714838',
        event: 'ClientDepositL1',
        isQualified: false
      },
    }
    for (const [tokenName, info] of Object.entries(avalanchePayload)) {
      const query = `query {
        deposits(where:{
          sender: "${info.address}"
          isValidDepositor: ${info.isQualified ? true : false}
          blockNumber: ${info.blockNumber}
          event: "${info.event}"
        }) {
          sender
          blockNumber
        }}
      `
      const resp = await apiCall(avaxAPI, query)
      const body = await resp.json()
      const data = body.data.deposits
      expect(data.length).to.eq(1)
      expect(data[0].sender).to.eq(info.address)
      expect(data[0].blockNumber).to.eq(info.blockNumber)
      console.log(`    -> AVAX Token: ${tokenName} -> Qualified test passed!`)
    }

    // moonbeam
    const moonbeamPayload = {
      GLMR: {
        address: '0x1a567b84377e64bdab026342c177870cc7410ead',
        blockNumber: '2297275',
        event: 'ETHDepositInitiated',
        isQualified: true
      },
      boba: {
        address: '0xc31ca2482c936d92dd465391b45940e802a86edc',
        blockNumber: '2419808',
        event: 'ERC20DepositInitiated',
        isQualified: true
      },
      GLMRUnqualified: {
        address: '0x2c15c2759c48dc970d5591f8044826b629437e5d',
        blockNumber: '2541039',
        event: 'ETHDepositInitiated',
        isQualified: false
      },
      bobaUnqualified: {
        address: '0xe469220d444d4c30361f1416082ea4bf3f2a55b3',
        blockNumber: '2327304',
        event: 'ERC20DepositInitiated',
        isQualified: false
      },
    }
    for (const [tokenName, info] of Object.entries(moonbeamPayload)) {
      const query = `query {
        deposits(where:{
          sender: "${info.address}"
          isValidDepositor: ${info.isQualified ? true : false}
          blockNumber: ${info.blockNumber}
          event: "${info.event}"
        }) {
          sender
          blockNumber
        }}
      `
      const resp = await apiCall(moonbeamAPI, query)
      const body = await resp.json()
      const data = body.data.deposits
      expect(data.length).to.eq(1)
      expect(data[0].sender).to.eq(info.address)
      expect(data[0].blockNumber).to.eq(info.blockNumber)
      console.log(`    -> Moonbeam Token: ${tokenName} -> Qualified test passed!`)
    }

  })
});
