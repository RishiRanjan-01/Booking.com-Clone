import { Button, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import styles from "../All_Hotel/HotelSeeAvialability.module.css"
import { getALLHOTELS } from "../../Redux/AllHotels/action";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import HotelSearchBox from './HotelSearchBox'
import { BsHeart,BsFillShareFill} from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdOutlineAirportShuttle ,MdSmokeFree,MdRoomService,MdCoffeeMaker,MdLocalBar,MdRoofing} from "react-icons/md";
import { BiSpa } from "react-icons/bi";
import { FaParking } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { GiCoffeeCup,GiModernCity } from "react-icons/gi";


const HotelSeeAvialability = () => {
  
  const { id } = useParams();
  
  const dispatch = useDispatch();
  
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
    <div className={styles.HotelSeeAvialability_Main}>
    <div className={styles.HotelSeeAvialability_Conatiner}>
    <div className={styles.HotelSeeAvialability_SearchBox_ImageGrid_Conatiner}>
    <div className={styles.HotelSeeAvialability_SearchBox_Conatiner}>
     <HotelSearchBox/>   
    </div>
    <div className={styles.HotelSeeAvialability_ImageGrid_Conatiner}>
    <div className={styles.HotelSeeAvialability_ImageGrid_Deatils}>
     <div className={styles.HotelSeeAvialability_ImageGrid_Deatils_Top}>
      <div className={styles.HotelSeeAvialability_ImageGrid_Deatils_Top_left}><p>Travel Sustainable property</p></div>
      <div className={styles.HotelSeeAvialability_ImageGrid_Deatils_Top_right}>
        <div>
        <div><BsHeart/></div>
        <div><BsFillShareFill/></div>
        <div><Button size="sm" borderRadius="none" colorScheme="blue">Reserve</Button></div>
        </div>
      </div>
      </div> 
     <div className={styles.HotelSeeAvialability_ImageGrid_Deatils_Middle}>
      <div><Heading size='md'>{currentHotels?.Name}</Heading></div>
      <div>We Price match</div>
      </div> 
     <div className={styles.HotelSeeAvialability_ImageGrid_Deatils_Bottom}>
      {currentHotels?.Loaction}
      </div> 
      
      </div>    
    <div className={styles.HotelSeeAvialability_ImageGrid_Image}>
      <img src={currentHotels?.roomimage} alt="" />
      </div>    
    </div>
    </div>
    <div className={styles.HotelSeeAvialability_Description_Property_Highlights_Main}>
    <div className={styles.HotelSeeAvialability_Description}>
      <div>You're eligible for a Genius discount at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station! To save at this property, all you have to do is sign in.</div>
      <div>Located in {currentHotels?.Loaction}, 2 km from Jama Masjid, {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station provides accommodation with a restaurant, free private parking, a bar and a terrace. Each accommodation at the 3-star hotel has city views and free WiFi. The accommodation offers a 24-hour front desk, room service and currency exchange for guests.</div>
      <div>At the hotel, each room has a desk. Guest rooms at {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station are equipped with a seating area and a flat-screen TV with satellite channels.</div>
      <div>Continental and à la carte breakfast options are available daily at the accommodation.</div>
      <div>There is a tour desk and car rentals are available, while the business centre has a fax machine and photocopier and an ATM machine.</div>
      <div>Jantar Mantar is 2 km from {currentHotels?.Name}- {currentHotels?.Loaction} Railway Station, while Gurudwara Bangla Sahib is 2.1 km away. The nearest airport is {currentHotels?.Loaction} International, 15 km from the hotel, and the property offers a paid airport shuttle service.</div>
      <div>Couples particularly like the location — they rated it ({currentHotels?.reviewsratings}) for a two-person trip.</div>
      <div><Heading size="sm">{currentHotels?.Name}- {currentHotels?.Loaction} Railway Station has been welcoming Booking.com guests since 14 Jul 2021.</Heading></div>
      <div>Distance in property description is calculated using © OpenStreetMap</div>
      
      <div className={styles.HotelSeeAvialability_Description_Most_popular_category}>
      <div><Heading size="sm">Most popular facilities</Heading></div>
      <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top}>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><MdOutlineAirportShuttle></MdOutlineAirportShuttle></div>
          <div>Airport shuttle</div>
        </div>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><MdSmokeFree></MdSmokeFree></div>
          <div>Non-smoking rooms</div>
        </div>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><BiSpa></BiSpa></div>
          <div>Spa and wellness centre</div>
        </div>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><MdRoomService></MdRoomService></div>
          <div>Room service</div>
        </div>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><FaParking></FaParking></div>
          <div>Free parking</div>
        </div>
        
      </div>
      <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top} >
      <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><IoIosRestaurant></IoIosRestaurant></div>
          <div>Restaurant</div>
        </div>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><MdCoffeeMaker></MdCoffeeMaker></div>
          <div>Tea/coffee maker in all rooms</div>
        </div>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><MdLocalBar></MdLocalBar></div>
          <div>Bar</div>
        </div>
        <div className={styles.HotelSeeAvialability_Description_Most_popular_category_content_top_content}>
          <div><GiCoffeeCup></GiCoffeeCup></div>
          <div>Superb breakfast</div>
        </div>
      </div>
      <div className={styles.HotelSeeAvialability_Property_Highlights_Room_with_content}>
      <div><Heading size="xs">ATM and Currency Exchange:</Heading> </div>
      <div>Need cash? There's an ATM machine and a currency exchange service at this property.</div>
      </div>
      </div>
    </div>
    <div className={styles.HotelSeeAvialability_Property_Highlights}>
    <div className={styles.HotelSeeAvialability_Property_Highlights_content}>
    <div>
    <div><Heading size="sm">Property highlights</Heading></div>
    <div><Heading size="sm">Perfect for a 1-night stay!</Heading></div>
    <div className={styles.HotelSeeAvialability_Property_Highlights_location}>
      <div><ImLocation/></div>
      <div>Top location: Highly rated by recent guests ({currentHotels?.reviewsratings})</div>
    </div>
    <div><Heading size="sm">Breakfast info</Heading></div>
    <div>Continental, Vegetarian</div>
    <div><Heading size="sm">Rooms with:</Heading></div>
    <div className={styles.HotelSeeAvialability_Property_Highlights_Room_with_content}>
      <div><MdRoofing></MdRoofing></div>
      <div>Terrace</div>
    </div>
    <div className={styles.HotelSeeAvialability_Property_Highlights_Room_with_content}>
      <div><GiModernCity></GiModernCity></div>
      <div>City view</div>
    </div>
    <div className={styles.HotelSeeAvialability_Property_Highlights_Room_with_content}>
      <div> <FaParking></FaParking></div>
    
      <div>Free private parking available at the hotel</div>
    </div>
    </div>
    <div><Button colorScheme="blue" borderRadius="none" width="100%">Reserve</Button></div>
    </div>
    </div>
    </div>
    <hr></hr>
    <div className={styles.HotelSeeAvialability_Availability_Main}>
    <div><h1>Availability</h1></div>
    <div className={styles.HotelSeeAvialability_Availability_Change_Search}>

    </div>
    <div className={styles.HotelSeeAvialability_Availability_Form}>
    <div className={styles.HotelSeeAvialability_Availability_Form_Top_Navbar}>
      <div className={styles.HotelSeeAvialability_Availability_Form_Top_Navbar_content}>
      <div>Room type</div>
      <div>Sleeps</div>
      <div>Today's price</div>
      <div>Your choices</div>
      <div>Select rooms</div>
      </div>
      
      </div>    
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Container}>
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room}>
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_roomtype}></div> 
     
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms}>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_Top}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_double_room_sleeps_select_rooms_bottom}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> 
      
      
      
      </div>  
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Superior_double_room}>
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Superior_double_room_left}></div> 
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Superior_double_room_right}>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Superior_double_room_right_Top}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Superior_double_room_right_Middle}>
      <div></div>
        <div></div>
        <div></div>
        <div></div> 
      </div>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Superior_double_room_right_Bottom}>
      <div></div>
        <div></div>
        <div></div>
        <div></div> 
      </div>
      
      
      
      </div> 
      
      
    </div>  
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Family_room}>
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Family_room_left}></div> 
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Family_room_right}>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Family_room_right_Top}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Family_room_right_Middle}>
      <div></div>
        <div></div>
        <div></div>
        <div></div> 
      </div>
      <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Family_right_Bottom}>
      <div></div>
        <div></div>
        <div></div>
        <div></div> 
      </div>
      
      
      
      </div> 
      
      
      </div>  
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Triple_room}>
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Triple_room_left}></div>  
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Triple_room_right}>
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Triple_room_right_Top}>
     <div></div> 
     <div></div> 
     <div></div> 
     <div></div> 
      
      </div> 
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Delux_Triple_room_right_Bottom}>
     <div></div> 
     <div></div> 
     <div></div> 
     <div></div>
      
      
      </div> 
      
      </div>  
    </div>  
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Family_Suite_room}>
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Family_Suite_room_left}></div>  
    <div className={styles.HotelSeeAvialability_Availability_Form_Data_Family_Suite_room_right}>
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Family_Suite_room_right_Top}>
     <div></div> 
     <div></div> 
     <div></div> 
     <div></div> 
      
      </div> 
     <div className={styles.HotelSeeAvialability_Availability_Form_Data_Family_Suite_room_right_Bottom}>
     <div></div> 
     <div></div> 
     <div></div> 
     <div></div>
      
      
      </div> 
      
      </div>   
      
      
      </div>  
      
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Form_Will_Reserve}></div>        
    </div>    
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Form_below_banner}>
    <div></div>  
    <div></div>  
    <div></div>  
    <div></div>  
    <div></div>  
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Banner_Below_FourReasons_Choose}></div>
    <div className={styles.HotelSeeAvialability_Availability_Guest_Reviews_Main}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Guest_loved_the_most_Main}>
    <div></div>  
    <div>Read all reviews</div>  
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Property_questions_and_answers}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Facilities_At_Hotels}>
    <div>
      <div></div>
      <div></div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_Facilities_At_Hotels_most_popular}></div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_House_Rules}>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_The_Fine_Print}>
      <div>
      <div></div>
      <div></div>
      </div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_FAQs}>
      <div></div>
      <div></div>
    </div>
    <div className={styles.HotelSeeAvialability_Availability_best_place}></div>
    </div>
    </div>
  )
}

export default HotelSeeAvialability