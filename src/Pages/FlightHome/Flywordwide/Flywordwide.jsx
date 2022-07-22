import React from 'react'
import styles from "./Flywordwide.module.css"
import Flywordwidetab from './Flywordwidetab/Flywordwidetab'

const Flywordwide = () => {
  return (
    <div>
      <div className={styles.Flywordwide_heading}>
        <h1>Fly worldwide with Booking.com</h1>
        <p>Flights from wherever you are to wherever you want to go</p>
      </div>
      <Flywordwidetab/>
    </div>
  )
}

export default Flywordwide