import { CalendarIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import styles from "./SearchBar.module.css";



const SearchBar = () => {
  return (
    <div className={styles.SearchbarContainer}>
        {/* <span className={styles.bedIcon}><svg className={styles.streamline_bed} height="24" width="24" viewBox="-20 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg></span> */}
      <input  type="text" className={styles.InputPlace} placeholder="Where are you going?" />
      <div>
        <InputGroup bg={"#fff"} height="100%" border={"5xp solid yellow"}>
          <InputLeftElement
            pointerEvents="none"
            
            children={<CalendarIcon color="gray.300" />}
          />
          <Input
            placeHolder="Select Date and Time"
            size="xl"
            backgroundColor="#ffffff"
            type="datetime-local"
            border="5px solid yellow"
          />
        </InputGroup>
      </div>
      <div className={styles.selectOption}>
      <ion-icon name="person"></ion-icon>
      </div>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchBar;
