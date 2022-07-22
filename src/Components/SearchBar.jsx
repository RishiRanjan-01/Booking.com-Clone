import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CalendarIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  background,
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { BsChevronExpand } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const SearchBar = () => {

  const [countAdult, setCountAdult] = useState(2);
  const [childCount, setChildCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);

    const handleAdultCount = (value) => {
        // console.log(value)

          setCountAdult(countAdult+value)

    }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  let todays = `${yyyy}-${mm}-${dd}`;
  let tommorows = `${yyyy}-${mm}-${dd}`;

  // console.log(today);

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
          <BsFillPersonFill color="gray" />
        </div>
        <div className={styles.contentBox}>
        <Popover>
          <PopoverTrigger>
            <Button bg="none" _hover={{bg:"none"}}>{`${countAdult} adults . ${childCount} children . ${roomCount} rooms`}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent width={"400px"} >
              <PopoverHeader padding={"1rem"}>
              <Flex h="10" justifyContent="space-between" >
                <Text margin={"0.5rem"} color="black" fontWeight="medium">Adults</Text>
                <Stack direction={"row"}>
                  <Box  h="100%" onClick={() => countAdult>1 ? handleAdultCount(-1) : null} w="10" fontSize={"3xl"} color="#539fd6" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>-</Box>
                  <Box h="100%" w="10" fontSize={"xl"} color="black" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>{countAdult}</Box>
                  <Box h="100%" onClick={() => countAdult < 9 ? handleAdultCount(1) : null} w="10" fontSize={"3xl"} color="#539fd6" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>+</Box>
                </Stack >
              </Flex>
              </PopoverHeader>
              <PopoverBody padding={"1rem"}> 
              <Flex h="10"  justifyContent="space-between" >
                <Box>
                <Text color="black" fontWeight="medium">Children</Text>
                <Text fontSize={"smaller"} color="gray">Ages 0-17</Text>
                </Box>
                <Stack direction={"row"}>
                  <Box h="100%" onClick={() => childCount > 1 ? setChildCount(childCount-1) : null} w="10" fontSize={"3xl"} color="#539fd6" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>-</Box>
                  <Box h="100%" w="10" fontSize={"xl"} color="black" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>{childCount}</Box>
                  <Box h="100%" onClick={() => childCount < 9 ? setChildCount(childCount+1) : null} w="10" fontSize={"3xl"} color="#539fd6" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>+</Box>
                </Stack >
              </Flex>  
              </PopoverBody>
              <PopoverFooter padding={"1rem"}>
              <Flex h="10"  justifyContent="space-between" >
                <Text margin={"0.5rem"} color="black" fontWeight="medium">Rooms</Text>
                <Stack direction={"row"}>
                  <Box h="100%" onClick={() => roomCount > 1 ? setRoomCount(roomCount-1) : null} w="10" fontSize={"3xl"} color="#539fd6" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>-</Box>
                  <Box h="100%" w="10" fontSize={"xl"} color="black" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>{roomCount}</Box>
                  <Box h="100%" onClick={() => roomCount < 30 ? setRoomCount(roomCount+1) : null} w="10" fontSize={"3xl"} color="#539fd6" display={"flex"} alignItems="center" justifyContent={"center"} border={"2px solid #539fd6"}>+</Box>
                </Stack >
              </Flex>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
        <span><BsChevronExpand color="#539fd6"/></span>
        </div>  
        <div>
        </div>
      </div>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchBar;
