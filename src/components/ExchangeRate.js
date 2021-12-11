
const ExchangeRate = ({exchangeRate,chosenPrimaryKey,chosenSecondaryKey}) => {
  return (
    <div className="exchange-rate">
    <h1>Exchange Rate</h1>
      <h3>{exchangeRate}</h3>
      <p>{chosenPrimaryKey} to {chosenSecondaryKey}</p>
    </div>
    )
}

export default ExchangeRate
