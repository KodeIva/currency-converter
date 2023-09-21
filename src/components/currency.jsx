import React from 'react'

const Currency = ({defaultValue,currencies, selectedCurrency}) => {
  return (
    <div>
        <select name="" id="" value={selectedCurrency} >
            {currencies.map((currency) => {
                return (
                    <option key={currency} defaultValue="currency">{currency}</option>
                )
            })}
            
        </select>
        <input type="number" defaultValue={defaultValue}/>
    </div>
  )
}

export default Currency