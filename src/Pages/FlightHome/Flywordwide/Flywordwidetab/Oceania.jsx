import React from 'react'
import styles from "./Oceania.module.css"

const Oceania = () => {

    const OceaniaData=[
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/682535.jpg?k=5a668b67965282725185c1ae8ba566c1a5edb7b72ae7d1e203b00a36d7eb6b96&o=",
            route:"Nagpur to Sydney",
            duration:"Shortest flight time:12h 43m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/967877.jpg?k=18d14b862ca13e1e099d98c281202acdf8e80bacbf831bd66222ea03392d5d57&o=",
            route:"Nagpur to Melbourne",
            duration:"Shortest flight time:12h 22m"
        },
    ]
  return (
    <div>
         <div className={styles.Africa_container}>
            {OceaniaData.map((item)=>(
             <div className={styles.Carddiv}>
                <div><img src={item.image} alt="" className={styles.Africa_image}/></div>
                <div>
                <div className={styles.Africa_route}>{item.route}</div>
                <div  className={styles.Africa_duration}>{item.duration}</div>
                </div>
             
          </div>
            ))}
             
        </div>
    </div>
  )
}

export default Oceania