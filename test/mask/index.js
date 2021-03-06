import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import demimonde from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await demimonde({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts