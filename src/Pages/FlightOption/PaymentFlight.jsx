import {
    Box,
    Flex,
    Text,
    Image,


} from '@chakra-ui/react'
import React from 'react'
import FlightNav from '../../Components/FlightFooter/FlightNav'
import { PaymentSubNav } from './PaymentSubNav'
import { BsArrowLeftRight } from 'react-icons/bs'
import planimg from './FlightImg/plane.png'
import FlightDeailsModalTo from './FlightDeailsModalTo'
import FlightDeailsModalCome from './FlightDeailsModalCome'
// import { loadFlightData } from '../../Utils/flightOption/selecteFlight'
import { useSelector } from 'react-redux/es/exports'
import { IoPersonOutline } from "react-icons/io5";
import { VscDebugStackframeDot } from "react-icons/vsc";
import { CalendarIcon } from '@chakra-ui/icons'
import { TiShoppingBag } from "react-icons/ti";
import { PayForm } from './PayFormBtn'
export const PaymentFlight = () => {

    // const flightContactData = loadFlightData("flightForm");
    // console.log(flightContactData.first)

    // const loadData = loadFlightData('flightTime');
    // console.log(loadData)
    const loadData = useSelector(state => state.flightReducer.localData);
    const contactData = useSelector(state => state.flightReducer.flightData);

    const adultCount = useSelector(state => state.passenger.AdultCount);
    const childCount = useSelector(state => state.passenger.childCount);
    console.log(`adults ${adultCount} child ${childCount}`)

    const passengerCount = adultCount + childCount

    const flightAmount = loadData.price * passengerCount

    let finalPrice = flightAmount - 2371;

    return (
        <Box>
            <FlightNav />
            <PaymentSubNav />

            <Flex w='75%' m='auto'>
                <Box w='65%' h='auto' >
                    <Text fontSize='sm' color='#8c8983' mt='40px'>Round-trip · 1 traveler · Tue, Jul 26 - Tue, Aug 2</Text>

                    <Flex gap={3}>
                        <Text fontSize='4xl' fontWeight='650'>Pune</Text>
                        <Box mt='20px' boxSize='40px'>  <BsArrowLeftRight ml='10px' fontSize="25px" /> </Box>
                        <Text fontSize='4xl' fontWeight='650'>Goa City</Text>
                    </Flex>

                    <Text mt='20px' fontSize='2xl' fontWeight='650'>Check and pay</Text>
                    <Box w='100%' border='1px solid #d9d9d9' h='100px' mt='20px' >
                        <Flex>
                            <Box p='20px'>
                                <Image w='60px' src={planimg} salt='plane' />
                            </Box>
                            <Box
                                pt='14px'
                                w='300px'
                                h='100px'
                                ml='20px'
                            >
                                <Text fontWeight='700' fontSize='14px' >Flight to Goa City</Text>
                                <Text fontSize='sm' color='#8c8983' >Tue, Jul 26 · 12:05 AM - Tue, Jul 26 · 1:10 AM</Text>
                                <Text fontSize='sm' color='#8c8983' >Direct · 1h 05m</Text>


                            </Box>
                            <Box>
                                <FlightDeailsModalTo />


                            </Box>
                        </Flex>
                    </Box >






                    <Box w='100%' border='1px solid #d9d9d9' h='100px' >
                        <Flex>
                            <Box p='20px'>
                                <Image w='60px' src={planimg} salt='plane' />
                            </Box>
                            <Box
                                pt='14px'
                                w='300px'
                                h='100px'
                                ml='20px'
                            >
                                <Text fontWeight='700' fontSize='14px' >Flight to Pune</Text>
                                <Text fontSize='sm' color='#8c8983' >Sat, Sept 3 · 1:40 AM - Sat, Sept 3 · 2:40 AM</Text>
                                <Text fontSize='sm' color='#8c8983' >Direct · 1h 05m</Text>


                            </Box>
                            <Box>
                                <FlightDeailsModalCome />


                            </Box>
                        </Flex>
                    </Box>



                    <Box w='100%' border='1px solid #d9d9d9' h='110px' mt='20px' >

                        <Text
                            fontWeight='700'
                            p='20px 0 0 20px'
                            fontSize='xl'> Contact details</Text>
                        <Text pl='20px' fontSize='sm' color='#8c8983' >+{contactData.tel}</Text>

                        <Text pl='20px' fontSize='sm' color='#8c8983' >{contactData.email}</Text>

                    </Box>


                    <Box w='100%' border='1px solid #d9d9d9' h='120px' mt='20px' >
                        <Text
                            fontWeight='700'
                            p='20px 0 0 20px'
                            fontSize='xl'>Traveler details</Text>

                        <Flex ml='20px' mt='5px'>
                            <Box > < IoPersonOutline fontSize='25px' /></Box>
                            <Text ml='10px' >{contactData.first} {contactData.last}</Text>
                        </Flex>
                        <Flex pl='55px'>

                            <Box>Adult</Box>
                            <Box pt='6px' >
                                <VscDebugStackframeDot fontSize='9px' />
                            </Box>
                            <Text textTransform='capitalize' pl='10px' >{contactData.gender}</Text>
                        </Flex>
                    </Box>

                    <Box w='100%' border='1px solid #d9d9d9' h='200px' mt='20px' >
                        <Text
                            fontWeight='700'
                            p='20px 0 0 20px'
                            fontSize='xl'>Included baggage</Text>
                        <Text pl='20px' fontSize='sm' color='#8c8983' >The total baggage included in the price</Text>
                        <Flex mt='15px'>
                            <Box ml='20px' mt='5px' >      <TiShoppingBag fontSize='25px' /></Box>
                            <Box>
                                <Text pl='20px' fontSize='sm' color='#8c8983' >2 carry-on bags</Text>
                                <Text pl='20px' fontSize='sm' color='#8c8983' >Max weight 7 kg</Text>

                            </Box>
                        </Flex>
                        <Flex mt='10px'>
                            <Box ml='20px' mt='5px' >      <CalendarIcon fontSize='25px' /></Box>
                            <Box>
                                <Text pl='20px' fontSize='sm' color='#8c8983' >2 checked bags</Text>
                                <Text pl='20px' fontSize='sm' color='#8c8983' >Max weight 15 kg</Text>

                            </Box>
                        </Flex>

                    </Box>

                    <PayForm />



                </Box>


                <Box w='35%' h='800px'>
                    {/* second box */}

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
                </Box>
            </Flex>
        </Box>
    )
}
