const axios = require('axios');
const { response } = require('express');

function getprice(cryptoaddress){
    const url = 'https://api.coinbase.com/v2/prices/'
    const add = cryptoaddress
    var price = 0
    flag= 0
    axios.get(url+ add, {
    })
    .then(function (response) {
      //console.log(response.data.data)
      price = response.data.data
    })
    .catch(function (error) {
      //console.log(error);
      flag =1
    })
    .then(function () {
      
        
    }); 
    return flag
  }

  //console.log(getprice('BTC-USD/spot'))
  module.exports = getprice 