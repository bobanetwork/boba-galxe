/* External Imports */
import chai from 'chai'
import Mocha from 'mocha'
import { solidity } from 'ethereum-waffle'

chai.use(solidity)
const should = chai.should()
const expect = chai.expect

export { should, expect, Mocha }
