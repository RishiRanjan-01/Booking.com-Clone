import React from 'react'
import styles from "./Europe.module.css"

const Europe = () => {
const EuropeData=[
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/640111.jpg?k=e0f82b6057243cbcf8f5cdce95e3685852a2ca80178735cee9bb00b66a941798&o=",
        route:"Nagpur to Genoa",
        duration:"Shortest flight time:9h 02m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/613087.jpg?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=",
        route:"Nagpur to Paris",
        duration:"Shortest flight time:9h 37m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/971352.jpg?k=e60b6789bf1ef865daa29402a8b8c69dd495df90fd4859e0b9f8525592476116&o=",
        route:"Nagpur to Madrid",
        duration:"Shortest flight time:10h 23m"
    }
    ,  {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
        route:"Nagpur to London",
        duration:"Shortest flight time:9h 49m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/687157.jpg?k=06b9ded0733baaca9efaa06a69ae4d0d74311d620280947ae909015e804028fb&o=",
        route:"Nagpur to Manchester",
        duration:"Shortest flight time:9h 58m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/967919.jpg?k=de3609fd5bbb0eead49d41a6d7edeb731376d0c89e372bce4fce6d80c64991a5&o=",
        route:"Nagpur to Brimingham",
        duration:"Shortest flight time:9h 57m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/686019.jpg?k=6a598e32da7c3ad489629acee666681c9b8d9096951bcea1c2bc645e87ef260f&o=",
        route:"Nagpur to Zurich",
        duration:"Shortest flight time:9h 04m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/685779.jpg?k=8774db3e8159799b859ca794fcb96ad2e35105627c017436efb68fc7a7afa319&o=",
        route:"Nagpur to Stockholm",
        duration:"Shortest flight time:8h 28m"
    },
    {
        image:"https://q-xx.bstatic.com/xdata/images/city/square210/976538.jpg?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o=",
        route:"Nagpur to Amsterdam",
        duration:"Shortest flight time:9h 22m"
    }
]
  return (
    <div>
        <div className={styles.Europe_container}>
            {EuropeData.map((item)=>(
             <div className={styles.Carddiv}>
                <div><img src={item.image} alt="" className={styles.Europe_image}/></div>
                <div>
                <div className={styles.Europe_route}>{item.route}</div>
                <div  className={styles.Europe_duration}>{item.duration}</div>
                </div>
             
          </div>
            ))}
             
        </div>
    </div>
  )
}

export default Europe