import React from "react";
import styles from "../All_Hotel/Hotel.module.css";
import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Input,
  Divider,
  Select,
  Heading,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const HotelSearchBox = () => {
  return (
    <div>
      <div className={styles.All_Hotels_All_Content_left_SearchBox}>
        <Heading size="md">Search</Heading>
        <div>
          <p>Destination/property name:</p>
        </div>
        <div className={styles.All_Hotels_All_Content_left_SearchBox_input}>
          <div
            className={styles.All_Hotels_All_Content_left_SearchBox_searchicons}
          >
            <BsSearch />
          </div>
          <div>
            <Input
              borderRadius="none"
              bg="white"
              placeholder="Enter place"
              border="none"
              size="sm"
              variant="none"
            />
          </div>
        </div>
        <div>
          <p>Check-in date</p>
        </div>
        <div>
          <Input
            size="md"
            width="98%"
            borderRadius="none"
            backgroundColor="#ffffff"
            type="date"
          />
        </div>
        <div>
          <p>Check-out date</p>
        </div>
        <div>
          <Input
            size="md"
            borderRadius="none"
            width="98%"
            backgroundColor="#ffffff"
            type="date"
          />
        </div>
        <div>
          <Select
            width="98%"
            placeholder="2 Adults 0 children 1 room"
            size="md"
            bg="white"
            borderRadius="none"
          />
        </div>
        <div>
          {" "}
          <Checkbox size="md">Entire homes & apartments</Checkbox>
        </div>
        <div>
          {" "}
          <Checkbox size="md">I'm travelling for work</Checkbox>
        </div>
        <div>
          <Button colorScheme="blue" size="md" width="98%" borderRadius="none">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchBox;
