import { Box, Circle, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const PaymentSubNav = () => {
    return (
        <Flex w='100%' h='80px' bg='#f2f2f2' justifyContent='space-evenly'>
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
    )
}
