import React from 'react'
import { Box, Checkbox, Flex, Radio, Stack, Text, VStack } from '@chakra-ui/react'
import FligthOptionSlider from './SliderFligthOption'
import { FlightTimes } from './TimesFlight'

import { BoxFlight } from './BoxFlight'
// import { useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar'


function FligthOption() {

    // const dispatch = useDispatch();
    // dispatch(getFligths());
    // useEffect(() => {
    //     dispatch(getFligths());

    // }, []);

    // const flight = useSelector(state => state.flightReducer.flight);
    // console.log(flight);

    const radioData = (e) => {
        console.log(e.target.value)
    }

    return (
        <Box>
            <Navbar />

            <Box w='100%' h='200px' bg='#d9d9d9'>
                {/* serach bar */}
            </Box>

            <Box w='79%' m='auto' border='1px solid red' h='auto'>


                <Flex>


                    {/* first box */}


                    <Box w='45%' h='auto' border='1px solid green'>
                        <Box pl='10px' pt='30px'>
                            <Text fontSize='xl' fontWeight='650'>Filters</Text>
                            <Text as='sup' color='#8c8983' fontSize='14px' >Showing 15 results</Text>
                            <Text fontSize='md' fontWeight='650' pt='20px'>Stops</Text>

                            {/* Stope filter */}
                            <Stack gap={2} mt='10px'>
                                <Radio size='lg' name='1' colorScheme='blue'
                                    value='any'
                                    onChnage={radioData}>
                                    Any
                                    <Text fontSize='sm'>From INR11,359.31</Text>
                                </Radio>
                                <Radio size='lg' name='1' colorScheme='blue'
                                    value='direct'
                                    onChnage={radioData}
                                >
                                    Direct only

                                    <Text fontSize='sm'>From INR11,359.31</Text>
                                </Radio>
                                <Radio size='lg' name='1' colorScheme='blue'
                                    value='stop'
                                    onChnage={radioData}
                                >

                                    1 stop max
                                    <Text fontSize='sm'>From INR11,359.31</Text>
                                </Radio>
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
                    <Box w='80%' h='auto' border='1px solid yellow'>



                        <Box  > <BoxFlight /> </Box>



                    </Box>
                </Flex>


            </Box>
        </Box>
    )
}

export default FligthOption