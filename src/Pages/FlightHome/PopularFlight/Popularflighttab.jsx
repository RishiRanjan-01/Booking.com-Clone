import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import styles from "./Popularflighttab.module.css"
import PopularflightdomesticCarousal from './PopularflightdomesticCarousal'

const Popularflighttab = () => {
  return (
    <div>
        <Tabs style={{width:"1080px"}}>
  <TabList>
    <Tab>International</Tab>
    <Tab>Domestic</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <div>
        <img src="https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=" alt="" />
        <div className={styles.internationalflight_container}>
            <h1>Nagpur to Dubai</h1>
            <p>Jul 25-August 1.Round Trip</p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div>
        <PopularflightdomesticCarousal/>
      </div>
    </TabPanel>
    
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Popularflighttab