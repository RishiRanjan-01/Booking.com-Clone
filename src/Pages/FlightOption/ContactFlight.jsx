import React, { useState } from 'react'
import { Box, Text, Flex, Circle, Button, Stack, Center } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    InputGroup,
    InputLeftAddon,
    Checkbox,
    Select
} from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import style from './Flight.module.css'
import { BsArrowLeftRight } from 'react-icons/bs'
import { MdArrowBackIos } from 'react-icons/md'
import { loadFlightData } from '../../Utils/flightOption/selecteFlight'
import { PaymentSubNav } from './PaymentSubNav'
import { useNavigate } from 'react-router-dom'

import FlightNav from '../../Components/FlightFooter/FlightNav'
import { flightContactData } from '../../Redux/Flight/action'
const ContactFlight = () => {

    let navigate = useNavigate();
    // const loadData = loadFlightData('flightTime');
    const loadData = useSelector(state => state.flightReducer.localData);

    const [form, setform] = useState({});
    const dispatch = useDispatch()
    // console.log(loadData)

    const adultCount = useSelector(state => state.passenger.AdultCount);
    const childCount = useSelector(state => state.passenger.childCount);

    const passengerCount = adultCount + childCount

    const flightAmount = loadData.price * passengerCount

    let finalPrice = flightAmount - 2371;

    const contactData = useSelector(state => state.flightReducer.flightData);
    console.log(`Data ${contactData.first}`)



    const handlechange = (e) => {
        // console.log(e.target.value)
        setform({ ...form, [e.target.name]: e.target.value })

    }



    const handelSubmit = (e) => {



        console.log(form)
        e.preventDefault()
        dispatch(flightContactData(form))



        navigate('/flightcontact/flightpayment');

    }



    return (
        <Box>
            <Box>
                {/* Navbar */}
                <FlightNav />
            </Box>
            <PaymentSubNav />

            <Flex w='75%' m='auto'>
                <Box w='65%' h='auto'>
                    <form method='POST' onSubmit={handelSubmit}>
                        <Stack >

                            <Text fontSize='sm' color='#8c8983' mt='40px'>Round-trip · {passengerCount} traveler · Tue, Jul 26 - Tue, Aug 2</Text>

                            <Flex gap={3}>
                                <Text fontSize='4xl' fontWeight='650'>Pune</Text>
                                <Box mt='20px' boxSize='40px'>  <BsArrowLeftRight ml='10px' fontSize="25px" /> </Box>
                                <Text fontSize='4xl' fontWeight='650'>Goa City</Text>
                            </Flex>

                            <Text mt='20px' fontSize='2xl' fontWeight='650'>Who's flying?</Text>


                            <Box w='100%' border='1px solid #d9d9d9' h='350px' mt='20px' >
                                <Box ml='10px'>
                                    <Text mt='10px' ml='15px' fontSize='xl' fontWeight='650'>Contact details</Text>
                                    <Text fontSize='sm' ml='10px' color='#8c8983' mt='0px'> <span className={style.span}>*</span>Required</Text>


                                    <FormControl isRequired ml='10px' mt='10px'>
                                        <FormLabel>Contact email </FormLabel>
                                        <Input

                                            w='60%'
                                            h='50px'
                                            type='email'
                                            name='email'

                                            outline='black solid 1px'
                                            onChange={handlechange}


                                        />
                                        <FormHelperText>We'll send your flight confirmation here</FormHelperText>
                                    </FormControl>


                                    <FormControl ml='15px' isRequired >
                                        <FormLabel mt='25px' >Contact number</FormLabel>
                                        <InputGroup >

                                            <InputLeftAddon children='+91' outline='black solid 1px' />
                                            <Input

                                                w='40%'
                                                outline='black solid 1px'
                                                type='tel'

                                                name='tel'

                                                onChange={handlechange}
                                            />


                                        </InputGroup>

                                        <Flex ><Checkbox mt='10px' mr='10px' required={false} />
                                            <FormHelperText>Get free text message updates about your flight</FormHelperText></Flex>
                                    </FormControl>

                                </Box>


                            </Box>



                            <Box w='100%' border='1px solid #d9d9d9' h='370px' mt='40px' >
                                <Text mt='10px' ml='15px' fontSize='xl' fontWeight='650'>Adult 1</Text>
                                <Text fontSize='sm' ml='10px' color='#8c8983' mt='0px'> <span className={style.span}>*</span>Required</Text>



                                <Box ml='15px' mt='10px'>
                                    <Flex gap={5}>
                                        <FormControl isRequired w='45%'>

                                            <FormLabel>First names </FormLabel>
                                            <Input

                                                name='first'
                                                w='100%'
                                                h='50px'
                                                type='text'
                                                outline='black solid 1px'

                                                onChange={handlechange}

                                            />
                                            <FormHelperText>Enter the passenger's name exactly as it appears on their passport or identity card</FormHelperText>

                                        </FormControl>
                                        <FormControl isRequired w='45%'>

                                            <FormLabel>Last names </FormLabel>
                                            <Input

                                                name='last'
                                                w='100%'
                                                h='50px'
                                                type='text'
                                                outline='black solid 1px'


                                                onChange={handlechange}

                                            />
                                            <FormHelperText>Enter the passenger's name exactly as it appears on their passport or identity card</FormHelperText>
                                        </FormControl>

                                    </Flex>
                                    <FormControl isRequired w='45%' h='400px'>
                                        <FormLabel>Gender specified on your passport </FormLabel>
                                        <Select
                                            w='100%'
                                            name='gender'
                                            h='50px'
                                            outline='black solid 1px'
                                            placeholder='Select '

                                            onChange={handlechange}
                                        >
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                        </Select>
                                        <FormHelperText>We're currently required by airlines and providers to ask for this information</FormHelperText>
                                    </FormControl>




                                </Box>


                            </Box>

                            <Flex justifyContent='flex-end' mt='40px'>
                                <Box>
                                    <Button
                                        borderRadius='0'
                                        mr='20px'
                                        fontSize='18px'
                                        p='25px 30px'
                                        color='twitter.600'
                                        variant='ghost'
                                        onClick={() => { navigate('/flightoption') }} >
                                        <MdArrowBackIos /> Back</Button>
                                </Box>
                                <Box>
                                    <FormControl>
                                        <Button
                                            type='submit'
                                            // disabled={isInvalid}
                                            borderRadius='0'
                                            fontSize='18px'
                                            colorScheme='blue'
                                            p='25px 45px'
                                            color='white'
                                            variant='solid'>
                                            Next</Button>
                                    </FormControl>
                                </Box>
                            </Flex>

                        </Stack>
                    </form>
                </Box>






                <Box w='35%' h='auto'>
                    <Box w='100%' h='auto' mt='200px'>
                        <Flex>
                            <Box ml='20px' w='45%' h='200' >
                                <Text fontWeight='650' >Ticket ({passengerCount} adult)</Text>
                                <Text fontWeight='550' fontSize='sm' >Flight fare</Text>
                                <Text fontWeight='550' fontSize='sm' >Taxes and fees</Text>


                                <Text pt='30px' fontWeight='700' fontSize='xl'>Total</Text>
                                <Text fontSize='sm' color='#8c8983' > Includes taxes and charges</Text>
                                <Text pt='10px' cursor='pointer' fontSize='xs' color='blue' > View price breakdown</Text>


                            </Box>
                            <Box mr='10px' style={{ flex: 1 }} w='50%' >
                                <Text textAlign='right' fontWeight='650' >INR{flightAmount}</Text>
                                <Text textAlign='right' fontWeight='550' fontSize='sm' >INR{finalPrice}</Text>
                                <Text textAlign='right' fontWeight='550' fontSize='sm' >INR2,371.00</Text>

                                <Text pt='30px' textAlign='right' fontWeight='700' fontSize='xl'>INR{flightAmount}</Text>

                            </Box>
                        </Flex>

                        <Box m='auto' mt='20px' w='90%' h='70px' border='1px solid #8c8983'>
                            <Text pl='20px' pt='10px' fontWeight='700' color='#9f5620' fontSize='sm'  >
                                Give feedback
                            </Text>
                            <Text pl='20px' fontSize='sm' color='#8c8983'>
                                Tell us how we're doing and what could be better
                            </Text>
                        </Box>

                    </Box>
                </Box >
            </Flex >



        </Box >
    )
}

export default ContactFlight
