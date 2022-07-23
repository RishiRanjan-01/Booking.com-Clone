import {
    Box,
    Flex,
    Text,
    Image,
    Button
} from '@chakra-ui/react'
import React from 'react'
import usflag from './img/usflag.png'
import { useNavigate } from 'react-router-dom'

import { AiOutlineQuestionCircle } from "react-icons/ai";

const FlightNav = () => {
    let navigate = useNavigate();

    return (
        <Box w='100%' h='80px' bg='#003580' >
            <Flex justifyContent='space-between'>
                <div >
                    <Text onClick={() => navigate('/flighthome')}
                        cursor='pointer'
                        ml='200px'
                        mt='20px'
                        color='white'
                        fontSize='2xl'
                        fontWeight='700'>Booking.com</Text>
                </div>
                <Flex
                    w='300px'

                    justifyContent='space-between'
                    mr='200px' >

                    <Image src={usflag}
                        cursor='pointer'
                        alt='imgus'
                        borderRadius='50%'
                        w='28px'
                        h='28px'
                        mt='23px'

                    ></Image>
                    <Box mt='25px' cursor='pointer'>
                        <AiOutlineQuestionCircle fontSize='25px' color='white' />

                    </Box>

                    <Flex color='blue.500' mt='15px' justifyContent='space-between' w='185px'>
                        <Button cursor='pointer' borderRadius='none' bg='white' >Register</Button>
                        <Button cursor='pointer' borderRadius='none' bg='white' >Sign in</Button>
                    </Flex>
                </Flex>

            </Flex>




        </Box>
    )
}

export default FlightNav
