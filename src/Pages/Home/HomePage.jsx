import { InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import SearchBar from "../../Components/SearchBar";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.searchbarContainer}>
        <div className={styles.textContainer}>
          <h1>Find your next stay</h1>
          <p>Find exclusive Genius rewards in every corner of the world!</p>
        </div>
        <div className={styles.SearchbarArea}>
          <SearchBar />
        </div>
        <div className={styles.checkboxDiv}>
          <input type="checkbox" value="" />
          <p>I'm travelling for work</p>
        </div>
      </div>

      {/* Main Body Start  */}

      <div className={styles.mainBody}>
        <div className={styles.coronaInstruction}>
          <div>
            <div>
              <InfoIcon color={"#ae6c3b"} />
            </div>
          </div>
          <p>
            Get the advice you need. Check the latest COVID-19 restrictions
            before you travel. <Link to={"#"}>Learn more</Link>
          </p>
        </div>

        {/* Offer Section */}

        <div className={styles.OfferSection}>
          <div>
            <h1>Offers</h1>
            <p>Promotions, deals and special offers for you</p>
          </div>
          <div className={styles.offerImageBox}>
            <div>
              <img src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg" alt="Offers" />
            </div>
            <div>
              <h3>Save 15% or more</h3>
              <p>Plan your dream trip with a Getaway Deal</p>
              <button>Explore deals</button>
            </div>
          </div>
        </div>

        {/* Explore India */}
        <div className={styles.exploreIndiaSection}>
          <div>
             <h1>Explore India</h1>
            <p>These popular destinations have a lot to offer</p>
          </div>
          <div className={styles.ExploreCarroselImage}>

          </div>
        </div>

        {/* Different Places */}

        <div className={styles.placesImage}>
          <div className={styles.placesImageTop}>
            <div> 
              <h1 style={{display:"flex",gap:"7px",alignItems:"center"}}>New Delhi <span><img height="20px" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="" /></span></h1> 
              <p>2,916 properties</p>         
            </div>
            <div>
            <div> 
              <h1 style={{display:"flex",gap:"7px",alignItems:"center"}}>Mumbai <span><img height="20px" width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48eIakj5ZMzaGoBhogNTMwp9PVFUrm_3PZIRjTfGsitiLbAStYXP4N83elrrxD6Bh2U8&usqp=CAU" alt="" /></span></h1> 
              <p>2,916 properties</p>         
            </div>
            </div>
          </div>
          <div className={styles.placesImageBottom}>
            <div>
              <h1 style={{display:"flex",gap:"7px",alignItems:"center"}}>Kolkata <span><img height="20px" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="" /></span></h1> 
              <p>2,487 properties</p>  
            </div>
            <div>
              <h1 style={{display:"flex",gap:"7px",alignItems:"center"}}>Chennai <span><img height="20px" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="" /></span></h1> 
              <p>3,547 properties</p>  
            </div>
            <div>
               <h1 style={{display:"flex",gap:"7px",alignItems:"center"}}>Banglore <span><img height="20px" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="" /></span></h1> 
              <p>1,554 properties</p>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
