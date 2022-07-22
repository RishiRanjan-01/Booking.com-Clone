import React from 'react'
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

import { useSelector } from 'react-redux'
import style from './Flight.module.css'
import { BsArrowLeftRight } from 'react-icons/bs'
import { MdArrowBackIos } from 'react-icons/md'
import { loadFlightData } from '../../Utils/flightOption/selecteFlight'
import { PaymentSubNav } from './PaymentSubNav'
import { useNavigate } from 'react-router-dom'
const ContactFlight = () => {
    const lData = useSelector(state => state.flightReducer.localData);
    const my = lData.Direct1
    console.log(my)
    // let navigate = useNavigate()
    const loadData = loadFlightData('flightTime');
    console.log(loadData)
    let finalPrice = loadData.price - 2371;

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name)

        // navigate('/flightcontact/flightpayment');

    }

    return (
        <Box>
            <Box>
                {/* Navbar */}
            </Box>
            <PaymentSubNav />

            <Flex w='75%' m='auto'>

                <Box w='65%' h='auto'>
                    <form onSubmit={handelSubmit}>
                        <Text fontSize='sm' color='#8c8983' mt='40px'>Round-trip · 1 traveler · Tue, Jul 26 - Tue, Aug 2</Text>

                        <Flex gap={3}>
                            <Text fontSize='4xl' fontWeight='650'>Pune</Text>
                            <Box mt='20px' boxSize='40px'>  <BsArrowLeftRight ml='10px' fontSize="25px" /> </Box>
                            <Text fontSize='4xl' fontWeight='650'>Goa City</Text>
                        </Flex>

                        <Text mt='20px' fontSize='2xl' fontWeight='650'>Who's flying?</Text>


                        <Stack w='100%' border='1px solid #d9d9d9' h='350px' mt='20px' >
                            <Box ml='10px'>
                                <Text mt='10px' ml='15px' fontSize='xl' fontWeight='650'>Contact details</Text>
                                <Text fontSize='sm' ml='10px' color='#8c8983' mt='0px'> <span className={style.span}>*</span>Required</Text>


                                <FormControl isRequired ml='10px' mt='10px'>
                                    <FormLabel>Contact email </FormLabel>
                                    <Input w='60%' h='50px' type='email' name='email' outline='black solid 1px' required='required' />
                                    <FormHelperText>We'll send your flight confirmation here</FormHelperText>
                                </FormControl>
                                <FormControl ml='15px' isRequired>
                                    <FormLabel mt='25px' >Contact number</FormLabel>
                                    <InputGroup >

                                        <InputLeftAddon children='+91' outline='black solid 1px' />
                                        <Input w='40%' name='tel' outline='black solid 1px' type='tel' />


                                    </InputGroup>

                                    <Flex ><Checkbox mt='10px' mr='10px' required={false} />
                                        <FormHelperText>Get free text message updates about your flight</FormHelperText></Flex>
                                </FormControl>

                            </Box>


                        </Stack>




                        <Box w='100%' border='1px solid #d9d9d9' h='370px' mt='40px' >
                            <Text mt='10px' ml='15px' fontSize='xl' fontWeight='650'>Adult 1</Text>
                            <Text fontSize='sm' ml='15px' color='#8c8983' mt='0px'> <span className={style.span}>*</span></Text>


                            <FormControl isRequired ml='15px' mt='10px'>
                                <Flex gap={5}>
                                    <Box w='45%'>
                                        <FormControl isRequired>
                                            <FormLabel>First names </FormLabel>
                                            <Input name='first' w='100%' h='50px' type='text' outline='black solid 1px' required='required' />
                                            <FormHelperText>Enter the passenger's name exactly as it appears on their passport or identity card</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Box w='45%'>
                                        <FormControl isRequired>
                                            <FormLabel>Last names </FormLabel>
                                            <Input name='last' w='100%' h='50px' type='text' outline='black solid 1px' required='required' />
                                            <FormHelperText>Enter the passenger's name exactly as it appears on their passport or identity card</FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Flex>
                                <Box w='45%' h='400px'>
                                    <FormLabel>Gender specified on your passport </FormLabel>
                                    <Select w='100%' name='gender' h='50px' outline='black solid 1px' placeholder='Select '>
                                        <option value='option1'>Male</option>
                                        <option value='option2'>Female</option>
                                    </Select>
                                    <FormHelperText>We're currently required by airlines and providers to ask for this information</FormHelperText>
                                </Box>




                            </FormControl>


                        </Box>

                        <Flex justifyContent='flex-end' mt='40px'>
                            <Box>
                                <Button borderRadius='0' mr='20px' fontSize='18px' p='25px 30px' color='twitter.600' variant='ghost' > <MdArrowBackIos /> Back</Button>
                            </Box>
                            <Box>
                                <Button type='submit' borderRadius='0' fontSize='18px' colorScheme='blue' p='25px 45px' color='white' variant='solid'>Next</Button>
                            </Box>
                        </Flex>
                    </form>
                </Box>







                <Box w='35%' h='auto'>
                    <Box w='100%' h='auto' mt='200px'>
                        <Flex>
                            <Box ml='20px' w='45%' h='200' >
                                <Text fontWeight='650' >Ticket (1 adult)</Text>
                                <Text fontWeight='550' fontSize='sm' >Flight fare</Text>
                                <Text fontWeight='550' fontSize='sm' >Taxes and fees</Text>


                                <Text pt='30px' fontWeight='700' fontSize='xl'>Total</Text>
                                <Text fontSize='sm' color='#8c8983' > Includes taxes and charges</Text>
                                <Text pt='10px' cursor='pointer' fontSize='xs' color='blue' > View price breakdown</Text>


                            </Box>
                            <Box mr='10px' style={{ flex: 1 }} w='50%' >
                                <Text textAlign='right' fontWeight='650' >INR{loadData.price}</Text>
                                <Text textAlign='right' fontWeight='550' fontSize='sm' >INR{finalPrice}</Text>
                                <Text textAlign='right' fontWeight='550' fontSize='sm' >INR2,371.00</Text>

                                <Text pt='30px' textAlign='right' fontWeight='700' fontSize='xl'>INR{finalPrice}</Text>

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
