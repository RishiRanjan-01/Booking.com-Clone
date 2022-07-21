import { Box, Checkbox, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const FlightTimes = () => {

    const handleCheckbox = (e) => {
        console.log(e.target.value)

    }
    return (
        <Box >
            <Tabs isLazy>
                <TabList w='75%'>
                    <Tab>OutBound flight</Tab>
                    <Tab>Return flight</Tab>
                </TabList>
                <TabPanels>
                    {/* initially mounted */}
                    <TabPanel>
                        <Text fontSize='sm' fontWeight='650' >Departs from Pune International Airport</Text>

                        <VStack alignItems='flex-start'>
                            <Checkbox colorScheme='blue' mt='10px'
                                value="12am"
                                onChange={handleCheckbox} >
                                12:00 AM - 5:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="6am"
                                onChange={handleCheckbox} >
                                6:00 AM - 11:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="12pm"
                                onChange={handleCheckbox} >
                                12:00 PM - 5:59 PM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="6pm"
                                onChange={handleCheckbox}>
                                6:00 PM - 11:59 PM
                            </Checkbox>
                        </VStack>

                        <Text fontSize='sm' fontWeight='650' pt='20px' >Arrives to Dabolim Airport</Text>

                        <VStack alignItems='flex-start'>
                            <Checkbox colorScheme='blue' mt='10px'
                                value="12am"
                                onChange={handleCheckbox} >
                                12:00 AM - 5:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="6am"
                                onChange={handleCheckbox}>
                                6:00 AM - 11:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="12pm"
                                onChange={handleCheckbox}>
                                12:00 PM - 5:59 PM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value='6pm'
                                onChange={handleCheckbox} >
                                6:00 PM - 11:59 PM
                            </Checkbox>
                        </VStack>
                    </TabPanel>
                    {/* initially not mounted */}
                    <TabPanel>
                        <Text fontSize='sm' fontWeight='650' >Departs from Dabolim Airport</Text>

                        <VStack alignItems='flex-start'>
                            <Checkbox colorScheme='blue' mt='10px'
                                value="12am"
                                onChange={handleCheckbox}
                            >
                                12:00 AM - 5:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="6am"
                                onChange={handleCheckbox}>
                                6:00 AM - 11:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="12pm"
                                onChange={handleCheckbox} >
                                12:00 PM - 5:59 PM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value='6pm'
                                onChange={handleCheckbox}>
                                6:00 PM - 11:59 PM
                            </Checkbox>
                        </VStack>

                        <Text fontSize='sm' fontWeight='650' pt='20px' >Arrives to Pune International Airport</Text>

                        <VStack alignItems='flex-start'>
                            <Checkbox colorScheme='blue' mt='10px'
                                value="12am"
                                onChange={handleCheckbox} >
                                12:00 AM - 5:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="6am"
                                onChange={handleCheckbox}>
                                6:00 AM - 11:59 AM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value="12pm"
                                onChange={handleCheckbox} >
                                12:00 PM - 5:59 PM
                            </Checkbox>
                            <Checkbox colorScheme='blue'
                                value='6pm'
                                onChange={handleCheckbox} >
                                6:00 PM - 11:59 PM
                            </Checkbox>
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
