import React from 'react'

const Currency = ({defaultValue}) => {
  return (
    <div>
        <select name="" id="">
            <option defaultValue="iva">iva</option>
        </select>
        <input type="number" defaultValue={defaultValue}/>
    </div>
  )
}

export default Currency