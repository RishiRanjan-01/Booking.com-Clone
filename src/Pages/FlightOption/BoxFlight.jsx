import { CalendarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAscSort, getBestSort, getFlightData, getFligths, getTimeSort } from '../../Redux/Flight/action'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton'
import { Alert, AlertIcon } from '@chakra-ui/alert'
import style from './Flight.module.css'
import plane from './FlightImg/plane.png'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { BsCircle } from 'react-icons/bs'
import { TiShoppingBag } from "react-icons/ti";

import { AiOutlineQuestionCircle } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

export const BoxFlight = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const flight = useSelector(state => state.flightReducer.flight);

    // const [fligthSort, SetFlightSort] = useState(flight);
    const lData = useSelector(state => state.flightReducer.localData);
    const my = lData.Direct1
    // console.log(`my ${my}`)

    const adultCount = useSelector(state => state.passenger.AdultCount);
    const childCount = useSelector(state => state.passenger.childCount);
    // console.log(`adults ${adultCount} child ${childCount}`)
    // console.log(`Data Local ${my}`)
    const passengerCount = adultCount + childCount

    useEffect(() => {
        dispatch(getFligths());


    }, [])



    const best = () => {
        dispatch(getBestSort())

    }
    const AscSort = () => {
        dispatch(getAscSort());
    }

    const timeSort = () => {
        dispatch(getTimeSort())

    }






    const modalData = (el) => {
        // console.log(el)

        onOpen();
        dispatch(getFlightData(el));


    }

    const timeup1 = (t) => {
        if (t) {
            return t.toString().split(".").join(":");
        }

    }
    const timeHr = (hr) => {

        if (hr) {
            return hr.toString().split(".").join("h ")

        }

    }
    const timeTake = (hr) => {


        return hr.toString().split(".").join("h ")



    }


    const clickMove = [
        {
            id: 1,
            headname: "Best",
            btn: best
        },
        {
            id: 2,
            headname: "Cheapest",
            btn: AscSort
        },
        {
            id: 3,
            headname: "Fastest",
            btn: timeSort
        }
    ]




    const { isLoading, isError } = useSelector(state => state.flightReducer)


    return (
        <div>

            <Flex border='1px solid rgb(218, 213, 213)' h='50px' w='100%' mt='30px'>

                {clickMove.map((cli, ind) => {
                    return (
                        <div
                            key={cli.id}
                            onClick={(e) => {

                                return setIndex(ind)


                            }}

                            className={style.bestBox}
                            style={{
                                height: '100%',
                                textAlign: "center",
                                cursor: "pointer",
                                transition: " 0.5s",

                                borderBottom: index === ind ? '3px solid blue' : null,
                            }}
                        >
                            <Box
                                height='50px'
                                width="260px"
                                pt='10px'

                                onClick={cli.btn}>{cli.headname}</Box>

                        </div>
                    )
                })}
                {/* 
                <Box onClick={best}>Best </Box>
                <Box onClick={AscSort}>Cheapest</Box>
                <Box onClick={timeSort}>Fastest</Box> */}
            </Flex >


            {
                flight.map((ele) => (
                    <div key={ele.id}>

                        {
                            isError ? <Alert status='error'>
                                <AlertIcon />
                                Your Data is not loading, Check Api URl
                            </Alert> :
                                isLoading ?
                                    <Box padding='6' boxShadow='lg' bg='white'>

                                        < Flex h='230px'>
                                            <Box w='65%'>

                                                <SkeletonCircle size='10' />
                                                <SkeletonText mt='4' noOfLines={4} spacing='15' />
                                                <SkeletonCircle size='10' mt='10px' /></Box>
                                            <Box w='35%'>
                                                <SkeletonText mt='10' ml='90px' noOfLines={4} spacing='15' />
                                                <Skeleton mt='50px' ml='140px' height='20px' w='100px' />
                                            </Box>

                                        </Flex>

                                    </Box> :


                                    <Flex borderRadius='2px' h='230px' border='1px solid rgb(218, 213, 213)' mt='20px' w='100%' >
                                        <Box w='65%'>


                                            <Flex h='50%' >
                                                <Box w='50px' ml='15px' >
                                                    <Image mt='25px' h='40px' src={ele.img1} alt='img' />
                                                    <Text mt='10px' fontSize='xs'>Indigo</Text>
                                                </Box>
                                                <Box w='120px' textAlign='center' m='auto'>
                                                    <Text fontSize='md' fontWeight='650'> {timeup1(ele.up1)} AM</Text>
                                                    <Text fontSize='xs' color='#8c8983' >PNQ.Jul 26</Text>
                                                </Box>
                                                <Box w='200px' textAlign='center' m='auto'>
                                                    <Text fontSize='xs'>{timeTake(ele.time1)}m</Text>
                                                    <hr />
                                                    <Text fontSize='xs'>{ele.Direct1}</Text>

                                                </Box>
                                                <Box w='120px' textAlign='center' m='auto'>
                                                    <Text fontSize='md' fontWeight='650'>{timeup1(ele.drop1)} AM</Text>
                                                    <Text as='sup' color='#8c8983' fontSize='xs' >PNQ.Jul 26</Text>
                                                </Box>
                                            </Flex>






                                            <Flex h='50%'>
                                                <Box w='50px' ml='15px' >
                                                    <Image mt='25px' h='40px' src={ele.img2} alt='img' />
                                                    <Text mt='10px' fontSize='xs'>Indigo</Text>
                                                </Box>
                                                <Box w='120px' textAlign='center' m='auto'>
                                                    <Text fontSize='md' fontWeight='650'>{timeup1(ele.up2)} AM</Text>
                                                    <Text fontSize='xs' color='#8c8983' >PNQ.Jul 26</Text>
                                                </Box>
                                                <Box w='200px' textAlign='center' m='auto'>
                                                    <Text fontSize='xs'>{timeTake(ele.time2)}m</Text>
                                                    <hr />
                                                    <Text fontSize='xs'>{ele.Direct2}</Text>

                                                </Box>
                                                <Box w='120px' textAlign='center' m='auto'>
                                                    <Text fontSize='md' fontWeight='650'>{timeup1(ele.drop2)} PM</Text>
                                                    <Text as='sup' color='#8c8983' fontSize='xs' >PNQ.Jul 26</Text>
                                                </Box>

                                            </Flex>




                                        </Box>
                                        <Box h='100%' w='35%' borderLeft='1px solid rgb(218, 213, 213)' >
                                            <Box ml='221px' mt='20px' ><Icon as={CalendarIcon} fontSize='20px' /></Box>

                                            <Text pl='50px' color='#8c8983' fontSize='xs' pt='10px'  >
                                                Included: carry-on bag, checked bag</Text>

                                            <Text mt='30px' textAlign='right' pr='20px' textTransform='uppercase' fontWeight='700' fontSize="xl">Inr{ele.price}</Text>

                                            <Text textAlign='right' pr='20px' color='#8c8983' fontSize='xs'  >Total price for all travelers</Text>
                                            <Box pl='7px'>



                                                <Button mt='20px' onClick={() => modalData(ele)} colorScheme='blue' variant='outline' w='95%'>
                                                    See flight
                                                </Button>
                                                {/* backdropFilter='auto' backdropBlur='0.5px' */}

                                                <Modal bg='white' blockScrollOnMount={false} size='3xl' isOpen={isOpen} onClose={onClose}>
                                                    <ModalOverlay bg='white.300' />

                                                    <ModalContent>
                                                        <ModalCloseButton />
                                                        <ModalHeader fontWeight='700'>Your flight to Goa City</ModalHeader>

                                                        <ModalBody >
                                                            <Text fontWeight='bold' >
                                                                Flight to Goa City
                                                            </Text>
                                                            <Flex as='sup' mt='19px' color='#8c8983' fontSize='sm' >{lData.Direct1} . {timeHr(lData.time1)}m</Flex>
                                                            <Flex mt='15px' w='100%'>
                                                                <Flex >
                                                                    <Box w='40px' h='100px'  >
                                                                        <Box ><BsCircle /></Box>
                                                                        <Box borderLeft='1px solid black' w='10px' h='30px ' m='10px 0 10px 7px'></Box>
                                                                        <Box><BsCircle /></Box>
                                                                    </Box>
                                                                    <Box w='200px' h='100px' >

                                                                        <Text color='#8c8983' fontSize='sm' > Tue, Jul 26 · {timeup1(lData.up1)} AM</Text>

                                                                        <Text fontWeight='bold' fontSize='xm' >
                                                                            PNQ · Pune
                                                                        </Text>



                                                                        <Text mt='10px' color='#8c8983' fontSize='sm' > Tue, Jul 26 · {timeup1(lData.drop1)} AM</Text>
                                                                        <Text fontWeight='bold' fontSize='xm' >
                                                                            GOI · Goa Airport
                                                                        </Text>

                                                                    </Box>
                                                                </Flex>
                                                                <Flex ml='220px' w='200px' h='100px'>
                                                                    <Box>
                                                                        <Image w='30px' h='30px' src={plane} alt='img'></Image>
                                                                    </Box>
                                                                    <Box ml='20px'>

                                                                        <Text color='#8c8983' fontSize='sm'  > IndiGo</Text>

                                                                        <Text color='#8c8983' fontSize='sm'  >6E6876 · Economy</Text>

                                                                        <Text color='#8c8983' fontSize='sm'  >Flight time 1h 05m</Text>
                                                                    </Box>
                                                                </Flex>

                                                            </Flex>






                                                            <Text fontWeight='bold' mt='30px' >
                                                                Flight to Pune
                                                            </Text>
                                                            <Flex as='sup' mt='19px' color='#8c8983' fontSize='sm' >{lData.Direct2} . {timeHr(lData.time2)}m</Flex>
                                                            <Flex mt='15px' w='100%' >
                                                                <Flex >
                                                                    <Box w='40px' h='100px'>
                                                                        <Box ><BsCircle /></Box>
                                                                        <Box borderLeft='1px solid black' w='10px' h='30px ' m='10px 0 10px 7px'></Box>
                                                                        <Box><BsCircle /></Box>
                                                                    </Box>
                                                                    <Box w='200px' h='100px' >

                                                                        <Text color='#8c8983' fontSize='sm' > Tue, Aug 2 · 1:40 AM</Text>

                                                                        <Text fontWeight='bold' fontSize='xm' >
                                                                            GOI · Goa Airport
                                                                        </Text>



                                                                        <Text mt='10px' color='#8c8983' fontSize='sm' >Tue, Aug 2 · 2:40 AM</Text>

                                                                        <Text fontWeight='bold' fontSize='xm' >
                                                                            PNQ · Pune
                                                                        </Text>
                                                                    </Box>
                                                                </Flex>
                                                                <Flex ml='220px' w='200px' h='100px' >
                                                                    <Box>
                                                                        <Image w='30px' h='30px' src={plane} alt='img'></Image>
                                                                    </Box>
                                                                    <Box ml='20px'>

                                                                        <Text color='#8c8983' fontSize='sm'  > IndiGo</Text>

                                                                        <Text color='#8c8983' fontSize='sm'  >6E6877 · Economy</Text>

                                                                        <Text color='#8c8983' fontSize='sm' >Flight time 1h 00m</Text>
                                                                    </Box>
                                                                </Flex>

                                                            </Flex>




                                                            <Flex mt='30px' w='100%' h='120px' borderTop='1px solid #8c8983' borderBottom='1px solid #8c8983'>
                                                                <Box w='30%' h='100%' mt='10px' >
                                                                    <Text fontWeight='bold' fontSize='xm' >
                                                                        Included baggage
                                                                    </Text>
                                                                    <Text color='#8c8983' fontSize='sm' w='200px' >The total baggage included in the price</Text>

                                                                </Box>
                                                                <Box w='30%' h='80%' m='auto' borderLeft='1px solid #8c8983'>
                                                                    <Flex mt='10px' ml='15px'>
                                                                        <Box><TiShoppingBag fontSize='30px' /> </Box>
                                                                        <Box ml='10px'>
                                                                            <Text color='black' fontSize='sm' w='200px' >1 carry-on bag</Text>

                                                                            <Text color='black' fontSize='sm' w='200px' >Max weight 7 kg</Text>
                                                                        </Box>
                                                                    </Flex>
                                                                    <Flex mt='10px' ml='20px' >
                                                                        <Box>
                                                                            <CalendarIcon fontSize='20px' />
                                                                        </Box>
                                                                        <Box ml='15px'>
                                                                            <Text color='black' fontSize='sm' w='200px' >1 checked bag</Text>

                                                                            <Text color='black' fontSize='sm' w='200px' >Max weight 15 kg</Text>
                                                                        </Box>
                                                                    </Flex>

                                                                </Box>
                                                                <Box w='500px' h='100%' textAlign='right'>
                                                                    <Text color='green' mt='35px'>Included</Text>
                                                                    <Text color='green' mt='35px'>Included</Text>

                                                                </Box>
                                                            </Flex>
                                                        </ModalBody>
                                                        <Flex h='100px' justifyContent='space-between'>
                                                            <Box mt='10px' ml='22px' w='200px' h='80px'>
                                                                <Box>
                                                                    <Flex mt='10px'>
                                                                        <Text fontWeight='700' fontSize='xl'>{lData.price * passengerCount}</Text>
                                                                        <Box ml='10px' mt='5px'><AiOutlineQuestionCircle fontSize="20px" /></Box>
                                                                    </Flex>

                                                                    <Text fontSize='xs'>Total price for all travelers</Text>



                                                                </Box>
                                                            </Box>
                                                            <ModalFooter>
                                                                <Button onClick={() => navigate("/flightcontact")} colorScheme='blue' mr={3} borderRadius='none' p='20px 40px'>
                                                                    Select
                                                                </Button>
                                                            </ModalFooter>
                                                        </Flex>
                                                    </ModalContent>
                                                </Modal>





                                            </Box>
                                        </Box>

                                    </Flex >
                        }

                    </div >
                ))
            }




        </div >
    )
}
