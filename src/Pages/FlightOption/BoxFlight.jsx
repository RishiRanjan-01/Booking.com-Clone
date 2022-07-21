import { CalendarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAscSort, getFligths, getTimeSort } from '../../Redux/Flight/action'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton'
import { Alert, AlertIcon } from '@chakra-ui/alert'
import style from './Flight.module.css'
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
import { useLocation } from 'react-router-dom';

export const BoxFlight = () => {



    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const flight = useSelector(state => state.flightReducer.flight);

    // const [fligthSort, SetFlightSort] = useState(flight);


    useEffect(() => {
        dispatch(getFligths());


    }, [])




    const AscSort = () => {
        dispatch(getAscSort());
    }

    const timeSort = () => {
        dispatch(getTimeSort())

    }
    const best = () => {
        dispatch(getFligths())
    }





    const modalData = (el) => {
        // console.log(el)

        onOpen();


    }

    const timeup1 = (t) => {

        return t.toString().split(".").join(":");

    }







    const { isLoading, isError } = useSelector(state => state.flightReducer)


    return (
        <div>
            <Modal bg='white' blockScrollOnMount={false} size='3xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg='white.300' />
                {/* backdropFilter='auto' backdropBlur='0.5px' */}
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader fontWeight='700'>Your flight to Goa City</ModalHeader>

                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            Flight to Goa City
                        </Text>
                        {/* {console.log(`Dtaa ${el.Direct1}`)} */}
                        {/* {el.price} */}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} >
                            Select
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Flex className={style.bestBox} border='1px solid rgb(218, 213, 213)' w='100%' mt='30px'>
                <Box onClick={best}>Best</Box>
                <Box onClick={AscSort}>Cheapest</Box>
                <Box onClick={timeSort}>Fastest</Box>
            </Flex>


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


                                            <Flex h='50%' border='1px solid red'>
                                                <Box w='50px' border='1px solid blue' ml='15px' >
                                                    <Image mt='25px' h='40px' src={ele.img1} alt='img' />
                                                    <Text mt='10px' fontSize='xs'>Indigo</Text>
                                                </Box>
                                                <Box w='120px' border='1px solid orange' textAlign='center' m='auto'>
                                                    <Text fontSize='md' fontWeight='650'> {timeup1(ele.up1)} AM</Text>
                                                    <Text fontSize='xs' color='#8c8983' >PNQ.Jul 26</Text>
                                                </Box>
                                                <Box w='200px' border='1px solid pink' textAlign='center' m='auto'>
                                                    <Text fontSize='xs'>{timeup1(ele.time1)}</Text>
                                                    <hr />
                                                    <Text fontSize='xs'>{ele.Direct1}</Text>

                                                </Box>
                                                <Box w='120px' textAlign='center' m='auto'>
                                                    <Text fontSize='md' fontWeight='650'>{timeup1(ele.drop1)} AM</Text>
                                                    <Text as='sup' color='#8c8983' fontSize='xs' >PNQ.Jul 26</Text>
                                                </Box>
                                            </Flex>






                                            <Flex h='50%' border='1px solid green'>
                                                <Box w='50px' border='1px solid blue' ml='15px' >
                                                    <Image mt='25px' h='40px' src={ele.img2} alt='img' />
                                                    <Text mt='10px' fontSize='xs'>Indigo</Text>
                                                </Box>
                                                <Box w='120px' border='1px solid orange' textAlign='center' m='auto'>
                                                    <Text fontSize='md' fontWeight='650'>{timeup1(ele.up2)} AM</Text>
                                                    <Text fontSize='xs' color='#8c8983' >PNQ.Jul 26</Text>
                                                </Box>
                                                <Box w='200px' border='1px solid pink' textAlign='center' m='auto'>
                                                    <Text fontSize='xs'>{ele.time2}</Text>
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
                                            <Box ml='230px'><Icon as={CalendarIcon} /></Box>
                                            <Text pl='50px' as='sup' color='#8c8983' fontSize='xs' >Included: carry-on bag, checked bag</Text>
                                            <Text textTransform='uppercase' fontWeight='700' fontSize="xl">Inr{ele.price}</Text>
                                            <Text as='sup' color='#8c8983' fontSize='xs' >Total price for all travelers</Text>
                                            <Box pl='7px'>



                                                <Button onClick={() => modalData(ele)} colorScheme='blue' variant='outline' w='95%'>
                                                    See flight
                                                </Button>







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
