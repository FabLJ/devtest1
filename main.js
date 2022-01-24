const axios = require('axios');

var btc = 'BTC-USD/spot'
var eth = 'ETH-USD/spot'
var obj =0

  
  //in the dev paper there was not a specification to run repetitively or in real-time, so I just made to get the data
  //for more data would be better to run different, probably using sockets to real time response

  //In this code I selected the most popular cryptocurrencies, bitcoin and ethereum. All the data are from free endpoints, I did not create an account.

  //get request to get bictoin price
  getprice(btc)
  getprice(eth)
  //get request to get ethereum price
function getprice(cryptoaddress){
  const url = 'https://api.coinbase.com/v2/prices/'
  const add = cryptoaddress
  var price = 0
  res = new Object();

  axios.get(url+ add, {
  })
  .then(function (response) {
   
    price = response.data.data
  })
  .catch(function (error) {
    return(1)
  })
  .then(function () {
    printresult(price.base, price.currency, price.amount)
    return(0)
  }); 
}

function printresult(crypto, currency, price){
  if(crypto == 'ETH')crypto ='Ethereum'
  else if(crypto =='BTC')crypto = 'Bitcoin'

 
  console.log('|',crypto,'\t|',currency,'\t|', price) 

  return [crypto, currency, price]
}


