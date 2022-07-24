import { InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePageExploreIndiaSlider from "../../Components/HomePageExploreIndiaSlider";
import HomePageFotter from "../../Components/HomePageFotter";
import HomePageHomeGuestLoveSlider from "../../Components/HomePageHomeGuestLoveSlider";
import HomePageSlider from "../../Components/HomePageSlider";
import Navbar from "../../Components/Navbar";
import SearchBar from "../../Components/SearchBar";
import styles from "./HomePage.module.css";


const HomePage = () => {
  const [region, setRegion] = useState(true);
  const [cities, setCities] = useState(false);
  const [interest, setInterest] = useState(false);

  const navigate = useNavigate()

  const handleRegion = () => {
    setRegion(true);
    setCities(false);
    setInterest(false);
  };

  const handleCities = () => {
    setRegion(false);
    setCities(true);
    setInterest(false);
  };

  const handleInterest = () => {
    setRegion(false);
    setCities(false);
    setInterest(true);
  };

  const handleClick = () => {
    navigate("/allhotels")
  }

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
              <img
                src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg"
                alt="Offers"
              />
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
            {/* <HomePageExploreIndiaSlider/> */}
            <div>
              <img src="https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" alt="" />
              <h3>Jaipur</h3>
              <p>1,558 properties</p>
            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=" alt="" />
              <h3>Udaipur</h3>
              <p>816 properties</p>
            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/city/square250/684674.webp?k=8d21ea7c841f39e95cfffdeafc754aff157c64b8422c5002e2433ba26801324c&o=" alt="" />
              <h3>Jhodpur</h3>
              <p>326 properties</p>
            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" />
              <h3>New Delhi</h3>
              <p>2,913 properties</p>
            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/city/square250/684646.webp?k=5f82ed7ee33843d06b0acf82d19d440f16aa561a107d320bf1ecf8769e373216&o=" alt="" />
              <h3>Jaisalmer</h3>
              <p>400 properties</p>
            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/city/square250/637293.webp?k=5e58ee01e1733b832e2e5b19074226ae6ff3207dd6bb719d0fec416b7af66d5f&o=" alt="" />
              <h3>Pushkar</h3>
              <p>281 properties</p>
            </div>
          </div>
        </div>

        {/* Different Places */}

        <div className={styles.placesImage}>
          <div className={styles.placesImageTop}>
            <div onClick={handleClick}>
              <h1 style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                New Delhi{" "}
                <span>
                  <img
                    height="20px"
                    width="30px"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                    alt=""
                  />
                </span>
              </h1>
              <p>2,915 properties</p>
            </div>
            <div onClick={handleClick}>
            <h1 style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                Mumbai{" "}
                <span>
                  <img
                    height="20px"
                    width="30px"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                    alt=""
                  />
                </span>
              </h1>
              <p>1,651 properties</p>
            </div>
          </div>
          <div className={styles.placesImageBottom} >
            <div onClick={handleClick}>
              <h1 style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                Kolkata{" "}
                <span>
                  <img
                    height="20px"
                    width="30px"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                    alt=""
                  />
                </span>
              </h1>
              <p>2,487 properties</p>
            </div>
            <div onClick={handleClick}>
              <h1 style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                Chennai{" "}
                <span>
                  <img
                    height="20px"
                    width="30px"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                    alt=""
                  />
                </span>
              </h1>
              <p>3,547 properties</p>
            </div>
            <div onClick={handleClick}>
              <h1 style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                Banglore{" "}
                <span>
                  <img
                    height="20px"
                    width="30px"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                    alt=""
                  />
                </span>
              </h1>
              <p>1,554 properties</p>
            </div>
          </div>
        </div>

        {/* Browse by property type */}

        <div className={styles.browseByProperty}>
          <h1>Browse by property type</h1>
         {/* <HomePageSlider/> */}
          <div className={styles.browseCarrosel}>
            <div>
              <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" />
              <h3>Hotels</h3>
              <p>877,251 hotels</p>
            </div>
            <div>
              <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" />
              <h3>Apartment</h3>
              <p>906,009 apartments</p>
            </div>
            <div>
              <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" />
              <h3>Resorts</h3>
              <p>17,978 resorts</p>
            </div>
            <div>
              <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
              <h3>Villas</h3>
              <p>476,432 villas</p>
            </div>
          </div>
        </div>

        {/* Connect with travellers */}

        <div className={styles.connectWithTravellers}>
          <h1>Connect with other travellers</h1>
          <div>
            <div className={styles.travelCard}>
              <img
                src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/india/a047bf294ce2d2e145fdcdd3097b9a7f4e6df229.jpg"
                alt=""
              />
              <h3>India</h3>
              <p>Travel community</p>
              <p>155,073 travellers</p>
            </div>
            <div className={styles.travelCard}>
              <img
                src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"
                alt=""
              />
              <h3>Travel Talk</h3>
              <p>General discussion</p>
              <p>559,436 travellers</p>
            </div>
            <div className={styles.travelCard}>
              <img
                src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png"
                alt=""
              />
              <h3>India</h3>
              <p>View all</p>
              <p>9,894,940 travellers</p>
            </div>
          </div>
        </div>

        {/* Discount Section */}

        <div className={styles.discountSection}>
          <div className={styles.ImageBox}>
            <div className={styles.globeImage}>
              <img
                src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png"
                alt=""
              />
            </div>
            <div className={styles.discountSectionText}>
              <h1>Get instant discounts</h1>
              <p>
                Simply sign into your Booking.com account and look for the blue
                Genius logo to save
              </p>
              <div>
                <button>Sign in</button>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <HomePageHomeGuestLoveSlider/> */}
          </div>
        {/* Destinaton we Love Scetion */}

        <div className={styles.destination}>
          <h1>Destinations we love</h1>
          <div className={styles.btnbox}>
            <button
              onClick={handleRegion}
              className={region ? styles.btnCurrentFocus : null}
            >
              Regions
            </button>
            <button
              onClick={handleCities}
              className={cities ? styles.btnCurrentFocus : null}
            >
              Cities
            </button>
            <button
              onClick={handleInterest}
              className={interest ? styles.btnCurrentFocus : null}
            >
              Places of interest
            </button>
          </div>
          <div>
            {region ? (
              <div className={styles.region}>
                <div>
                  <h3>
                    <Link to="#">Mykonos</Link>
                  </h3>
                  <p>1,454 properties</p>
                  <h3>
                    <Link to="#">Bali</Link>
                  </h3>
                  <p>14,624 properties</p>
                  <h3>
                    <Link to="#">Isle of Wight</Link>
                  </h3>
                  <p>9344 properties</p>
                  <h3>
                    <Link to="#">Cornwall</Link>
                  </h3>
                  <p>5,277 properties</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Uttar Pradesh</Link>
                  </h3>
                  <p>4,338 properties</p>
                  <h3>
                    <Link to="#">Ibiza</Link>
                  </h3>
                  <p>1,640 properties</p>
                  <h3>
                    <Link to="#">Ras Al Khaimah</Link>
                  </h3>
                  <p>113 properties</p>
                  <h3>
                    <Link to="#">Texel</Link>
                  </h3>
                  <p>411 properties</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Phuket Province</Link>
                  </h3>
                  <p>5,495 properties</p>
                  <h3>
                    <Link to="#">Guernesy</Link>
                  </h3>
                  <p>61 properties</p>
                  <h3>
                    <Link to="#">Jersy</Link>
                  </h3>
                  <p>89 properties</p>
                  <h3>
                    <Link to="#">Lake District</Link>
                  </h3>
                  <p>2,402 properties</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Hawaii</Link>
                  </h3>
                  <p>5,517 properties</p>
                  <h3>
                    <Link to="#">Tenerife</Link>
                  </h3>
                  <p>9,604 properties</p>
                  <h3>
                    <Link to="#">England</Link>
                  </h3>
                  <p>7,3991 properties</p>
                  <h3>
                    <Link to="#">Santorini</Link>
                  </h3>
                  <p>1,762 properties</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Bora Bora</Link>
                  </h3>
                  <p>59 properties</p>
                  <h3>
                    <Link to="#">Zanzibar</Link>
                  </h3>
                  <p>836 properties</p>
                  <h3>
                    <Link to="#">Bihar</Link>
                  </h3>
                  <p>761 properties</p>
                </div>
              </div>
            ) : cities ? (
              <div className={styles.region}>
                <div>
                  <h3>
                    <Link to="#">York</Link>
                  </h3>
                  <p>828 hotels</p>
                  <h3>
                    <Link to="#">Newcastle upon Tyne</Link>
                  </h3>
                  <p>389 hotels</p>
                  <h3>
                    <Link to="#">Manchester</Link>
                  </h3>
                  <p>1094 hotels</p>
                  <h3>
                    <Link to="#">London</Link>
                  </h3>
                  <p>14531 hotels</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Liverpool</Link>
                  </h3>
                  <p>1084 hotels</p>
                  <h3>
                    <Link to="#">Leeds</Link>
                  </h3>
                  <p>382 hotels</p>
                  <h3>
                    <Link to="#">Glasgow</Link>
                  </h3>
                  <p>916 hotels</p>
                  <h3>
                    <Link to="#">Edinburgh</Link>
                  </h3>
                  <p>3345 hotels</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Carbis Bay</Link>
                  </h3>
                  <p>68 hotels</p>
                  <h3>
                    <Link to="#">Brighton & Hove</Link>
                  </h3>
                  <p>856 hotels</p>
                  <h3>
                    <Link to="#">Bristol</Link>
                  </h3>
                  <p>645 hotels</p>
                  <h3>
                    <Link to="#">Bournemoouth</Link>
                  </h3>
                  <p>404 hotels</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Blackpool</Link>
                  </h3>
                  <p>897 hotels</p>
                  <h3>
                    <Link to="#">Birmingham</Link>
                  </h3>
                  <p>1011 hotels</p>
                  <h3>
                    <Link to="#">Stockholm</Link>
                  </h3>
                  <p>435 hotels</p>
                  <h3>
                    <Link to="#">Manila</Link>
                  </h3>
                  <p>4802 hotels</p>
                </div>
              </div>
            ) : (
              <div className={styles.region}>
                <div>
                  <h3>
                    <Link to="#">Kalhari Waterpark Resort</Link>
                  </h3>
                  <p>43 properties</p>
                  <h3>
                    <Link to="#">AI Naha Wildlife Reserve</Link>
                  </h3>
                  <p>1 properties</p>
                  <h3>
                    <Link to="#">Comal River Tubing</Link>
                  </h3>
                  <p>327 properties</p>
                  <h3>
                    <Link to="#">Healthrow</Link>
                  </h3>
                </div>
                <div>
                  <h3>
                    <Link to="#">Guadalupe River Tubing</Link>
                  </h3>
                  <p>327 properties</p>
                  <h3>
                    <Link to="#">Universal Studios Orlando</Link>
                  </h3>
                  <p>3,684 properties</p>
                  <h3>
                    <Link to="#">Wembley Stadium</Link>
                  </h3>
                  <p>14,504 properties</p>
                  <h3>
                    <Link to="#">The Shard</Link>
                  </h3>
                  <p>14,504 properties</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Effel Tower</Link>
                  </h3>
                  <p>7,560 properties</p>
                  <h3>
                    <Link to="#">Dsineyland Peris</Link>
                  </h3>
                  <p>7,560 properties</p>
                  <h3>
                    <Link to="#">02 Arena</Link>
                  </h3>
                  <p>14,504 properties</p>
                  <h3>
                    <Link to="#">State Park</Link>
                  </h3>
                  <p>21 properties</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Portmeirion</Link>
                  </h3>
                  <p>9 properties</p>
                  <h3>
                    <Link to="#">Niagra Falls State Park</Link>
                  </h3>
                  <p>75 properties</p>
                  <h3>
                    <Link to="#">Healthrow Terminal 5</Link>
                  </h3>
                  <p>62 properties</p>
                  <h3>
                    <Link to="#">Times Square</Link>
                  </h3>
                  <p>1,381 properties</p>
                </div>
                <div>
                  <h3>
                    <Link to="#">Ocean City Boardwalk</Link>
                  </h3>
                  <p>766 properties</p>
                  <h3>
                    <Link to="#">River Walk</Link>
                  </h3>
                  <p>670 properties</p>
                  <h3>
                    <Link to="#">Burj Al Arab Tower</Link>
                  </h3>
                  <p>4,287 properties</p>
                  <h3>
                    <Link to="#">Disneyland</Link>
                  </h3>
                  <p>247 properties</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  Footer Section */}
      <HomePageFotter />
    </div>
  );
};

export default HomePage;
