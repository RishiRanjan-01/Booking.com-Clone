import React, { useState } from 'react'
import styles from "./FlightSearch.module.css"
import { ChevronUpIcon } from '@chakra-ui/icons'
import SearchInputRound from './SearchInputRound'
import SearchInputone from './SearchInputone'
import SearchInputmulty from './SearchInputmulty'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { AdultDecrementCount, AdultIncrementCount, ChildDecrementCount, ChildIncrementCount } from '../../Redux/PassengerCountReducer/action'
import { Button, ButtonGroup } from '@chakra-ui/react';
import OutsideClickHandler from 'react-outside-click-handler';


const FlightSearch = () => {

    const adultcount = useSelector((store) => store.passenger.AdultCount)
    const childcount = useSelector((store) => store.passenger.childCount)

    const passengerCount = adultcount + childcount
    const dispatch = useDispatch()

    const [radiovalue, setRadioValue] = useState("round");
    const [hidden, setHidden] = useState(false);

    const handleChange = (e) => {
        // console.log(e.target.value);

        setRadioValue(e.target.value);
    }

    console.log(radiovalue);

    const handleAdultincre = () => {
        if (passengerCount > 8) {
            return;
        }
        if (adultcount < 9) {
            dispatch(AdultIncrementCount(1))
        }

    }

    const handleAdultdecre = () => {
        if (adultcount > 1) {
            dispatch(AdultDecrementCount(1))
        }

    }
    const handleChildincre = () => {
        if (passengerCount > 8) {
            return;
        }
        dispatch(ChildIncrementCount(1));
    }
    const handleChilddecre = () => {
        if (childcount > 0) {
            dispatch(ChildDecrementCount(1))
        }

    }

    console.log("adult" + adultcount)
    console.log("child" + childcount)
    return (
        <div>
            <div className={styles.fligthhome_topradio_button}>
                <div>
                    <span><input defaultChecked type="radio" name="radio" onChange={handleChange} value="round" /></span><span className={styles.way_lable_spantag}>Round-trip</span>
                </div>
                <div>
                    <span><input type="radio" name="radio" value="one" onChange={handleChange} /></span><span className={styles.way_lable_spantag}>One-way</span>
                </div>
                <div>
                    <span><input type="radio" name="radio" value="multy" onChange={handleChange} /></span><span className={styles.way_lable_spantag}>Multy-city</span>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Economy</option>
                        <option value="">Premium-economy</option>
                        <option value="">Business</option>
                        <option value="">First-class</option>
                    </select>
                </div>

                <div className={styles.travelercount_text} onClick={() => setHidden(!hidden)}>
                    <div>{passengerCount} {childcount > 0 ? "travelers" : "adults"}</div>
                    <div><ChevronUpIcon /></div>

                </div>

            </div>
            {hidden && (
                <OutsideClickHandler onOutsideClick={() => setHidden(false)}>
                    <div className={styles.travelercard}>
                        <div className={styles.adultchilddiv}>
                            <div>
                                <h3>Adult</h3>
                                <p>Age 18+</p>
                            </div>
                            <div className={styles.passengercountbtn}>

                                <div><Button colorScheme="blue" size="xs" onClick={handleAdultdecre} >-</Button></div>
                                <div>{adultcount}</div>
                                <div><Button colorScheme="blue" size="xs" onClick={handleAdultincre} >+</Button></div>
                            </div>
                        </div>
                        <div className={styles.adultchilddiv}>
                            <div>
                                <h3>Children</h3>
                                <p>Age 0-17</p>
                            </div>
                            <div className={styles.passengercountbtn}>

                                <div><Button colorScheme="blue" size="xs" onClick={handleChilddecre} >-</Button></div>
                                <div>{childcount}</div>
                                <div><Button colorScheme="blue" size="xs" onClick={handleChildincre} >+</Button></div>
                            </div>
                        </div>
                        <div className={styles.passenger_count_donestatus_div}>
                            <div>{passengerCount} {childcount > 0 ? "travelers" : "adults"}</div>
                            <div><Button colorScheme="blue" size="lg" width="180px" onClick={() => setHidden(false)}>Done</Button></div>
                        </div>
                    </div>
                </OutsideClickHandler>
            )}


            {radiovalue === "one" ? <SearchInputone /> : radiovalue === "multy" ? <SearchInputmulty /> : <SearchInputRound />}




        </div>
    )
}

export default FlightSearch