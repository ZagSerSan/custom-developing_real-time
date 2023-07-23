import React, { useState } from 'react'
import './playground.css'
import {winCombination} from '../utils/winCombination'

const Playground = () => {
  const [state, setState] = useState('X')

  const handleClick = ({target}) => {
    if (target.textContent !== 'X' && target.textContent !== 'O') {
      target.textContent = state
      setState(prev => prev === 'X' ? 'O' : 'X')
      const allButtons = document.querySelectorAll('.playground-space__btn')
      const allValues = []
      allButtons.forEach(btn => {
        allValues.push(btn.textContent)
      })
      console.log(allValues)
      winCombination(allValues)
    }
  }

  return (
    <div className='playground'>
      <h2>Playground</h2>
      <div className="playground-space">
        <button onClick={handleClick} className='playground-space__btn border__btn-1'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-2'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-3'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-4'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-5'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-6'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-7'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-8'></button>
        <button onClick={handleClick} className='playground-space__btn border__btn-9'></button>
      </div>
    </div>
  )
}

export default Playground