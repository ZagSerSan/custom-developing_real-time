import React, { useEffect, useState } from 'react'
import "./select.css"
import dateStore from './dateStore'
import useBearStore from './useBearStore'

const Select = () => {
  const { getDateValue } = dateStore()
  const [selectedData, setSelectedData] = useState({some: 'some'})

  // test version
  const { bears } = useBearStore()
  const { increasePopulation } = useBearStore()

  // const getDate = () => {
  //   increasePopulation()
  //   console.log('bears:', bears)

  //   // getDateValue
  //   //   ? getDateValue(selectedData)
  //   //   : console.log('no date')
  // }

  // todo: сделать выбор даты через селекты относительно текущего месяца 
  return (
    <div className='select'>
      <h3>select data and time</h3>

      {/* день/месяц/год */}
      <div className='select__wrapper'>
        <div className="select-item">
          <label htmlFor="day">day</label>
          <input type="text" />
        </div>
        <div className="select-item">
          <label htmlFor="month">month</label>
          <input type="text" />
        </div>
        <div className="select-item">
          <label htmlFor="year">year</label>
          <input type="text" defaultValue={2024}/>
        </div>
      </div>

      {/* часы/минуты */}
      <div className='select__wrapper'>
        <div className="select-item">
          <label htmlFor="hours">hours</label>
          <input type="text" />
        </div>
        <div className="select-item">
          <label htmlFor="minutes">minutes</label>
          <input type="text" />
        </div>
      </div>

      <button onClick={() => increasePopulation('some date')}>select data</button>
    </div>
  ) 
}

export default Select
