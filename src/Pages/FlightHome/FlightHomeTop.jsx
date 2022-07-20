import React from 'react'
import styles from "./FlightHomeTop.module.css"
import FlightSearch from './FlightSearch'

const FlightHomeTop = () => {
  return (
    <div className={styles.flighthometop}>
        <div className={styles.fligthhometop_textcontainer}>
        <h1 className={styles.tophtagtext}>Compare and book flights with ease</h1>
        <p className={styles.topptagtext}>Discover your next dream destination</p>
        </div>

        <FlightSearch/>
        
    </div>
  )
}

export default FlightHomeTop