import React, { useEffect, useState } from "react";
import { getALLHOTELS } from "../../Redux/AllHotels/action";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation, useSearchParams, Link } from "react-router-dom";
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
import HotelSearchBox from "./HotelSearchBox";

const HotelPrice = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlreviewsratings = searchParams.getAll("reviewsratings");

  const location = useLocation();

  const urlSort = searchParams.get("sortBy");

  const [reviewsratings, setreviewsratings] = useState(urlreviewsratings || []);

  const [sortBy, setSortBy] = useState(urlSort || "");

  const dispatch = useDispatch();

  const Hotels = useSelector((state) => state.hotels.allHotels);
  // console.log(Hotels);

  const handlecheckbox = (e) => {
    const option = e.target.value;

    let newreviewsratings = [...reviewsratings];

    if (reviewsratings.includes(option)) {
      newreviewsratings.splice(newreviewsratings.indexOf(option, 1));
    } else {
      newreviewsratings.push(option);
    }

    setreviewsratings(newreviewsratings);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (reviewsratings || sortBy) {
      let params = {};
      reviewsratings && (params.reviewsratings = reviewsratings);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [reviewsratings, dispatch, setSearchParams, sortBy]);

  useEffect(() => {
    if (Hotels.length === 0 || location.search) {
      const sortBy = searchParams.get("sortBy");

      let getAllHotelsParams = {
        params: {
          reviewsratings: searchParams.getAll("reviewsratings"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };

      dispatch(getALLHOTELS(getAllHotelsParams));
    }
  }, [location.search]);

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
            <HotelSearchBox/>
            <div className={styles.All_Hotels_All_Content_left_Filter}>
              <div>
                <Heading size="md">Filter & Sort by:</Heading>
              </div>
              <Divider orientation="horizontal"></Divider>
              <div>
                <div onChange={handleSort}>
                <div>
                  <Heading size="sm">Sort By</Heading>
                </div>
                <div>
                  <Checkbox size="md" value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}>High to Low</Checkbox>
                </div>
                <div>
                  <Checkbox size="md" value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}>Low to High</Checkbox>
                </div>
                </div>
                <Divider orientation="horizontal"></Divider>
                <div>
                  <div>
                    <Heading size="sm">Review score</Heading>
                  </div>
                  <div>
                    <Checkbox
                      size="md"
                      value="9.5"
                      onChange={handlecheckbox}
                      defaultChecked={reviewsratings.includes(9.5)}
                    >
                      Superb: 9+
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      size="md"
                      value="8.5"
                      onChange={handlecheckbox}
                      defaultChecked={reviewsratings.includes(8.5)}
                    >
                      Very good: 8+
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      size="md"
                      value="7.5"
                      onChange={handlecheckbox}
                      defaultChecked={reviewsratings.includes(7.5)}
                    >
                      Good: 7+
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      size="md"
                      value="6.5"
                      onChange={handlecheckbox}
                      defaultChecked={reviewsratings.includes(6.5)}
                    >
                      Pleasant: 6+
                    </Checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.All_Hotels_All_Content_Right}>
            {Hotels.length > 0 &&
              Hotels.map((el) => {
                return (
                  <div
                    className={styles.All_Hotels_All_Content_Right_Container}
                    key={el.id}
                  >
                    <div
                      className={
                        styles.All_Hotels_All_Content_Right_Container_image
                      }
                    >
                      <img src={el.roomimage} width="100%" alt=""></img>
                    </div>
                    <div
                      className={
                        styles.All_Hotels_All_Content_Right_Container_description
                      }
                    >
                      <div>
                        <Heading size="sm" color="blue.600">
                          {el.Name}
                        </Heading>
                      </div>
                      <div>{el.Loaction}</div>
                      <div>Travel Sustainable property</div>
                      <div>
                        <p>
                          Located 2 km from Railway Station provides
                          accommodation with a restaurant, free private parking,
                          a bar and a terrace.
                        </p>
                      </div>
                      <div></div>
                    </div>
                    <div
                      className={
                        styles.All_Hotels_All_Content_Right_Container_showprice
                      }
                    >
                      <div
                        className={
                          styles.All_Hotels_All_Content_Right_Container_showprice_top
                        }
                      >
                        <div>
                          <div>
                            <Heading size="sm">{el.reviewsfeeds}</Heading>
                          </div>
                          <div>
                            <p>{el.totalreviews}</p>
                          </div>
                        </div>
                        <div>
                          <Button colorScheme="blue" borderRadius="2px 25px">
                            {el.reviewsratings}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p>Location 9.4</p>
                      </div>
                      <div>
                        <Heading size="sm">₹{el.price}</Heading>
                      </div>
                      <div>
                        <Button colorScheme="blue" borderRadius="none">
                          See availability
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPrice;
