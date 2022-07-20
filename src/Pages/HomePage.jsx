import React from 'react'
import Navbar from '../Components/Navbar';
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.searchbarContainer}>
            <div className={styles.textContainer}>

            </div>
        </div>
    </div>
  )
}

export default HomePage