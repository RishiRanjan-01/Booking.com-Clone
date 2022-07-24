import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,Heading,Text,Image,
  AccordionPanel,
  AccordionIcon,Box,Container, Flex,Input,Button, Stack, VStack
} from '@chakra-ui/react'
import { Link as Links } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import Navbar from "./signin-Login/SignupNavbar"

const Taxi = () => {
  return (
    <Container  maxW='container.4xl'>
        <Accordion allowToggle bg="white" color={"black"} w="5xl">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
           <InfoIcon mx='2px' mr={"10px"} />  <b > Protecting you during COVID-19 </b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Your safety matters. From July 2020, we’re asking all customers to wear a face covering when travelling with us. If you don’t wear a face covering, your driver may not be able to start your journey. Where Coronavirus may affect your plans, here’s what you need to know about booking with us at this time. <br />
    <Links href='https://chakra-ui.com' isExternal color={"blue"} fontWeight="700">
  Read More 
</Links>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  {/* <div style={{background:"white"}} width="5510vw"> */}
  <Box textAlign={"center"}  h={"250px"} color={"white"} marginLeft={"-346px"} w={"1509px"}>

<Flex bg={"rgb(245,245,245)"} direction={"column"}  >
<Heading as='h3' size='md'>
  Book your airport taxi
  </Heading>
  <Text>  
  Easy airport transfers to and from your accommodation
  </Text>
  <Image textAlign={'center'}  w='900px' h="120px" marginLeft={"285px"}  src='https://i.ibb.co/Y3Z8xB3/image-12.png' alt='Dan Abramov' />
</Flex>
</Box>
  {/* </div> */}
<Box  >
  <Image  w='3500px' h="550px"  m="0px 10px" src='https://i.ibb.co/WfjXcJ7/image-13.png' alt='Dan Abramov' />
</Box>

<VStack pt={"8"}>

  <Box textAlign={"center"} h={"400px"} color={"white"} margin={"auto"}  w={"958px"}>

  
  <Tabs bg="white" color="black">
  <TabList color="blue" marginLeft={"28px"}>
    <Tab border={"1px solid blue"}>1-3 passenger</Tab>
    <Tab border={"1px solid blue"}>4-7 passenger</Tab>
    <Tab border={"1px solid blue"}>All Taxis</Tab>
  </TabList>

  <TabPanels>

    <TabPanel>

  <Image  w={"2588px"} h="350px" m="0px 10px" src='https://i.ibb.co/WvPxxzK/image-14.png' alt='Dan Abramov' />
    </TabPanel>
    <TabPanel>
  <Image  w='1500px' h="300px" m="0px 10px" src='https://i.ibb.co/gykT7qV/image-15.png' alt='Dan Abramov' />
    </TabPanel>
    <TabPanel>
  <Image  w='1500px' h="500px" m="0px 10px" src='https://i.ibb.co/1GxM3vx/image-16.png' alt='Dan Abramov' />
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
<Flex h="auto" >
  <Box w="250px" h="auto" bg="blue.50" marginLeft={"160px"}> <Text fontSize={"15px"} marginLeft={"10px"}>Learn more about our airport taxi service
See more FAQs on our help page</Text></Box>
 
  <Accordion w="700px" defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"15px"}>
        What happens if my flight is early or delayed?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Our Meet & Greet service means that if you provide your flight number when you're booking your airport taxi, we'll be able to track your flight and adjust your pick-up time automatically according to your actual arrival time. Once your flight has landed, your driver will wait for 45 minutes. This should give you plenty of time to pass through security, claim your baggage and head through to arrivals to meet your driver
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"15px"}>
        What's included in the price?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Our prices include all taxes, fees, gratuity and toll road charges. If you book an airport pick-up, prices also include Meet & Greet as standard, which means we'll track your flight and wait for 45 minutes from the time your flight arrives. If you book a return taxi to the airport – or any other non-airport pick-up – your driver will wait for 15 minutes after the scheduled pick-up time. Please note that you may have to pay an additional cost for certain special requests or any amendments you want to make to your journey.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"15px"}>
        Can I cancel my booking?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes. You can always cancel your booking for free up to 24 hours prior to your scheduled pick-up time. Some of our partners allow a shorter window for free cancellation. Check your booking confirmation for more information.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={"15px"}>
        How do I pay?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You pay for your airport taxi when you complete your booking online. This means that everything is confirmed and taken care of in advance so you don't need to worry about any unpleasant surprises or having cash on you when you arrive. Currently, we accept Visa, American Express and Mastercard, as well as most major debit cards. We also accept payment via PayPal.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

</Flex>
</VStack>
<Stack pt={10}>
<Box textAlign={"center"} bgColor={"navy"} h={"200px"} color={"white"} marginLeft={"-500px"}  w={"1668px"}>
<Heading as='h3' size='sm'  marginTop={"25px"}>
Save time, save money!
  </Heading>
  <Text>Sign up and we'll send the best deals to you</Text>
  <Flex w="500px" m="auto">
                <Input type="email" h={"38px"} bgColor={"white"} border={"1px solid black"} placeholder="Your email"/>
                <Button h="38px" w="180px" bg="blue">Submit</Button>
  </Flex>
  <Text>Send me a link to get the FREE Booking.com app!</Text>
</Box>

</Stack>
    </Container>
  )
}

export default Taxi