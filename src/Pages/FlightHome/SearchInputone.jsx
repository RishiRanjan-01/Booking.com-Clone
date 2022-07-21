import React from 'react'

import { Input,Stack,InputLeftElement,InputGroup, } from '@chakra-ui/react'
import {MdOutlineFlightTakeoff} from "react-icons/md"
import {FcCalendar} from "react-icons/fc"
import { Button } from '@chakra-ui/react'
import styles from "./SearchInputRound.module.css"
import {CgArrowsExchange} from "react-icons/cg"

const SearchInputone = () => {
  return (
    <div>
        <div>
        <div className={styles.searchinput_round_container}>
            <div className={styles.searchinputchilddiv}>
            <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<MdOutlineFlightTakeoff color='gray.300' />}
    />
    <Input type='text' placeholder='Where from ?' style={{width:"300px" ,backgroundColor:"white"}} />
  </InputGroup>

 
</Stack>
            </div>
            <button style={{backgroundColor:"white" ,borderRadius:"100%"}}><CgArrowsExchange/></button>
            <div className={styles.searchinputchilddiv}>
            <Input placeholder='Where to ?'  style={{width:"300px" ,backgroundColor:"white"}}/>
            </div>
            <div className={styles.searchinputchilddiv}>
            <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
    //   children={<FcCalendar color='gray.300' />}
    />
    <Input type='date' placeholder='Phone number' style={{width:"300px" ,backgroundColor:"white"}} />
  </InputGroup>

 
</Stack>
            </div>
            
            <div className={styles.searchinputchilddiv}>
                <Button colorScheme="blue" style={{width:"150pxpx"}}>Search</Button>
            </div>
        </div>
        <div style={{padding:"20px 0 0  160px"}}>
            <span><input type="checkbox" /></span> <span>Directs flight only</span>
        </div>
    </div>
    </div>
  )
}

export default SearchInputone