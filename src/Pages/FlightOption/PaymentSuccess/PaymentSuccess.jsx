import React from 'react'
import styles from "./PaymentSuccess.module.css";
import {TiTickOutline} from "react-icons/ti"
import {Button} from '@chakra-ui/react'

const PaymentSuccess = () => {
  return (
    <div>
        <div className={styles.flightbookingtopmessage}>
            Thank You! For Your Booking
        </div>
        <div className={styles.mainflightsuccescard}>
            <div>
                <TiTickOutline/>
            </div>
            <div>Your flight booking has been successfully completed</div>

            <Button colorScheme="red" className={styles.flightsuccessbtn}>Back to Home Page</Button>
        </div>
       
    </div>
  )
}

export default PaymentSuccess