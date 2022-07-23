import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Europe from './Europe'
import Asia from './Asia'
import NorthAmerica from './NorthAmerica'
import Oceania from './Oceania'
import Africa from './Africa'
const Flywordwidetab = () => {
  return (
    <div>
     <Tabs style={{width:"1080px" ,margin:" 0 0 0 160px"}}>
  <TabList>
    <Tab>Europe</Tab>
    <Tab>Asia</Tab>
    <Tab>North America</Tab>
    <Tab>Africa</Tab>
    <Tab>Oceania</Tab>
    
  </TabList>
  <div>

  </div>
  <TabPanels>
    <TabPanel>
      <div>
     <Europe/>
      </div>
    </TabPanel>
    <TabPanel>
      <div>
    <Asia/>
      </div>
    </TabPanel>
    <TabPanel>
      <div>
   <NorthAmerica/>
      </div>
    </TabPanel>
    <TabPanel>
      <div>
    <Africa/>
      </div>
    </TabPanel>
    <TabPanel>
      <div>
   <Oceania/>
      </div>
    </TabPanel>
    
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Flywordwidetab