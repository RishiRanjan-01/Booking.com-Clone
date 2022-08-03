import React, { useState } from 'react'
import { Box, Checkbox, Flex, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react'
import FligthOptionSlider from './SliderFligthOption'
import { FlightTimes } from './TimesFlight'
import { useSelector } from 'react-redux'
import { BoxFlight } from './BoxFlight'
// import { useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar'
import { FlightFooter } from '../../Components/FlightFooter/FlightFooter'
import FlightSearch from '../FlightHome/FlightSearch'
import { useDispatch } from 'react-redux'
import { getAscSort, getBestSort, getTimeSort } from '../../Redux/Flight/action'


function FligthOption() {
    const [value, setValue] = useState('any')
    console.log(`value data ${value}`)
    // const dispatch = useDispatch();
    // dispatch(getFligths());
    // useEffect(() => {
    //     dispatch(getFligths());

    // }, []);
    const dispatch = useDispatch();


    const flight = useSelector(state => state.flightReducer.flight);
    // console.log(flight);

    // if (value === 'any') {
    //     console.log(value)
    //     dispatch(getBestSort())

    // }
    // else if (value === 'direct') {
    //     dispatch(getAscSort())

    // }
    // else if (value === 'stop') {
    //     dispatch(getTimeSort())

    // }


    return (
        <Box>
            <Navbar />


            <Box w='100%' h='200px' bg='#edede8'>
                {/* serach bar */}
                <Box pt='25px'>
                    <FlightSearch />
                </Box>

            </Box>

            <Box w='79%' m='auto' h='auto'>


                <Flex>


                    {/* first box */}


                    <Box w='45%' h='auto' >
                        <Box pl='10px' pt='30px'>
                            <Text fontSize='xl' fontWeight='650'>Filters</Text>
                            <Text as='sup' color='#8c8983' fontSize='14px' >Showing 15 results</Text>
                            <Text fontSize='md' fontWeight='650' pt='20px'>Stops</Text>

                            {/* Stope filter */}
                            <Stack gap={2} mt='10px'>
                                <RadioGroup defaultValue='any' onChange={setValue} value={value}>
                                    <Flex justifyContent='space-between'>
                                        <Radio
                                            size='lg'
                                            colorScheme='blue'
                                            value='any'
                                        >
                                            Any
                                            <Text color='#8c8983' fontSize='sm'>From INR11,359.31</Text>
                                        </Radio>
                                        <Text pr='30px' color='#8c8983' fontSize='sm'>15</Text>

                                    </Flex>
                                    <Flex justifyContent='space-between'>
                                        <Radio size='lg'
                                            colorScheme='blue'
                                            value='direct'
                                        >
                                            Direct only

                                            <Text color='#8c8983' fontSize='sm'>From INR11,359.31</Text>
                                        </Radio>
                                        <Text pr='30px' color='#8c8983' fontSize='sm'>4</Text>

                                    </Flex>
                                    <Flex justifyContent='space-between'>
                                        <Radio size='lg'
                                            colorScheme='blue'
                                            value='stop'
                                        >

                                            1 stop max
                                            <Text color='#8c8983' fontSize='sm'>From INR11,359.31</Text>
                                        </Radio>
                                        <Text pr='30px' color='#8c8983' fontSize='sm'>11</Text>


                                    </Flex>
                                </RadioGroup>
                            </Stack>
                            {/* duration */}

                            <Text fontSize='md' fontWeight='650' pt='20px'>Duration</Text>
                            <Text fontSize='sm' fontWeight='500' color='#5b6770'>Maximum travel time</Text>
                            <Text as='sup' color='#8c8983' fontSize='12px' >27 hours</Text>
                            <Box w='90%' ><FligthOptionSlider /></Box>


                            <Text fontSize='md' fontWeight='650' pt='20px'>Flight times</Text>

                            <Box w='90%'><FlightTimes /> </Box>

                            <Text fontSize='md' fontWeight='650' pt='20px'>Airlines</Text>
                            <Box> <VStack alignItems='flex-start'>
                                <Checkbox colorScheme='blue' mt='10px' defaultChecked>
                                    Air India
                                </Checkbox>
                                <Checkbox colorScheme='blue' defaultChecked >
                                    Go First
                                </Checkbox>
                                <Checkbox colorScheme='blue' defaultChecked >
                                    Hahn Air Systems
                                </Checkbox>
                                <Checkbox colorScheme='blue' defaultChecked >
                                    IndiGo
                                </Checkbox>
                                <Checkbox colorScheme='blue' defaultChecked >
                                    Vistara
                                </Checkbox>
                            </VStack>
                            </Box>
                        </Box>
                    </Box>



                    {/* Second box */}
                    <Box w='80%' h='auto'>



                        <Box  > <BoxFlight /> </Box>



                    </Box>
                </Flex>


            </Box>


            <FlightFooter />

        </Box>
    )
}

export default FligthOption