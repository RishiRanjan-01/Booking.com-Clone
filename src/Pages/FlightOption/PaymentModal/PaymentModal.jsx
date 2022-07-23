
import React ,{useState} from "react";
import styles from "./PaymentModal.module.css"
import { PinInput, PinInputField,HStack ,Button} from '@chakra-ui/react'
const PaymentModal = () => {
  
    const [otpbox,setOtpbox]=useState(false);

    const otp=Math.floor(1000 + Math.random() * 9000);

    const handleopen=()=>{
     setOtpbox(true)

  setTimeout(()=>{
      alert(`Your OTP is ${otp}`)
    },3000)
}
    return(
        <>

        <Button colorScheme="pink" onClick={handleopen}>Pay</Button>

        {otpbox && (
       <div className={styles.PaymentModal_bodycontainer}>
       <h1 className={styles.otp_heading}>Enter OTP</h1>
       <div className={styles.otpbox}>
       <HStack>
  <PinInput >
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
       </div>
       <Button colorScheme="blue" className={styles.otpclosebtn} onClick={()=>setOtpbox(false)}>Close</Button>
     </div>
        )}
        
        </>

  )
}

export default PaymentModal