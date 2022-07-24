import React, { useState } from 'react'
import {
    Box,
    Flex,
    Button,
    FormControl,
    Text,
    Image,
    Stack,
    Input,
    FormLabel,
    InputLeftAddon,
    InputGroup,
    FormHelperText

} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import img1 from './Payimg/img1.svg'
import img2 from './Payimg/amex.svg'
import img3 from './Payimg/discover.svg'
import img4 from './Payimg/jcb.svg'
import img5 from './Payimg/visa.svg'
import input1 from './Payimg/input1.svg'




export const PayForm = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [access, setAccess] = useState(false);
    const [full, setFull] = useState(true);



    const handlechange = (e, props) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        // var number = e.target.name === 'number';


        const { name, value } = e.target;
        console.log(value.length)
        console.log(name)
        // setFull(value.length)

        if (value.length === 0 && name === 'number') {
            setAccess(false);

        }

        // if (value.length < 12 && name === 'number') {
        //     setError(`You Enter ${value.length} no you have to enter 12 no `)
        // }

        // if (value.length >= 12 && name === 'number') {
        //     setFull(false)

        // }


        if (value.length >= 12 && name === 'number') {
            setError(`You can enter 12 number you can pay now `)



        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setFull(true)
        setAccess(true)
         navigate("/flightcontact/flightpayment/PaymentSuccess")



    }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Stack>
                    <Box w='100%' border='1px solid #d9d9d9' h='auto' pb='50px' mt='20px' >
                        <Text
                            fontWeight='700'
                            fontSize='xl'
                            pl='20px'
                            pt='20px'
                        >Pay</Text>
                        <Text
                            fontWeight='700'
                            fontSize='md'
                            pt='10px'
                            pl='20px'
                        >How do you want to pay?</Text>

                        <Flex w='300px' h='20px' mt='30px' justifyContent='space-evenly' >
                            <Image src={img1}></Image>
                            <Image src={img2}></Image>
                            <Image src={img3} ></Image>
                            <Image src={img4}></Image>
                            <Image src={img5}></Image>
                        </Flex>

                        <FormControl isRequired ml='20px' mt='20px'>
                            <FormLabel>Cardholder's Name</FormLabel>
                            <Input
                                borderRadius='none'
                                h='35px'
                                w='40%'
                                type='text'
                                name='text'
                                outline='black solid 1px'
                                onChange={handlechange}
                            />
                        </FormControl>

                        <FormControl isRequired ml='20px' mt='20px' h='80px'>
                            <FormLabel>Card Number</FormLabel>
                            <InputGroup >

                                <InputLeftAddon borderRadius='none' h='35px' bg='white' outline='1px solid black' > <Image src={input1} /> </InputLeftAddon>

                                <Input
                                    borderRadius='none'
                                    h='35px'
                                    w='30%'
                                    type="tel"
                                    name='number'
                                    maxLength={12}
                                    outline='black solid 1px'
                                    onChange={handlechange}
                                />

                            </InputGroup>
                            <FormHelperText color='red' >{access ? error : ''}</FormHelperText>

                        </FormControl>


                        <Flex w='40%' ml='20px' mt='20px' gap={5}>
                            <Box w='50%'>
                                <FormControl isRequired>

                                    <FormLabel fontSize='sm'>Expiration Date </FormLabel>
                                    <Input

                                        placeholder='MM/YY'
                                        borderRadius='none'
                                        h='35px'
                                        type='number'
                                        name='exdate'
                                        outline='black solid 1px'
                                        onChange={handlechange}
                                    />

                                </FormControl>
                            </Box>
                            <Box w='50%'>
                                <FormControl isRequired >

                                    <FormLabel fontSize='sm'>CVV </FormLabel>
                                    <Input
                                        borderRadius='none'
                                        h='35px'
                                        type='number'
                                        name='cvv'
                                        outline='black solid 1px'
                                        onChange={handlechange}

                                    />
                                </FormControl>
                            </Box>
                        </Flex>

                    </Box>
                    <Text fontSize='sm' color='#8c8983' >By clicking "pay now" you agree with the <span> terms
                        and conditions and privacy policies</span> of Booking.com, Gotogate
                        International AB, IndiGo, and with the fare rules.</Text>


                    <Flex justifyContent='flex-end' mt='40px'>
                        <Box>
                            <Button
                                borderRadius='0'
                                mr='20px'
                                fontSize='18px'
                                p='25px 30px'
                                color='twitter.600'
                                variant='ghost'
                                onClick={() => { navigate('/flightcontact') }}
                            >
                                <MdArrowBackIos /> Back</Button>
                        </Box>
                        <Box>
                            <FormControl>

                                <Button
                                    type='submit'
                                    // isDisabled={access ? false : true}
                                    borderRadius='0'
                                    fontSize='18px'
                                    colorScheme='blue'
                                    p='25px 45px'
                                    color='white'
                                    variant='solid'>
                                    Pay Now</Button>
                            </FormControl>
                        </Box>



                    </Flex>
                </Stack>
            </form>

            <Box borderTop='1px solid #8c8983' mt='20px' mb='30px'>
                <Text fontSize='sm' color='#8c8983' pt='10px' >
                    By making this booking, you'll enter into agreements with:
                    (i) Gotogate International AB for the flight reservation
                    service, and (ii) and IndiGo for the flight tickets and
                    your travel on the aircrafts. Booking.com is not a party
                    to either of these two agreements. Booking.com provides
                    the platform on which travel companies make flight tickets
                    for travel available with named airlines. Booking.com's
                    role as a platform is more fully set out in its terms and
                    conditions (link above).
                </Text>
            </Box>
        </Box >
    )
}
