import React from 'react'

import { Input,Stack,InputLeftElement,InputGroup, } from '@chakra-ui/react'
import {MdOutlineFlightTakeoff} from "react-icons/md"
import {FcCalendar} from "react-icons/fc"
import { Button } from '@chakra-ui/react'
import {CgArrowsExchange} from "react-icons/cg"
import styles from "./SearchInputmulty.module.css"

const SearchInputmulty = () => {
  return (
    <div>
        <div className={styles.multisearchinputcontainer}>
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
    <Input type='text' placeholder='Where from ?' style={{width:"315px" ,backgroundColor:"white"}} />
  </InputGroup>

 
</Stack>
            </div>
            <button style={{backgroundColor:"white" ,borderRadius:"100%"}}><CgArrowsExchange/></button>
            <div className={styles.searchinputchilddiv}>
            <Input placeholder='Where to ?'  style={{width:"315px" ,backgroundColor:"white"}}/>
            </div>
            <div className={styles.searchinputchilddiv}>
            <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
    //   children={<FcCalendar color='gray.300' />}
    />
    <Input type='date' style={{width:"315px" ,backgroundColor:"white"}} />
  </InputGroup>

 
</Stack>
            </div>
            
           
        </div>
            </div>
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
    <Input type='text' placeholder='Where from ?' style={{width:"315px" ,backgroundColor:"white"}} />
  </InputGroup>

 
</Stack>
            </div>
            <button style={{backgroundColor:"white" ,borderRadius:"100%"}}><CgArrowsExchange/></button>
            <div className={styles.searchinputchilddiv}>
            <Input placeholder='Where to ?'  style={{width:"315px" ,backgroundColor:"white"}}/>
            </div>
            <div className={styles.searchinputchilddiv}>
            <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
    //   children={<FcCalendar color='gray.300' />}
    />
    <Input type='date'  style={{width:"315px" ,backgroundColor:"white"}} />
  </InputGroup>

 
</Stack>
            </div>
            
           
        </div>
            </div>
        </div>
    </div>
    </div>
    <p style={{color:"blue", padding:"5px 0 0 160px"}}>Add Flight</p>
    <div className={styles.searchinputchilddiv}>
                <Button colorScheme="blue" style={{width:"400px", margin:"0px 0 0 680px"}}>Search</Button>
            </div>
    </div>
  )
}

export default SearchInputmulty