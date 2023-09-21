import { useState } from 'react'
import './App.css'
import Currency from './components/currency'
import {FiRepeat} from 'react-icons/fi'

function App() {
 

  return (
    <>
     <h1>Convert currency</h1>
     <div className="container">
      <Currency defaultValue={1}/>
        <FiRepeat/>
      <Currency defaultValue={0}/>
     </div>
    </>
  )
}

export default App
