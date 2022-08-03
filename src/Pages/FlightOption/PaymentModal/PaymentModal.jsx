
import React, { useState } from "react";
import {
  PinInput,
  PinInputField,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
  Flex

} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const PaymentModal = ({ exDate, cvvS, card }) => {
  const navigate = useNavigate();

  const [otpCheck, SetotpCheck] = useState('');
  // const [otp, setOtp] = useState('');

  console.log(`otp check ${otpCheck}`)
  var otp = 2222;

  // const otpGenerator = () => {
  // var val = Math.floor(1000 + Math.random() * 9000);
  // console.log(`value ${val}`)
  // setOtp(val);
  // return val;
  // }

  const pinValue = (v) => {
    // console.log(v);
    SetotpCheck(v)

  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()


  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  // const otp = otpGenerator();


  const handleopen = () => {
    if (exDate === false && cvvS === false && card === false) {

      // otpGenerator();
      setCounter(10)

      setTimeout(() => {
        toast({
          position: 'top',
          title: 'Your OTP',
          description: `${otp}`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })


      }, 2000)
      onOpen();


    }

  }

  const paymentDone = () => {
    if (exDate === false && cvvS === false && card === false) {
      // setCounter(5);


      if (otp == otpCheck) {
        onClose()
        navigate("/paymentsuccess");
      }
      else {
        toast({
          position: 'top',
          title: 'Your OTP is Faild',
          description: " Please enter right otp",
          status: 'error',
          duration: 5000,
          isClosable: true,

        })
      }
    }
  }

  const resendOtp = () => {
    setCounter(5)

    setTimeout(() => {
      toast({
        position: 'top',
        title: 'Your OTP',
        description: `${otp}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })


    }, 2000)

  }
  return (
    <Box>

      <Button type='submit'
        // isDisabled={exDate && cvvS && card}
        borderRadius='0'
        fontSize='18px'
        colorScheme='blue'
        p='25px 45px'
        color='white'
        variant='solid' onClick={handleopen}>Pay</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt='200px'>
          <ModalCloseButton />
          <ModalBody>
            <Box
              mt='20px'
              ml='120px'
            >
              <Text
                fontWeight='700'
                fontSize='2xl'
              >Enter OTP</Text>
            </Box>

            <HStack mt='100px' ml='100px'>
              <PinInput onChange={pinValue} mask >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <Flex mt='50px' ml='80px'>
              <Box mt='10px' w='90px' pl='10px'><Text color='green' fontSize='md' fontWeight='700' >00.{counter} Sec</Text></Box>
              <Box > <Button isDisabled={counter > 0 ? true : false} onClick={resendOtp}>Resend OTP</Button></Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mt='30px' mr={3} onClick={paymentDone}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>






      {/* {nextModal && (<Box mt-='-1500px' w='500px' height='500px' bg='black'>
        <Text>
          Wait some time
        </Text>
      </Box>)} */}

    </Box >

  )
}

export default PaymentModal