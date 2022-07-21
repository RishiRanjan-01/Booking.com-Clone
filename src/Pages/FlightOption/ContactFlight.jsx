import React from 'react'
import { Box, Text, Flex, Circle } from '@chakra-ui/react'
import {
    Image,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    InputGroup,
    InputLeftAddon,
    Checkbox
} from '@chakra-ui/react'
import img from './arrow.png'

import style from './Flight.module.css'
const ContactFlight = () => {
    return (
        <Box>
            <Box>
                {/* Navbar */}
            </Box>
            <Flex w='100%' h='80px' border='1px solid red' bg='#f2f2f2' justifyContent='space-evenly'>
                <Flex pt='25px'>
                    <Circle size='25px' bg='twitter.800' color='white'>
                        1
                    </Circle>
                    <Text pl='10px'> Who's flying?</Text>
                </Flex>
                <Box w='55%' pt='38px'  >
                    <hr></hr>
                </Box>
                <Flex pt='25px'>
                    <Circle size='25px' bg='twitter.800' color='white'>
                        2
                    </Circle>
                    <Text pl='10px'>Check and pay</Text>
                </Flex>
            </Flex>

            <Flex w='75%' m='auto'>
                <Box w='65%' border='1px solid red' h='1000px'>

                    <Text fontSize='sm' color='#8c8983' mt='40px'>Round-trip · 1 traveler · Tue, Jul 26 - Tue, Aug 2</Text>

                    <Flex gap={3}>
                        <Text fontSize='4xl' fontWeight='650'>Pune</Text>
                        <Box mt='20px' boxSize='40px'><Image src={img} alt='img'></Image></Box>
                        <Text fontSize='4xl' fontWeight='650'>Goa City</Text>
                    </Flex>

                    <Text mt='20px' fontSize='2xl' fontWeight='650'>Who's flying?</Text>


                    <Box w='100%' border='1px solid red' h='350px' mt='20px' >
                        <Text mt='10px' ml='15px' fontSize='xl' fontWeight='650'>Contact details</Text>
                        <Text fontSize='sm' ml='15px' color='#8c8983' mt='0px'> <span className={style.span}>*</span>Required</Text>


                        <FormControl ml='15px' mt='10px'>
                            <FormLabel>Contact email <span className={style.span}>*</span></FormLabel>
                            <Input w='60%' h='50px' type='email' outline='black solid 1px' required='required' />
                            <FormHelperText>We'll send your flight confirmation here</FormHelperText>


                            <FormLabel>Contact number <span className={style.span}>*</span></FormLabel>
                            <InputGroup >
                                <InputLeftAddon children='+91' outline='black solid 1px' />
                                <Input w='40%' outline='black solid 1px' type='tel' />

                            </InputGroup>
                            <Flex><Checkbox mt='10px' mr='10px' /> <FormHelperText>Get free text message updates about your flight</FormHelperText></Flex>
                        </FormControl>

                    </Box>
                </Box>


                <Box w='35%' border='1px solid black' h='1000px'></Box>
            </Flex>



        </Box>
    )
}

export default ContactFlight
