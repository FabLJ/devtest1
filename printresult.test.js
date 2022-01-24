const printresult = require('./printresult')


test('Print values', () =>{
    expect(printresult('BTC','USD',2000))
    .toEqual(['Bitcoin','USD', 2000])
})

