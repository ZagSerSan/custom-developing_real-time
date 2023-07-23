import React, { useState } from 'react'
import './playground.css'
import {winCombination} from '../utils/winCombination'

const Playground = () => {
  const [gameOver, setGameOver] = useState(false)
  const [state, setState] = useState('X')

  const restartGame = () => {
    setGameOver(false)
    const allButtons = document.querySelectorAll('.playground-space__btn')
    allButtons.forEach(btn => {
      btn.textContent = ''
      btn.disabled = false
      btn.classList.remove('disabled')
      btn.classList.remove('game-over')
    })
  }

  const handleClick = ({target}) => {
    if (target.textContent !== 'X' && target.textContent !== 'O') {
      target.textContent = state
      target.classList.add('disabled')
      setState(prev => prev === 'X' ? 'O' : 'X')
      const allButtons = document.querySelectorAll('.playground-space__btn')
      const allValues = []
      allButtons.forEach(btn => {
        allValues.push(btn.textContent)
      })
      console.log(allValues)
      const win = winCombination(allValues)
      if (win) {
        setGameOver(true)
        setState(win)
        allButtons.forEach(btn => {
          btn.disabled = true
          btn.classList.add('disabled')
          btn.classList.add('game-over')
        })
      }
    }
  }

  return (
    <div className='playground'>
      <h1>{!gameOver ? `Turn now: ${state}` : `${state} - is win!`}</h1>
      {gameOver && <button onClick={restartGame} className='restart'>Play again</button>}
      
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