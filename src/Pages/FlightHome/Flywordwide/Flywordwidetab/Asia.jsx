import React from 'react'
import styles from "./Asia.module.css"

const Asia = () => {

const AsiaData=[
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=",
        route:"Nagpur to Mumbai",
        duration:"Shortes flight time:1h 22m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
        route:"Nagpur to panaji",
        duration:"Shortes flight time:1h 33m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/684652.jpg?k=5055a718205497d78d7d80b05c6cfbd59b79af5998231e50c23832e103087691&o=",
        route:"Nagpur to Hyderabad",
        duration:"Shortes flight time:1h 02m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=",
        route:"Nagpur to New Delhi",
        duration:"Shortes flight time:1h 34m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=",
        route:"Nagpur to Bangalore",
        duration:"Shortes flight time:1h 39m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/684568.jpg?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=",
        route:"Nagpur to Kolkata",
        duration:"Shortes flight time:1h 43m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/684820.jpg?k=29ee5cee377c4e6cfba7a474d02914660d3311f0b75d1b9cf3bdefef0eabffdd&o=",
        route:"Nagpur to pune",
        duration:"Shortes flight time:1h 17m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
        route:"Nagpur to Dubai",
        duration:"Shortes flight time:3h 35m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/684727.jpg?k=a6fd59b0c31df52ae2a907dcf2441c7842bb56e2e68d89bffd2398024c0812d3&o=",
        route:"Nagpur to Chennai",
        duration:"Shortes flight time:1h 38m"
    }

]
  return (
    <div>
        <div className={styles.Asia_container}>
            {AsiaData.map((item)=>(
             <div className={styles.Carddiv}>
                <div><img src={item.image} alt="" className={styles.Asia_image}/></div>
                <div>
                <div className={styles.Asia_route}>{item.route}</div>
                <div  className={styles.Asia_duration}>{item.duration}</div>
                </div>
             
          </div>
            ))}
             
        </div>
    </div>
  )
}

export default Asia