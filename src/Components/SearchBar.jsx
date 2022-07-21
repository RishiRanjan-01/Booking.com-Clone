import { CalendarIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputLeftElement, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  // const [date, setDate] = useState(date.now())

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  let todays = `${yyyy}-${mm}-${dd}`;
  let tommorows = `${yyyy}-${mm}-${dd}`;

  console.log(today);

  return (
    <div className={styles.SearchbarContainer}>
      <div className={styles.InputPlace}>
        <div>
          <svg viewBox="0 -10 34 34" className={styles.bedIcon}>
            <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
          </svg>
        </div>
        <input type="text" placeholder="Where are you going?" />
      </div>

      <div className={styles.InputDate}>
        <div>{/* <CalendarIcon color={"gray.400"}/> */}</div>
        <input type="date" placeholder="Check In" value={todays} />
        <div className={styles.dash}></div>
        <input type="date" placeholder="Check Out" value={tommorows} required />
      </div>

      <div className={styles.selectOption}>
        <div>
          <ion-icon color="gray" name="person"></ion-icon>
        </div>
        <Popover isLazy>
          <PopoverTrigger>
            <Button>Click me</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">
              Popover placement
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchBar;
