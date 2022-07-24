import React, { useEffect, useState } from 'react';
import styles from "./HotelPayment.module.css";
import  HotelNavbar  from "./HotelNavbar";
import { AiOutlineCheck } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsAlarm } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { MdOutlineLocalParking } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillLock }  from "react-icons/ai";
import { Spinner, Tooltip } from '@chakra-ui/react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loadFlightData } from '../../Utils/flightOption/selecteFlight';
import BasicUsage from './AfterPayment';
import axios from "axios"

const HotelPaymentPage = () => {

    const userdata = loadFlightData("userdata")
    // console.log("userdata",userdata)

    const [SingleHotel, setSingleHotel] = useState({})


    const navigate = useNavigate();

    const {id} = useParams()

    
    const getData = () => {
        axios.get(`https://bookingcoclone.herokuapp.com/${id}`)
        .then((r) => {
            setSingleHotel(r.data)
        })
        .catch((er) => {
            console.log(er)
        })
    }

    // console.log(SingleHotel)

    useEffect(() => {
        getData();
    },[id])



    
  return (
    <div>
        <HotelNavbar/>
        <div className={styles.mainBody}>

                 {/* Update Info */}
            <div className={styles.UpdateInfo}>
                <div>
                    <div><AiOutlineCheck/></div>
                    <h3>Your selection</h3>
                </div>
                <hr  style={{color: '#000000',backgroundColor: 'gray',borderColor : 'gray',width:"32%" }}/>
                <div>
                   <div><AiOutlineCheck/></div>
                    <h3>Your Details</h3>
                </div>
                <hr style={{color: '#000000',backgroundColor: 'gray',borderColor : 'gray',width:"32%" }}/>
                <div>
                    <div>3</div>
                    <h3>Final step</h3>
                </div>
            </div>

            {/* Two Conataint box */}

            <div className={styles.twoContainerBox}>
                <div>
                <div className={styles.bookingDetails}>
                        <h2>Your booking details</h2>
                        <div>
                            <div className={styles.check_in}>
                                <p>Check-in</p>
                                <div>
                                    <h3>wed 3 Aug 2022</h3>
                                    <p>From 12:00</p>
                                </div>
                            </div>
                            <div className={styles.check_in2}>
                                <p>Check-out</p>
                                <div>
                                    <h3>Thu 4 Aug 2022</h3>
                                    <p>until 11:00</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.totallen}>
                            <p>Total length of stay:<br /><span>{1} Night</span></p>
                        </div>
                        <div className={styles.btnBox}>
                          <p>You Selected <br /> <span>{"Delux Double Room"}</span></p>
                          <button>Change your selection</button>
                        </div>
                    </div>

                    {/* Price box */}

                    <div className={styles.priceBox}>
                        <div>
                            <p>Price <br /><span>(for 2 guests)</span></p>
                            <h3>`₹ {2166.78}`</h3>
                        </div>
                        <div>
                            <p>Excluded charges <br /><span>Goods & services tax</span></p>
                            <h3>₹ 260.01</h3>
                        </div>
                    </div>

                    {/* Price box */}

                    <div className={styles.priceBox2}>
                        <h3>Your payment schedule</h3>
                        <div>
                        <p>Before you stay you'll pay</p>
                        <p>₹ 2,166.78</p>
                        </div>
                    </div>
                    <div className={styles.priceBox2}>
                        <h3>How much will it cost to cancel?</h3>
                        <div>
                        <p>If you cancel, you'll pay</p>
                        <p>₹ 2,166.78</p>
                        </div>
                    </div>

                    <div className={styles.yourRewards}>
                        <h3>Your rewards</h3>
                        <div>
                          <BsCreditCard2Back color='green' size={"30px"}/>
                          <p><span>Earn</span> ₹ 170 Credits</p>
                        </div>
                        <button>See details</button>
                    </div>

                    <div className={styles.limitedOffer}>
                        <BsAlarm size={"25px"} color="crimson"  />
                        <div>
                            <h3>Limited supply in Jaipur for your dates:</h3>
                            <p>1 four-star hotel like this is already unavailable on our site</p>
                        </div>
                    </div>
                </div>


                <div>

                    {/* Hotel card */}

                    <div className={styles.hotelCard}>
                        <div className={styles.imgbox}>
                            <img src={SingleHotel.roomimage} alt="" />
                        </div>
                        <div className={styles.hotelDetails}>
                            <div className={styles.rating}>
                              <h3>Hotel </h3>
                              <div>
                              <AiFillStar color='yellow'/>
                              <AiFillStar color='yellow'/>
                              <AiFillStar color='yellow'/>
                              <AiFillStar color='yellow'/>
                              </div>
                              <div>
                                <BsFillHandThumbsUpFill color='white' />
                                <p>+</p>
                              </div>
                            </div>
                            <h3 className={styles.title}>{SingleHotel.Name}</h3>
                            <p>{SingleHotel.Loaction}</p>
                            <p>{`This property is in a good location. Guests have rated it ${SingleHotel.reviewsratings}!`}</p>
                            <div className={styles.reviews}>
                                <div>{SingleHotel.reviewsratings}</div>
                                <p>{SingleHotel.reviewsfeeds} . <span>{SingleHotel.totalreviews}</span></p>
                            </div>
                            <div className={styles.hotelLabel}>
                                <div>
                                   <BsTruck/>
                                   <p>Airport shuttle</p> 
                                </div>
                                <div>
                                   <MdOutlineLocalParking/>
                                   <p>Free parking</p> 
                                </div>
                                <div>
                                   <BiRestaurant/>
                                   <p>Airport shuttle</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enter Your Address */}

                    <div className={styles.address}>
                        <h1>Enter your address</h1>
                        <div>
                            <p>Almost done! Just fill in the <span style={{color:"red"}}>*</span> required info</p>
                        </div>
                        <div className={styles.Userdetails}>
                            <div>
                                <h3>Country/region <span style={{color:"red"}}>*</span></h3>
                                <select name="Country" id="">
                                    <option value="India">India</option>
                                    <option value="	Afghanistan">Afghanistan</option>
                                    <option value="	Belgium">Belgium</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Germany">Germany</option>
                                    <option value="	Japan">Japan</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="	Yemen">	Yemen</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                                <div>
                                    <p>Please fill in your phone number</p>
                                    <div className={styles.telephone}>
                                        <span><img height={"20px"} width="30px" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="" /></span>
                                        <span>+91</span>
                                        <input type={"tel"}/>
                                    </div>
                                    <p style={{fontSize:"13px",color:"grey"}}>Needed by the property to validate your booking</p>
                                </div>
                            </div>

                            {/* user Information */}
                            <div className={styles.userInfo}>
                                <div>
                                   <p><span><FaRegUserCircle/></span><Link to="#">Change</Link></p>
                                   <p>Name</p>
                                   <span style={{fontSize:"12px",color:"grey",fontWeight:"500"}}>{userdata.name}</span>
                                   <p>Email</p>
                                   <span style={{fontSize:"12px",color:"grey",fontWeight:"500"}}>{userdata.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.InputCheckbox}>
                            <input type="checkbox" />
                            <p>Yes, I'd like free paperless confirmation (recommended)</p>
                        </div>
                        <p className={styles.paratext}>We'll text you a link to download our app</p>
                    </div>
                    

                    {/* input checkbox */}
                    <div className={styles.inputCheckbox2}>
                        <input type="checkbox" />
                        <p>Get access to members-only deals, just like the millions of other email subscribers</p>
                    </div>
                    <p style={{padding:"1rem"}}>Your booking is with Jaipur Hotel New - Heritage Hotel directly and by completing this booking you agree to the <span style={{color:"#2973a9",fontWeight:"600",textDecoration:"underline"}}>booking conditions, general terms,</span> and <span style={{color:"#2973a9",fontWeight:"600",textDecoration:"underline"}}>privacy policy</span>.</p>
                    <div className={styles.btnbox}>
                        {/* <button onClick={handlePayment}>{payment ? <Spinner color='white.500' /> : <BasicUsage/>  }</button> */}
                        <BasicUsage username={userdata.name} hotelData={SingleHotel}/>
                    </div>
                    <div className={styles.tool}>
                    <Tooltip hasArrow bg='black' label="Click the link to see detailed booking Conditions:including Cancellation, prepayment, Teaxes and Extra charges" aria-label='A tooltip'>What are my booking conditions?</Tooltip>
                    </div> 
                </div>    
            </div>
        </div>

        {/*  Footer */}
        <div className={styles.footer}>
            <div>
                <p>About Booking.com </p>
                <p>Customer Service help </p>
                <p>Terms & Conditions </p>
                <p>Privacy & Cookie Statement</p>
            </div>
            <p className={styles.copyright}>Copyright © 1996–2022 Booking.com. All rights reserved.</p>
        </div>
    </div>
  )
}

export default HotelPaymentPage


// <div style={{display:"flex",gap:"10px",alignItems:"center"}}><span><AiFillLock/></span>Complete booking</div>