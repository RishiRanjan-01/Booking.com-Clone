import React from 'react'
import styles from "./Africa.module.css"

const Africa = () => {

    const AfricaData=[
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/953846.jpg?k=29f1aa324a747187330b2a8790c799118ef5b22185a0a235a3ab5117f8495006&o=",
            route:"Nagpur to Blue Bay",
            duration:"Shortest flight time:6h 58m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/685403.jpg?k=0c40555ecdb932aa3ddf115898a43621264e16c4b180b1e845d90f47a8abb151&o=",
            route:"Nagpur to Nairobi",
            duration:"Shortest flight time:7h 02m"
        },

    ]
  return (
    <div>
        <div className={styles.Africa_container}>
            {AfricaData.map((item)=>(
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

export default Africa