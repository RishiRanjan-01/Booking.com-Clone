import React, { useEffect, useState } from 'react'
import HotelNavbar from './HotelNavbar';
import styles from "./HotelCheckout.module.css"
import { AiOutlineCheck } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsAlarm } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { MdOutlineLocalParking } from "react-icons/md";
import { TbCreditCardOff } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { SiAirtable }  from "react-icons/si"
import { BsChevronRight} from "react-icons/bs";
import { Tooltip } from '@chakra-ui/react';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { saveFlightDate } from '../../Utils/flightOption/selecteFlight';
import axios from "axios"

const HotelCheckout = () => {
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("");
    const [lname, setlname] = useState("");
    const [cemail, setCemail] = useState("");
    const [SingleHotel, setSingleHotel] = useState({})

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {id} = useParams()
    console.log(id);
    
    const getData = () => {
        axios.get(`https://bookingcoclone.herokuapp.com/allHotels/${id}`)
        .then((r) => {
            setSingleHotel(r.data)
        })
        .catch((er) => {
            console.log(er)
        })
    }

    console.log(SingleHotel)

    useEffect(() => {
      getData();
    },[id])

    const handlePageChange = () => {
        
        if(email !== cemail){
            alert("Please match Your Email !")
            
        }
        else if(fname == ""){
            alert("Please Enter Your First Name !")
        }
        else if(lname == ""){
            alert("Please Enter Your Last Name !")
        }
        else if( email == ""){
            alert("Please Enter Your Email !")
        }else{
            const payload = {
                name:`${fname} ${lname}`,
                email:email
            }
            saveFlightDate("userdata",payload)
            navigate(`/allhotels/price/${id}/Hotel-Checkout/Payment`)
        }    
    }


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
                   <div>2</div>
                    <h3>Your Details</h3>
                </div>
                <hr style={{color: '#000000',backgroundColor: 'gray',borderColor : 'gray',width:"32%" }}/>
                <div>
                    <div>3</div>
                    <h3>Final step</h3>
                </div>
            </div>


             {/* Containt Box divided into two parts */}

             <div className={styles.twoContainerBox}>
                <div>
                    {/* Booking Details */}
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
                            <h3>{`₹ ${SingleHotel.price}`}</h3>
                        </div>
                        <div>
                            <p>Excluded charges <br /><span>Goods & services tax</span></p>
                            <h3>{`₹ ${SingleHotel.price}`}</h3>
                        </div>
                    </div>

                    {/* Price box */}

                    <div className={styles.priceBox2}>
                        <h3>Your payment schedule</h3>
                        <div>
                        <p>Before you stay you'll pay</p>
                        <p>{`₹ ${SingleHotel.price}`}</p>
                        </div>
                    </div>
                    <div className={styles.priceBox2}>
                        <h3>How much will it cost to cancel?</h3>
                        <div>
                        <p>If you cancel, you'll pay</p>
                        <p>{`₹ ${SingleHotel.price}`}</p>
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

                {/* hotel details and user information */}

                <div>
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

                    {/* Good To know box */}

                    <div className={styles.goodToKnow}>
                        <h1>Good To Know :</h1>
                        <div>
                          <TbCreditCardOff color='green' size={"30px"}/>
                          <p>No credit card needed!</p>
                        </div>
                    </div>

                    {/* Third  box */}

                    <div className={styles.genius}>
                        <div>
                           <p>Save 10% or more on this option when you sign in with Genius, Booking.com’s loyalty <br /> programme</p>
                           <Link to="#">Sign in</Link>
                           <Link to="#">Register</Link>

                        </div>
                        <div>
                            <img src="https://milesopedia.com/wp-content/uploads/2020/06/genius-booking-logo-e1593011246996.png" alt="" />
                        </div>
                    </div>


                    {/* User Details Fouth box */}


                    <div className={styles.userDetails}>
                        <h1>Enter your details</h1>
                        <div className={styles.userText}>
                            <p>Almost done! Just fill in the <span style={{color:"red"}}>*</span> required info. Hi again <span style={{color:"#2973a9"}}>User</span> Would you like to <span style={{color:"#2973a9"}}>auto-fill your details</span> from last time?</p>
                        </div>
                          <div className={styles.radiobtn}>
                            <h3>Are you travelling for work?</h3>
                            <form action="">
                               <input type="radio" name='userWork' /> 
                               <label htmlFor="">Yes</label>
                               <input type="radio" name='userWork' style={{marginLeft:"0.5rem"}} />
                               <label htmlFor="">No</label>
                            </form>
                        </div>
                        <div className={styles.userData}>
                            <form action="">
                                <div className={styles.username}>
                                  <div>
                                     <p>First name <span style={{color:"red"}}>*</span></p>
                                     <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} required/>
                                  </div>
                                  <div>
                                     <p>Last Name <span style={{color:"red"}}>*</span></p>
                                     <input type="text" value={lname} onChange={(e) => setlname(e.target.value)} required/>
                                  </div>
                                </div>
                                <div className={styles.Inputuser}>
                                  <p>Email Address <span style={{color:"red"}}>*</span></p>
                                  <input type="text" placeholder="Watch out for typo" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                  <p style={{fontSize:"12px",color:"grey"}}>Confirmation email goes to this address</p>
                                </div>
                                <div className={styles.Inputuser}>
                                  <p>Confirm Email address <span style={{color:"red"}}>*</span></p>
                                  <input type="text" value={cemail} onChange={(e) => setCemail(e.target.value)} required/>
                                </div>
                                <div className={styles.UserSelf}>
                                  <h3>Who are you booking for?</h3>
                                  <input type="radio" name='userWork' /> 
                                  <label htmlFor="">I am the main guest</label>
                                  
                                  <input type="radio" name='userWork' style={{marginLeft:"0.5rem"}} />
                                  <label htmlFor="">Booking is for someone else</label>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Add to your stay Section */}

                    <div className={styles.AddStay}>
                        <h1>Add to your stay</h1>
                        <div>
                            <input type="checkbox" />
                            <p>I'm interested in requesting an airport shuttle</p>    
                        </div>
                        <p>We’ll tell your accommodation that you’re interested so they can provide details and costs.</p>
                        <hr  style={{borderColor : 'gray',width:"100%",marginTop:"1.5rem" }}/>
                        <div>
                            <input type="checkbox" />
                            <p>I'm interested in requesting an airport shuttle</p>    
                        </div>
                        <p>We’ll tell your accommodation that you’re interested so they can provide details and costs.</p>
                    </div>

                    {/* Special Request */}
                    <div className={styles.special_request}>
                        <h1>Special requests</h1>
                        <p>Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!</p>
                        <p>Please write your requests in English. <span>(optional)</span></p>
                        <textarea />
                        <div>
                           <input type="checkbox" />
                           <label style={{marginLeft:"0.5rem"}} htmlFor="">I would like free private parking offsite</label>
                        </div>
                    </div>

                    {/* Your arrival time */}
                    <div className={styles.Arrival_time}>
                        <h1>Your arrival time</h1>
                        <div>
                            <BsCheckCircleFill color='green' size={"25px"}/>
                            <p>Your room will be ready for check-in at 12:00</p>
                        </div>
                        <div>
                            <SiAirtable color='green' size={"25px"}/>
                            <p>24-hour front desk – Help whenever you need it!</p>
                        </div>
                        <div className={styles.selectOption}>
                            <p>Add your estimated arrival time <span>(optional)</span></p>
                            <select name="Time" id="">
                            <option value="" disabled>Please Select</option>
                                <option value="">I don't Know</option>
                                <option value="">00:00-01:00</option>
                                <option value="">01:00-02:00</option>
                                <option value="">002:00-03:00</option>
                                <option value="">03:00-04:00</option>
                                <option value="">04:00-05:00</option>
                                <option value="">05:00-06:00</option>
                                <option value="">06:00-07:00</option>
                                <option value="">07:00-08:00</option>
                                <option value="">08:00-09:00</option>
                                <option value="">09:00-10:00</option>
                                <option value="">10:00-11:00</option>
                                <option value="">11:00-12:00</option>
                                <option value="">00:00-01:00</option>
                                <option value="">01:00-02:00</option>
                                <option value="">002:00-03:00</option>
                                <option value="">03:00-04:00</option>
                                <option value="">04:00-05:00</option>
                                <option value="">05:00-06:00</option>
                                <option value="">06:00-07:00</option>
                                <option value="">07:00-08:00</option>
                                <option value="">08:00-09:00</option>
                                <option value="">09:00-10:00</option>
                                <option value="">10:00-11:00</option>
                                <option value="">11:00-12:00</option>
                                <option value="">00:00-01:00</option>
                                <option value="">01:00-02:00</option>
                                <option value="">002:00-03:00</option>
                                <option value="">03:00-04:00</option>
                                <option value="">04:00-05:00</option>
                                <option value="">05:00-06:00</option>
                                <option value="">06:00-07:00</option>
                                <option value="">07:00-08:00</option>
                                <option value="">08:00-09:00</option>
                                <option value="">09:00-10:00</option>
                                <option value="">00:00-01:00 Next Day</option>
                                <option value="">01:00-02:00 Next Day</option>
                            </select>
                        </div>
                    </div>


                    {/* Next Page button */}
                    <div className={styles.nextPage}>
                        <button onClick={handlePageChange}>Next: Final details  <span><BsChevronRight/></span></button>
                    </div>
                    <div className={styles.tool}>
                    <Tooltip hasArrow bg='black' label="Click the link to see detailed booking Conditions:including Cancellation, prepayment, Teaxes and Extra charges" aria-label='A tooltip'>What are my booking conditions?</Tooltip>
                    </div>                  
                </div>
             </div>
        </div>

        {/* footer */}
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

export default HotelCheckout