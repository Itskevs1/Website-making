import React from 'react'
import './Continue.css'
import { assets } from '../../assets/assets'

const Continue = () => {
  return (
    <div className="food-display">
      <h4 className='daily'>Daily Deals on USTP Food Corner</h4>
      <div className="food-display-list">
        <div className="deals-grid">
          <img className='profile-picture' src={assets.chickenfillet} alt="Chicken fillet with rice" />
          <p className='name'>Chicken fillet with rice</p>
        </div>
        <div className="deals-grid">
          <img className='profile-picture' src={assets.kutsinta} alt="Kutsinta" />
          <p className='name'>Kutsinta</p>
        </div>
        <div className="deals-grid">
          <img className='profile-picture' src={assets.budgetmeal} alt="Budget Meal" />
          <p className='name'>Budget Meal</p>
        </div>
        <div className="deals-grid">
          <img className='profile-picture' src={assets.minutemaid} alt="Minute Maid" />
          <p className='name'>Minute Maid</p>
        </div>
      </div>
    </div>
  )
}

export default Continue
