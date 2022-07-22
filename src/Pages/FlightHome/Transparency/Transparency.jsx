import React from 'react'
 import styles from "./Transparancy.module.css"
 import {MdManageSearch} from "react-icons/md"
 import {FaSearchDollar} from "react-icons/fa"
 import {TbPlaneInflight} from "react-icons/tb"

const Transparency = () => {
  return (
    <div>
        <div className={styles.Transparency_container}>
            <div  className={styles.Transparency_text}>
                <div><MdManageSearch className={styles.Transparancy_icon}/></div>
                <div>
                    <h1 className={styles.Transparency_htag}>Huge selection</h1>
                    <p className={styles.Transparency_ptag}>Easily compare thousands of flights, all in one place</p>
                </div>
            </div>

            <div  className={styles.Transparency_text}>
                <div><FaSearchDollar className={styles.Transparancy_icon}/></div>
                <div>
                    <h1 className={styles.Transparency_htag}>No hidden fees</h1>
                    <p className={styles.Transparency_ptag}>Always know exactly what you’re paying for</p>
                    
                </div>
            </div>

            <div className={styles.Transparency_text}>
                <div><TbPlaneInflight className={styles.Transparancy_icon}/></div>
                <div>
                    <h1 className={styles.Transparency_htag}>More flexibility</h1>
                    <p className={styles.Transparency_ptag}>Keep your travel dates open with flexible ticket options</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Transparency