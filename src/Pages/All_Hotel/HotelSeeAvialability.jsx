import React from 'react'
import styles from "../All_Hotel/HotelSeeAvialability.module.css"


const HotelSeeAvialability = () => {
  return (
    <div className={styles.HotelSeeAvialability_Main}>
    <div className={styles.HotelSeeAvialability_Conatiner}>
    <div className={styles.HotelSeeAvialability_SearchBox_ImageGrid_Conatiner}>
    <div className={styles.HotelSeeAvialability_SearchBox_Conatiner}>
        
    </div>
    <div className={styles.HotelSeeAvialability_ImageGrid_Conatiner}>
    <div className={styles.HotelSeeAvialability_ImageGrid_Deatils}></div>    
    <div className={styles.HotelSeeAvialability_ImageGrid_Image}></div>    
    </div>
    </div>
    <div className={styles.HotelSeeAvialability_Description_Property_Highlights}>
    <div className={styles.HotelSeeAvialability_Description}></div>
    <div className={styles.HotelSeeAvialability_Property_Highlights}></div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Main}>
    <div><h1>Availability</h1></div>
    <div className={styles.HotelSeeAvialability_Availability_Change_Search}></div>
    <div className={styles.HotelSeeAvialability_Availability_Form}>
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    </div>    
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Form_below_banner}></div>
    </div>
    </div>
  )
}

export default HotelSeeAvialability