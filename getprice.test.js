const axios = require('axios');
const { TestWatcher } = require('jest')
const getprice = require('./getprice')

test('Get prices', () =>{
    expect(getprice('BTC-USD/spot'))
    .toBe(0)
})