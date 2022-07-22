import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
export const FlightFooter = () => {
    return (
        <Box w='100%' h='240px' mt='10px' >
            <Box w='100%' h='60px' bg='#003580'>
                <Flex color='white'
                    gap={5}
                    justifyContent='center'
                    textDecoration='underline'
                    cursor='pointer'
                    pt='15px'
                    fontSize='14px'
                    fontWeight='600'>
                    <Text>About Booking.com</Text>
                    <Text>Terms & Conditions</Text>
                    <Text>How We Work</Text>
                    <Text>Privacy & Cookie statement</Text>
                    <Text>Flights Help</Text>
                </Flex>


            </Box>
            <Center>

                <Text fontSize='12px' mt='30px'>  Copyright © 1996-2022 Booking.com. All rights reserved.</Text>

            </Center>
            <Center fontSize='12px' mt='20px'>
                <Text>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</Text>

            </Center>

            <Box>

                <Flex gap={90} mt='30px'
                    justifyContent='center'>
                    <Image src={img1} alt='img1'></Image>
                    <Image src={img2} alt='img2'></Image>
                    <Image src={img3} alt='img3'></Image>
                    <Image src={img4} alt='img4'></Image>
                    <Image src={img5} alt='img5'></Image>
                    <Image src={img6} alt='img6'></Image>
                </Flex>


            </Box >

        </Box >
    )
}

