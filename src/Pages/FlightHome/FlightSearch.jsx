import React, { useState } from 'react'
import styles from "./FlightSearch.module.css"
import {ChevronUpIcon} from '@chakra-ui/icons'
import SearchInputRound from './SearchInputRound'
import SearchInputone from './SearchInputone'
import SearchInputmulty from './SearchInputmulty'
import { useSelector ,useDispatch } from 'react-redux/es/exports'
import { AdultDecrementCount, AdultIncrementCount, ChildDecrementCount, ChildIncrementCount } from '../../Redux/PassengerCountReducer/action'
import { Button, ButtonGroup } from '@chakra-ui/react'


const FlightSearch =()=>{

    const adultcount=useSelector((store)=>store.passenger.AdultCount)
    const childcount=useSelector((store)=>store.passenger.childCount)

    const passengerCount=adultcount+childcount
    const dispatch=useDispatch()

    const [radiovalue,setRadioValue]=useState("round");

    const handleChange=(e)=>{
       // console.log(e.target.value);

       setRadioValue(e.target.value);
    }

    console.log(radiovalue);

    const handleAdultincre=()=>{
        if(passengerCount>8){
            return;
        }
        if(adultcount<9){
            dispatch(AdultIncrementCount(1))
        }
     
    }

    const handleAdultdecre=()=>{
        if(adultcount>1){
            dispatch(AdultDecrementCount(1))
        }
        
    }
    const handleChildincre=()=>{
        if(passengerCount>8){
            return;
        }
        dispatch(ChildIncrementCount(1));
    }
    const handleChilddecre=()=>{
        if(childcount>0){
            dispatch(ChildDecrementCount(1))
        }
       
    }

    console.log( "adult"+ adultcount)
    console.log("child" +childcount)
  return (
    <div>
        <div className={styles.fligthhome_topradio_button}>
            <div>
                <span><input type="radio" name="radio" onChange={handleChange} value="round"/></span><span className={styles.way_lable_spantag}>Round-trip</span>
            </div>
            <div>
                <span><input type="radio" name="radio" value="one" onChange={handleChange}/></span><span className={styles.way_lable_spantag}>One-way</span>
            </div>
            <div>
                <span><input type="radio"  name="radio" value="multy" onChange={handleChange}/></span><span className={styles.way_lable_spantag}>Multy-city</span>
            </div>
            <div>
                <select name="" id="">
                    <option value="">Economy</option>
                    <option value="">Premium-economy</option>
                    <option value="">Business</option>
                    <option value="">First-class</option>
                </select>
            </div>
            <div>
                <span>{passengerCount} {childcount>0 ?"travelers" :"adults"}</span><ChevronUpIcon/><span></span>
            </div>
        </div>
        {/* <SearchInputRound/>
        <SearchInputone/>
        <SearchInputmulty/> */}
        {radiovalue==="one" ? <SearchInputone/> :radiovalue==="multy" ? <SearchInputmulty/> :<SearchInputRound/>}

        <Button onClick={handleAdultincre}  colorScheme='blue'>+</Button>
        <Button onClick={handleAdultdecre}>-</Button>
        <Button onClick={handleChildincre} >+</Button>
        <Button onClick={handleChilddecre}>-</Button>
    </div>
  )
}

export default FlightSearch