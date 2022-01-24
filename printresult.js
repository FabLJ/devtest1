function printresult(crypto, currency, price){
    if(crypto == 'ETH')crypto ='Ethereum'
    else if(crypto =='BTC')crypto = 'Bitcoin'
  
   
    //console.log('|',crypto,'\t|',currency,'\t|', price) 
  
    return [crypto, currency, price]
  }

  module.exports= printresult
