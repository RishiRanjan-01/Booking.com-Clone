import React from 'react'
import styles from "./NorthAmerica.module.css"

const NorthAmerica = () => {

    const NorthAmericaData=[
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=",
            route:"Nagpur to New York",
            duration:"Shortest flight time:16h 14m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/689744.jpg?k=3c7c6d59d968c2bade9003d9ebf8a1346455ce92abe94ffaa29247839161f09e&o=",
            route:"Nagpur to Chicago",
            duration:"Shortest flight time:16h 36m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/689802.jpg?k=9b1b6e8f18bb474657e01465a6479d7d97def881d2e7610e8eb4f77719d5ed5f&o=",
            route:"Nagpur to Boston",
            duration:"Shortest flight time:15h 54m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=",
            route:"Nagpur to Toronto",
            duration:"Shortest flight time:16h 06m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/620034.jpg?k=57be46c03c63ddade3e509013855574fe00e8b23e30dc19cd6cc232b4da7eb7e&o=",
            route:"Nagpur to Los Angeles",
            duration:"Shortest flight time:17h 31m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/689586.jpg?k=970c12bc9abce21e6043c5ad0ba8bedaf27b105be29277b0215359a07f8192e3&o=",
            route:"Nagpur to Miami",
            duration:"Shortest flight time:18h 25m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=",
            route:"Nagpur to San Francisco",
            duration:"Shortest flight time:16h 52m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/690408.jpg?k=f59731e733077b90bc716596e05cfd0f85a2582341cc25c17b26ee2a755d7b55&o=",
            route:"Nagpur to Houston",
            duration:"Shortest flight time:18h 24m"
        },
        {
            image:"https://q-xx.bstatic.com/xdata/images/city/square210/653280.jpg?k=22d48ac39a830a7f37538454fdb0857980fe22cda6ac1afd46d31db9453c0893&o=",
            route:"Nagpur to Vancouver",
            duration:"Shortest flight time:15h 21m"
        }
    ]
  return (
    <div>
         <div className={styles.America_container}>
            {NorthAmericaData.map((item)=>(
             <div className={styles.Carddiv}>
                <div><img src={item.image} alt="" className={styles.America_image}/></div>
                <div>
                <div className={styles.America_route}>{item.route}</div>
                <div  className={styles.America_duration}>{item.duration}</div>
                </div>
             
          </div>
            ))}
             
        </div>
    </div>
  )
}

export default NorthAmerica