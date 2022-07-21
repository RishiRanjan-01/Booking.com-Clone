import { InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
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
            <div><InfoIcon color={"#ae6c3b"} /></div>
            {/* <div><p>Get the advice you need. Check the latest COVID-19 restrictions before you travel. Learn more</p></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
