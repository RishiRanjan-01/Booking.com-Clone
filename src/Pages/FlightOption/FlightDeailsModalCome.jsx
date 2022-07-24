import React from 'react'
import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Image
} from '@chakra-ui/react'
import plane from './FlightImg/plane.png'
import { BsCircle } from 'react-icons/bs'
import { useSelector } from 'react-redux'


const FlightDeailsModalCome = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const lData = useSelector(state => state.flightReducer.localData);


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

    return (
        <Box>
            <Button fontSize='14px' fontWeight='400' onClick={onOpen} variant='link' color='blue' ml='200px' mt='35px'>
                See flight details
            </Button>

            <Modal size='3xl' mt='200px' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent mt='330px'>

                    <ModalCloseButton />
                    <ModalBody  >


                        <Text fontWeight='bold' >
                            Flight to Pune
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


                    </ModalBody>

                </ModalContent>
            </Modal>

        </Box>
    )
}

export default FlightDeailsModalCome