import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Login() {
  return (
    <>
      <Flex minH={"40vh"} align={"center"} justify={"center"}>
        {/* // bg={useColorModeValue('gray.50', 'gray.800')}> */}
        <Stack spacing={1} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"}>Sign in or create an account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}></Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>

              <Stack>
                <RouterLink to="/signup" color={"blue.400"}>
                  <Button
                    bg={"blue.400"}
                    h={"30px"}
                    w={"300px"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Continue with email
                  </Button>
                </RouterLink>
              </Stack>
              <Stack pt={2}>
                <Text align={"center"}>or use omne of these option</Text>
              </Stack>
              <HStack spacing="70px" pt={2}>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://louisville.edu/english/images/facebookicon.png/image"
                  alt="Dan Abramov"
                />
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                  alt="Dan Abramov"
                />
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://img.icons8.com/material-outlined/344/iphone--v2.png"
                  alt="Dan Abramov"
                />
              </HStack>
              <Stack pt={2}>
                <Text align={"center"} color={"blue"}>
                  More ways to sign in
                </Text>
              </Stack>
              <Stack pt={2}>
                <Text align={"center"}>
                  By sigining or createomg an account you agree with our terms &
                  Conditions and Privacy StatementLogin
                </Text>
              </Stack>
              <Stack pt={2}>
                <Text align={"center"}>
                  All nights reserved. Copyright (2006-2022).Booking.com
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
