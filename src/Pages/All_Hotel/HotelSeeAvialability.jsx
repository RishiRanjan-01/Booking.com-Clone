import { Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../All_Hotel/HotelSeeAvialability.module.css";
import { getALLHOTELS } from "../../Redux/AllHotels/action";
import { useParams } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import HotelSearchBox from "./HotelSearchBox";
import { BsHeart, BsFillShareFill,BsFillPersonFill } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { ImLocation } from "react-icons/im";
import {
  MdOutlineAirportShuttle,
  MdSmokeFree,
  MdRoomService,
  MdCoffeeMaker,
  MdLocalBar,
  MdRoofing,
} from "react-icons/md";
import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { BiSpa } from "react-icons/bi";
import { FaParking } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoIosRestaurant, IoIosBed } from "react-icons/io";
import { GiCoffeeCup, GiModernCity, GiPathDistance } from "react-icons/gi";
import HomePageFotter from "../../Components/HomePageFotter";
import Navbar from "../../Components/Navbar";


const HotelSeeAvialability = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handlenavigate = () => {
    navigate(`/allhotels/price/${id}/Hotel-Checkout`)
  }

  const Hotels = useSelector((state) => state.hotels.allHotels);

  const [currentHotels, setCurrentHotels] = useState({});

  useEffect(() => {
    if (Hotels?.length === 0) {
      dispatch(getALLHOTELS());
    }
  }, [Hotels?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temphotel = Hotels?.find((hotel) => hotel.id === Number(id));
      temphotel && setCurrentHotels(temphotel);
    }
  }, [Hotels, id]);

  return (
    <>
    <Navbar/>
    <div className={styles.HotelSeeAvialability_Main}>
      <div className={styles.HotelSeeAvialability_Conatiner}>
        <div
          className={styles.HotelSeeAvialability_SearchBox_ImageGrid_Conatiner}
        >
          <div className={styles.HotelSeeAvialability_SearchBox_Conatiner}>
            <HotelSearchBox />
          </div>
          <div className={styles.HotelSeeAvialability_ImageGrid_Conatiner}>
            <div className={styles.HotelSeeAvialability_ImageGrid_Deatils}>
              <div
                className={styles.HotelSeeAvialability_ImageGrid_Deatils_Top}
              >
                <div
                  className={
                    styles.HotelSeeAvialability_ImageGrid_Deatils_Top_left
                  }
                >
                  <p>Travel Sustainable property</p>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_ImageGrid_Deatils_Top_right
                  }
                >
                  <div>
                    <div>
                      <BsHeart />
                    </div>
                    <div>
                      <BsFillShareFill />
                    </div>
                    <div>
                      <Button size="sm" borderRadius="none" colorScheme="blue" onClick={handlenavigate}>
                        Reserve
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.HotelSeeAvialability_ImageGrid_Deatils_Middle}
              >
                <div>
                  <Heading size="md">{currentHotels?.Name}</Heading>
                </div>
                <div> </div>
              </div>
              <div
                className={styles.HotelSeeAvialability_ImageGrid_Deatils_Bottom}
              >
                {currentHotels?.Loaction}
              </div>
            </div>
            <div className={styles.HotelSeeAvialability_ImageGrid_Image}>
              <img src={currentHotels?.roomimage} alt="" width="100%" />
            </div>
          </div>
        </div>
        <div
          className={
            styles.HotelSeeAvialability_Description_Property_Highlights_Main
          }
        >
          <div className={styles.HotelSeeAvialability_Description}>
            <div>
              You're eligible for a Genius discount at {currentHotels?.Name}-{" "}
              {currentHotels?.Loaction} Railway Station! To save at this
              property, all you have to do is sign in.
            </div>
            <div>
              Located in {currentHotels?.Loaction}, 2 km from Jama Masjid,{" "}
              {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station
              provides accommodation with a restaurant, free private parking, a
              bar and a terrace. Each accommodation at the 3-star hotel has city
              views and free WiFi. The accommodation offers a 24-hour front
              desk, room service and currency exchange for guests.
            </div>
            <div>
              At the hotel, each room has a desk. Guest rooms at{" "}
              {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station
              are equipped with a seating area and a flat-screen TV with
              satellite channels.
            </div>
            <div>
              Continental and à la carte breakfast options are available daily
              at the accommodation.
            </div>
            <div>
              There is a tour desk and car rentals are available, while the
              business centre has a fax machine and photocopier and an ATM
              machine.
            </div>
            <div>
              Jantar Mantar is 2 km from {currentHotels?.Name}-{" "}
              {currentHotels?.Loaction} Railway Station, while Gurudwara Bangla
              Sahib is 2.1 km away. The nearest airport is{" "}
              {currentHotels?.Loaction} International, 15 km from the hotel, and
              the property offers a paid airport shuttle service.
            </div>
            <div>
              Couples particularly like the location — they rated it (
              {currentHotels?.reviewsratings}) for a two-person trip.
            </div>
            <div>
              <Heading size="xs">
                {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station
                has been welcoming Booking.com guests since 14 Jul 2021.
              </Heading>
            </div>
            <div>
              Distance in property description is calculated using ©
              OpenStreetMap
            </div>

            <div
              className={
                styles.HotelSeeAvialability_Description_Most_popular_category
              }
            >
              <div>
                <Heading size="sm">Most popular facilities</Heading>
              </div>
              <div
                className={
                  styles.HotelSeeAvialability_Description_Most_popular_category_content_top
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <MdOutlineAirportShuttle></MdOutlineAirportShuttle>
                  </div>
                  <div>Airport shuttle</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <MdSmokeFree></MdSmokeFree>
                  </div>
                  <div>Non-smoking rooms</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <BiSpa></BiSpa>
                  </div>
                  <div>Spa and wellness centre</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <MdRoomService></MdRoomService>
                  </div>
                  <div>Room service</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <FaParking></FaParking>
                  </div>
                  <div>Free parking</div>
                </div>
              </div>
              <div
                className={
                  styles.HotelSeeAvialability_Description_Most_popular_category_content_top
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <IoIosRestaurant></IoIosRestaurant>
                  </div>
                  <div>Restaurant</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <MdCoffeeMaker></MdCoffeeMaker>
                  </div>
                  <div>Tea/coffee maker in all rooms</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <MdLocalBar></MdLocalBar>
                  </div>
                  <div>Bar</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content
                  }
                >
                  <div>
                    <GiCoffeeCup></GiCoffeeCup>
                  </div>
                  <div>Superb breakfast</div>
                </div>
              </div>
              <div
                className={
                  styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                }
              >
                <div>
                  <Heading size="xs">ATM and Currency Exchange:</Heading>{" "}
                </div>
                <div>
                  Need cash? There's an ATM machine and a currency exchange
                  service at this property.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.HotelSeeAvialability_Property_Highlights}>
            <div
              className={
                styles.HotelSeeAvialability_Property_Highlights_content
              }
            >
              <div>
                <div>
                  <Heading size="sm">Property highlights</Heading>
                </div>
                <div>
                  <Heading size="sm">Perfect for a 1-night stay!</Heading>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Property_Highlights_location
                  }
                >
                  <div>
                    <ImLocation />
                  </div>
                  <div>
                    Top location: Highly rated by recent guests (
                    {currentHotels?.reviewsratings})
                  </div>
                </div>
                <div>
                  <Heading size="sm">Breakfast info</Heading>
                </div>
                <div>Continental, Vegetarian</div>
                <div>
                  <Heading size="sm">Rooms with:</Heading>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }
                >
                  <div>
                    <MdRoofing></MdRoofing>
                  </div>
                  <div>Terrace</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }
                >
                  <div>
                    <GiModernCity></GiModernCity>
                  </div>
                  <div>City view</div>
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }
                >
                  <div>
                    {" "}
                    <FaParking></FaParking>
                  </div>

                  <div>Free private parking available at the hotel</div>
                </div>
              </div>
              <div>
                <Button colorScheme="blue" borderRadius="none" width="100%" onClick={handlenavigate}>
                  Reserve
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.HotelSeeAvialability_Availability_Main}>
          <div>
            <Heading size="sm" padding="5px">
              Availability
            </Heading>
          </div>
          <div
            className={styles.HotelSeeAvialability_Availability_Change_Search}
          ></div>
          <div className={styles.HotelSeeAvialability_Availability_Form}>
            <div
              className={
                styles.HotelSeeAvialability_Availability_Form_Top_Navbar
              }
            >
              <div
                className={
                  styles.HotelSeeAvialability_Availability_Form_Top_Navbar_content
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Top_Navbar_content_roomtype
                  }
                >
                  Room type
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Top_Navbar_content_sleep
                  }
                >
                  Sleeps
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Top_Navbar_content_Today_price
                  }
                >
                  Today's price
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Top_Navbar_content_Your_Choice
                  }
                >
                  Your choices
                </div>
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Top_Navbar_content_Your_Select_rooms
                  }
                >
                  Select rooms
                </div>
              </div>
            </div>
            <div className={styles.HotelSeeAvialability_Availability_Form_Data_Container_reserve}>
            <div
              className={
                styles.HotelSeeAvialability_Availability_Form_Data_Container
              }
            >
              <div
                className={
                  styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top
                    }
                  >
                    <div>
                      <Heading size="sm" color="blue.700">
                        Delux Double Room
                      </Heading>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div>1</div>
                      <div>double bed</div>
                      <div>
                        <IoIosBed></IoIosBed>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <GiPathDistance></GiPathDistance>
                        </div>
                        <div>15mins</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div><GiModernCity></GiModernCity></div>
                        <div>City View</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <CgScreen></CgScreen>
                        </div>
                        <div>Flat-screen TV</div>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div><MdRoofing></MdRoofing></div>
                      <div>Terrace</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_bottom
                    }
                  >
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Freetoiletries </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Toilet</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Sofa</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Bath</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Towels</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Linen</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tile</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Desk</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Seating Area</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> TV </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Telephone</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Ironing facilities</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Satellite channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tea maker</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Iron Heating</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Fan</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Alarm clock</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Cable channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Wake-up service</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Alarm clock</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Executive lounge</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining area</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining table</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Elevator</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Hand sanitiser</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_Top
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                      <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_bottom
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
        
                </div>
              </div>
              <div
                className={
                  styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top
                    }
                  >
                    <div>
                      <Heading size="sm" color="blue.700">
                        Superior Double Room
                      </Heading>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div>1</div>
                      <div>double bed</div>
                      <div>
                        <IoIosBed></IoIosBed>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <GiPathDistance></GiPathDistance>
                        </div>
                        <div>15mins</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div><GiModernCity></GiModernCity></div>
                        <div>City View</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <CgScreen></CgScreen>
                        </div>
                        <div>Flat-screen TV</div>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div><MdRoofing></MdRoofing></div>
                      <div>Terrace</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_bottom
                    }
                  >
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Freetoiletries </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Toilet</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Sofa</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Bath</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Towels</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Linen</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tile</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Desk</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Seating Area</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> TV </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Telephone</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Ironing facilities</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Satellite channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tea maker</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Iron Heating</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Fan</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Alarm clock</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Cable channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Wake-up service</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Alarm clock</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Executive lounge</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining area</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining table</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Elevator</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Hand sanitiser</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_Top
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_bottom
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
        
                </div>
              </div><div
                className={
                  styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top
                    }
                  >
                    <div>
                      <Heading size="sm" color="blue.700">
                        Delux Family Room
                      </Heading>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div>1</div>
                      <div>double bed</div>
                      <div>
                        <IoIosBed></IoIosBed>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <GiPathDistance></GiPathDistance>
                        </div>
                        <div>15mins</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div><GiModernCity></GiModernCity></div>
                        <div>City View</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <CgScreen></CgScreen>
                        </div>
                        <div>Flat-screen TV</div>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div><MdRoofing></MdRoofing></div>
                      <div>Terrace</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_bottom
                    }
                  >
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Freetoiletries </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Toilet</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Sofa</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Bath</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Towels</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Linen</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tile</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Desk</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Seating Area</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> TV </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Telephone</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Ironing facilities</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Satellite channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tea maker</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Iron Heating</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Fan</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Alarm clock</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Cable channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Wake-up service</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Alarm clock</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Executive lounge</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining area</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining table</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Elevator</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Hand sanitiser</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_Top
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_bottom
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
        
                </div>
              </div><div
                className={
                  styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top
                    }
                  >
                    <div>
                      <Heading size="sm" color="blue.700">
                        Delux Triple Room
                      </Heading>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div>1</div>
                      <div>double bed</div>
                      <div>
                        <IoIosBed></IoIosBed>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <GiPathDistance></GiPathDistance>
                        </div>
                        <div>15mins</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div><GiModernCity></GiModernCity></div>
                        <div>City View</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <CgScreen></CgScreen>
                        </div>
                        <div>Flat-screen TV</div>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div><MdRoofing></MdRoofing></div>
                      <div>Terrace</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_bottom
                    }
                  >
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Freetoiletries </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Toilet</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Sofa</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Bath</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Towels</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Linen</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tile</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Desk</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Seating Area</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> TV </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Telephone</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Ironing facilities</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Satellite channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tea maker</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Iron Heating</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Fan</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Alarm clock</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Cable channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Wake-up service</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Alarm clock</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Executive lounge</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining area</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining table</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Elevator</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Hand sanitiser</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_Top
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_bottom
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
        
                </div>
              </div><div
                className={
                  styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room
                }
              >
                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top
                    }
                  >
                    <div>
                      <Heading size="sm" color="blue.700">
                        Family Suite
                      </Heading>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div>1</div>
                      <div>double bed</div>
                      <div>
                        <IoIosBed></IoIosBed>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <GiPathDistance></GiPathDistance>
                        </div>
                        <div>15mins</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div><GiModernCity></GiModernCity></div>
                        <div>City View</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div>
                          <CgScreen></CgScreen>
                        </div>
                        <div>Flat-screen TV</div>
                      </div>
                    </div>
                    <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                      <div><MdRoofing></MdRoofing></div>
                      <div>Terrace</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_bottom
                    }
                  >
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Freetoiletries </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Toilet</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Sofa</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Bath</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Towels</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Linen</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tile</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Desk</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Seating Area</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> TV </div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Telephone</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Ironing facilities</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Satellite channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Tea maker</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Iron Heating</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Fan</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div>Alarm clock</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Cable channels</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Wake-up service</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Alarm clock</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Executive lounge</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining area</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Dining table</div>
                      </div>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Elevator</div>
                      </div>
                    </div>
                    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype_Top_data}>
                      <div className={
                    styles.HotelSeeAvialability_Property_Highlights_Room_with_content
                  }>
                        <div className={styles.HotelSeeAvialability_Right_tick}>
                          <TiTick />
                        </div>
                        <div> Hand sanitiser</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms
                  }
                >
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_Top
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
                  <div
                    className={
                      styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_bottom
                    }
                  >
                    <div  className={styles.HotelSeeAvialability_Availability_Form_Data_person_icons}><BsFillPersonFill/><BsFillPersonFill/><BsFillPersonFill/><BsFillPersonFill/></div>
                    <div>
                      <div>Cancel Price</div>
                      <div>{currentHotels?.price}</div>
                      <div>+142 taxes and charges</div>
                      <div><Button size="xs" colorScheme="green" borderRadius="none">Getaway Deals</Button></div>
                    </div>
                    <div>
                      <div>
                        <div></div>
                        <div>Super breakfast Rs 150</div>
                      </div>
                      <div>
                        <div></div>
                        <div>Free cancellation until 18:00</div>
                      </div>
                      <div>
                        <div></div>
                        <div>NO PREPAYMENT NEEDED</div>
                      </div>
                      <div>discount avialable</div>
          
                    </div>
                    <div><select>
                    <option value='0'>1 ({currentHotels?.price})</option>
                      <option value='0'>2 ({currentHotels?.price*2})</option>
                      <option value='0'>3 ({currentHotels?.price*3})</option>
                      <option value='0'>4 ({currentHotels?.price*4})</option>
                      <option value='0'>5 ({currentHotels?.price*5})</option>
                      <option value='0'>6 ({currentHotels?.price*6})</option>
                      <option value='0'>7 ({currentHotels?.price*7})</option>
                      <option value='0'>8 ({currentHotels?.price*8})</option>
                      <option value='0'>9 ({currentHotels?.price*9})</option>
                      </select>
                      </div>
                  </div>
        
                </div>
              </div>
            </div>
            <div
              className={
                styles.HotelSeeAvialability_Availability_Form_Will_Reserve
              }
            >
              <div><Button colorScheme="blue" width="95%" borderRadius="none" onClick={handlenavigate}>I'll reserve</Button></div>
              <div>Confirmation is immediate</div>
              <div>No booking or credit card fees!</div>
              <div>No credit card needed!</div>
            </div>
            </div>
          </div>
        </div>
        <div className={styles.All_Coontent_below_form_data}>
        <div
          className={styles.HotelSeeAvialability_Availability_Form_below_banner}
        >
         <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180610994-b9f3ca76-051e-4f5c-bd41-183aa53807b1.png" alt="" /></div> 
        </div>
        <div
          className={
            styles.HotelSeeAvialability_Availability_Banner_Below_FourReasons_Choose
          }
        >
          <div><Heading>4 reasons to choose {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station</Heading></div>
          <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180611012-10a5a159-9390-4656-8a57-0f950938d078.png" alt="" /></div>
        </div>
        <div
          className={
            styles.HotelSeeAvialability_Availability_Guest_Reviews_Main
          }
        >
          <div className={
            styles.HotelSeeAvialability_Availability_Guest_Reviews_Top
          }>
            <div><Heading>Guest reviews</Heading></div>
            <div><Button colorScheme="blue" borderRadius="none">See availability</Button></div>
          </div>
          <div div className={
            styles.HotelSeeAvialability_Availability_Guest_Reviews_Middle
          }>
            <div><Button size="sm" colorScheme="blue" borderRadius="2px 15px">
                            {currentHotels?.reviewsratings}
                          </Button></div>
            <div>{currentHotels?.reviewsfeeds}</div>
            <div>{currentHotels?.totalreviews}</div>
          </div>
          <div>
            <div><Heading>Categories</Heading></div>
            <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180611223-5b71d8b9-f18b-486a-8334-346686ec6b42.jpg" alt="" /></div>
          </div>
        </div>
        <div
          className={
            styles.HotelSeeAvialability_Availability_Facilities_At_Hotels
          }
        >
          <div className={
            styles.HotelSeeAvialability_Availability_Facilities_At_Hotels_Top
          }>
            <div><Heading>Facilities of {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station</Heading></div>
            <div><Button colorScheme="blue" borderRadius="none">See availability</Button></div>
          </div>
          <div
            className={
              styles.HotelSeeAvialability_Availability_Facilities_At_Hotels_most_popular
            }
          >
            <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180611051-cb7db3ac-cdf8-4830-a77f-cf0b650477b1.png" alt="Most Popular Facilites" /></div>
            <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180611080-583771ca-6d15-4af9-87bb-ca06e56f5b76.png" alt="" /></div>
            <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180613347-15c35737-9b0f-4db3-9279-342ea457b9d7.jpg" alt="" /></div>
            <div className={styles.All_image_screenshot}><img src="" alt="" /></div>
      

          </div>
      
        </div>
        <div className={styles.HotelSeeAvialability_Availability_House_Rules}>
          <div className={styles.HotelSeeAvialability_Availability_House_Rules_top}>
            <div><Heading>House Rules</Heading></div>
            <div><Button colorScheme="blue" borderRadius="none">See availability</Button></div>
          </div>
          <div>{currentHotels?.Name}- {currentHotels?.Loaction} Railway Station takes special requests - add in the next step!</div>
          <div>
            <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180611104-1882a0c4-b54a-4546-9665-b5f1f66503bc.png" alt="" /></div>
            <div className={styles.All_image_screenshot}><img src="https://user-images.githubusercontent.com/91020498/180611108-b5bd32b8-3171-4816-a8d1-57f5757c8a7f.png" alt="" /></div>
          </div>
        </div>
        <div
          className={styles.HotelSeeAvialability_Availability_The_Fine_Print}
        >
          <div><Heading>The Fine Print</Heading></div>
            <div><Button colorScheme="blue" borderRadius="none">See availability</Button></div>
        </div>
        <div className={styles.HotelSeeAvialability_Availability_FAQs}>
          <div className={styles.HotelSeeAvialability_Availability_FAQs_left}><Heading>FAQs about {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station</Heading></div>
          <div className={styles.HotelSeeAvialability_Availability_FAQs_right}>
            <div>
            <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">Is {currentHotels?.Name}-{currentHotels?.Loaction} Railway Station popular with families ?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station is popular with guests booking family stays.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">What type of room can I book at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station ?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Room options at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station include:
    <ul>
      <li>Double</li>
      <li>Triple</li>
      <li>Family</li>
    </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">Does {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station have a resturant on site ? </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station has 1 restaurant:
    <ul>
      <li>GEESON RESTRO & BAR</li>
    </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">How can I get to {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station from the nearest airport ?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    From the nearest airport, you can get to {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station by:
    <ul>
      <li>Airport shuttle (arranged by property) 45min</li>
    </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">What is there to do at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station ?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station offers the following activities / services (charges may apply):
    <ul>
      <li>Spa and wellness centre</li>
      <li>Evening entertainment</li>
      <li>Nightclub/DJ</li>
      <li>Happy hour</li>
      <li>Live music/performance</li>
    </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">How much does it cost to {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station ?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    The prices at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station may vary depending on your stay (e.g. dates you select, hotel's policy etc.). See the prices by entering your dates.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">What kind of breakfast is served at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station ?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Guests staying at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station can enjoy a highly-rated breakfast during their stay (guest review score: {currentHotels?.reviewsratings}).
    <ul>
      <li>Continental</li>
      <li>Vegetarian</li>
      <li>À la carte</li>
    </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">How far is {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station from the centre of {currentHotels?.Loaction}</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station is 1.4 km from the centre of {currentHotels?.Loaction}.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading size="sm">What are the check-in and check-out {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station ? </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Check-in at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station is from 12:00, and check-out is until 11:00.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <HomePageFotter/>
    </>
  );
};

export default HotelSeeAvialability;
