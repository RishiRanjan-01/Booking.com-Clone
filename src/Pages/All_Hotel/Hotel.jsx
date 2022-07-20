import React from "react";
import styles from "../All_Hotel/Hotel.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
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

const Hotel = () => {
  return (
    <div className={styles.All_Hotels_Main}>
      <div className={styles.All_Hotels_All_Container}>
        <div className={styles.All_Hotels_Breadcrums}>
          <Breadcrumb
            spacing="2px"
            separator={<MdOutlineKeyboardArrowRight color="black" />}
          >
            <BreadcrumbItem color="blue">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="blue">
              <BreadcrumbLink href="#">India</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="blue">
              <BreadcrumbLink href="#">Maharastra</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="blue">
              <BreadcrumbLink href="#">Mumbai</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage color="grey">
              <BreadcrumbLink href="#">Search results</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className={styles.All_Hotels_All_Content}>
          <div className={styles.All_Hotels_All_Content_left}>
            <div className={styles.All_Hotels_All_Content_left_SearchBox}>
              <Heading size="md">Search</Heading>
              <div>
                <p>Destination/property name:</p>
              </div>
              <div
                className={styles.All_Hotels_All_Content_left_SearchBox_input}
              >
                <div
                  className={
                    styles.All_Hotels_All_Content_left_SearchBox_searchicons
                  }
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
                <Button
                  colorScheme="blue"
                  size="md"
                  width="98%"
                  borderRadius="none"
                >
                  Search
                </Button>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_left_Filter}>
              <div>
                <Heading size="md">Filter by:</Heading>
              </div>
              <Divider orientation="horizontal"></Divider>
              <div>
                <div>
                  <Heading size="sm">Review score</Heading>
                </div>
                <div>
                  <Checkbox size="md">Superb: 9+</Checkbox>
                </div>
                <div>
                  <Checkbox size="md">Very good: 8+</Checkbox>
                </div>
                <div>
                  <Checkbox size="md">Good: 7+</Checkbox>
                </div>
                <div>
                  <Checkbox size="md">Pleasant: 6+</Checkbox>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.All_Hotels_All_Content_Right}>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
            <div className={styles.All_Hotels_All_Content_Right_Container}>
              <div
                className={styles.All_Hotels_All_Content_Right_Container_image}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/349619775.webp?k=47a55137d5d643b13dcb743f24261bc3c14de5e66b184481b65283f77f9c9eaa&o=&s=1"
                  width="100%"
                  alt=""
                ></img>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_description
                }
              >
                <div>
                  <Heading size='sm' color="blue.600">Staybook Hotel Geeson- New Delhi Railway StationOpens in new
                  window</Heading>
                </div>
                <div>Paharganj, New Delhi</div>
                <div>Travel Sustainable property</div>
                <div>
                  <p>Located in New Delhi, 2 km from Jama Masjid, Staybook Hotel
                  Geeson- New Delhi Railway Station provides accommodation with
                  a restaurant, free private parking, a bar and a terrace.</p>
                </div>
                <div></div>
              </div>
              <div
                className={
                  styles.All_Hotels_All_Content_Right_Container_showprice
                }
              >
                <div className={
                  styles.All_Hotels_All_Content_Right_Container_showprice_top
                }>
                <div>
                <div><Heading size="sm">Fabulous</Heading></div>
                <div><p>323 reviews</p></div>
                </div>
                <div><Button colorScheme='blue' borderRadius='2px 25px'>8.9</Button></div>
                </div>
                <div><p>Location 9.4</p></div>
                <div><Button colorScheme='blue' borderRadius='none'>Show Price</Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
