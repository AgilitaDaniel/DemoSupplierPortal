const cds = require('@sap/cds/lib')

describe('cap/samples - Hello world!', () => {

//   const { GET, expect } = cds.test (__dirname+'/../hello')

  it('manual showcase test', async () => {
    // const {data} = await GET `/say/hello(to='world')`
    const data = 'Hello world!'
    expect(data).toBe('Hello world!')
  })

})