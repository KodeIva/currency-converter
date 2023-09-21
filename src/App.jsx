import { useState, useEffect } from 'react'
import './App.css'
import Currency from './components/currency'
import {FiRepeat} from 'react-icons/fi'
const API_KEY = 'a5dc05191451d8a44274e75ab6675f25'
const URL = `http://api.exchangeratesapi.io/latest?access_key=${API_KEY}`



function App() {
  const [currencies, setCurrencies] = useState([])
  const [baseCyrrency, setBaseCurrency] = useState()
  const [firstOption, setFirstOption] = useState()
  useEffect(() => {
    fetch(URL)
     .then(response => response.json())
     .then(data => {
       console.log(data)
       setCurrencies([data.base,...Object.keys(data.rates)])
       setBaseCurrency(data.base)
       setFirstOption(Object.keys(data.rates)[0])
     })
  },[])
 
  return (
    <>
     <h1>Convert currency</h1>
     <div className="container">
      <Currency defaultValue={1} currencies={currencies} selectedCurrency={baseCyrrency}/>
        <FiRepeat/>
      <Currency defaultValue={0} currencies={currencies} selectedCurrency={firstOption}/>
     </div>
    </>
  )
}

export default App
