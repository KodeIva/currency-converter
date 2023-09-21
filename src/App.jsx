import { useState } from 'react'
import './App.css'
import Currency from './components/currency'

function App() {
 

  return (
    <>
     <h1>Convert currency</h1>
     <div className="container">
      <Currency defaultValue={1}/>
      <button>swap</button>
      <Currency defaultValue={0}/>
     </div>
    </>
  )
}

export default App
