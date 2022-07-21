import React from 'react'
import styles from "./Popularflight.module.css"
import Popularflighttab from './Popularflighttab'

const Popularflight = () => {
  return (
    <div>
        <div className={styles.Popularflight_heading_container}>
            <h1 className={styles.Popularflight_heading}>Popular flights near you</h1>
            <p>Find deals on domestic and international flights</p>
        </div>
        <div className={styles.Popularflighttab_components}>
            <Popularflighttab/>
        </div>
    </div>
  )
}

export default Popularflight