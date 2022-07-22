import React from 'react'
import styles from "./Questions.module.css"

const Questions = () => {
    const questionStore=[
        {
            question:"How do I find the cheapest flights on Booking.com?",
            ans:"You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors like when you're booking and want to travel."
        },
        {
            question:"Can I book one-way flights on Booking.com?",
            ans:"Yes, you can book one-way, round-trip, and multi-city flights on our site."
        },
        {
            question:"How far in advance can I book a flight?",
            ans:"You can book a flight up to one year before your departure date."
        },
        {
            question:"Do flights get cheaper closer to departure?",
            ans:"Generally, flight prices are more likely to increase the closer you get to your flight date."
        },
        {
            question:"What is a flexible ticket?",
            ans:"A flexible ticket allows you to change your flight with the same airline by only paying the fare and tax difference. It can only be used for one confirmed change. You can add the flexible ticket when booking your flight."
        },
        {
            question:"Does Booking.com charge credit card fees?",
            ans:"No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when reviewing your booking."
        },
    ]
  return (
    <div>
        <div className={styles.Questions_container} >
            {questionStore.map((item)=>(
          <div className={styles.Questions_Card}>
          <div className={styles.Question}>{item.question}</div>
          <div className={styles.Answer}>{item.ans}</div>
      </div>
            ))}
            
        </div>
    </div>
  )
}

export default Questions