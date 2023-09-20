import React from 'react'
import Loading from './Loadingy.gif'
import './Spinner.css'
const Spinner =() =>
 {
  return (
    <div className='spinner'>
      <img src={Loading} alt='loading'/>
    </div>
  )
}
export default Spinner
