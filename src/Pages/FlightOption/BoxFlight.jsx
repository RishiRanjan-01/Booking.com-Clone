import { CalendarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFligths } from '../../Redux/Flight/action'

export const BoxFlight = () => {

    const dispatch = useDispatch();
    const flight = useSelector(state => state.flight);
    console.log(flight);



    useEffect(() => {
        dispatch(getFligths());
    }, [])



    const timeup1 = (t) => {

        return t.toString().split(".").join(":");

    }



    return (
        <div>
            {
                flight.map((ele) => (
                    <div key={ele.id}><Flex borderRadius='2px' h='230px' border='1px solid rgb(218, 213, 213)' mt='20px' w='100%' >
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
                                <Button colorScheme='blue' variant='outline' w='95%'>
                                    See flight
                                </Button>
                            </Box>
                        </Box>

                    </Flex >
                    </div>
                ))
            }




        </div>
    )
}
