import React from 'react'
import styles from "./TrendingCities.module.css"
import TrendingCitiesCarousal from './TrendingCitiesCarousal'

const TrendingCities = () => {
  return (
    <div>
        <div className={styles.TredingCities_heading_container}>
        <h1>Trending cities</h1>
        <p>Book flights to a destination popular with travelers from India</p>
        </div>
        <TrendingCitiesCarousal/>
    </div>
  )
}

export default TrendingCities