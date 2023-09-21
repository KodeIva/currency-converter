import { useState } from 'react'
import './App.css'
import Currency from './components/currency'

function App() {
 

  return (
    <>
     <h1>Convert currency</h1>
     <div className="container">
      <Currency/>
      <button>swap</button>
      <Currency/>
     </div>
    </>
  )
}

export default App
