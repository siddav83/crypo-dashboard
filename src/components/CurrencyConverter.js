import React from 'react'
import { useState } from 'react'
import ExchangeRate from './ExchangeRate'
import axios from 'axios'

const CurrencyConverter = () => {
  const currencies = ["BTC", 'ETH','USD','XRP','LTC','ADA','ZAR']
  const [ chosenPrimaryKey, setChosenPrimaryKey] =useState("BTC")
  const [ chosenSecondaryKey, setChosenSecondaryKey] =useState("BTC")
  const [ amount, setAmount ] = useState(1)
  const [ exchangeRate, setExchangeRate ] = useState(0)
  const [ primaryExchanged, setPrimaryExchanged ] = useState("BTC")
  const [ secondaryExchanged, setSecondaryExchanged ] = useState("BTC")
  const [ result, setResult ] = useState(0)



const convert =() => {
const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {from_currency: chosenPrimaryKey, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryKey},
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY
}
}

axios.request(options).then((response)=> {
  console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
  setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
  setResult((response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])*amount)
  setPrimaryExchanged(chosenPrimaryKey)
  setSecondaryExchanged(chosenSecondaryKey)

}).catch((error)=>{
  console.error(error);
});
}

  console.log(chosenPrimaryKey)
  return (
    <div className="currency-converter">
      <h2>Currency Converter </h2>
      <div className="input-box">
     <table>
        <tbody>
        <tr>
          <td>Primary Currency</td>
          <td>
            <input
             type="number"
             name="currency-amount-1"
             value={amount}
            onChange={(e)=> setAmount(e.target.value)}

             />
          </td>
          <td>
            <select
            value={chosenPrimaryKey}
            name="currency-option-1"
            className="currency-options"
            onChange={(e)=> setChosenPrimaryKey(e.target.value)}
            >
            {currencies.map((currency, _index ) =>(<option key={_index}>{currency}</option> ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>Secondary Currency</td>
          <td>
            <input
             type="number"
             name="currency-amount-2"
             value={result}
             disabled={true}
             />
          </td>
          <td>
            <select
            value={chosenSecondaryKey}
            name="currency-option-2"
            className="currency-options"
            onChange={(e)=> setChosenSecondaryKey(e.target.value)}
            >
            {currencies.map((currency, _index ) =>(<option key={_index}>{currency}</option> ))}
            </select>
          </td>
        </tr>
        </tbody>
      </table>
      <button
      id="button"
      onClick={convert}
      >Convert</button>

      <ExchangeRate
        exchangeRate={exchangeRate}
        chosenPrimaryKey={primaryExchanged}
        chosenSecondaryKey={secondaryExchanged}

        />
    </div>
      </div>

    )
}

export default CurrencyConverter
