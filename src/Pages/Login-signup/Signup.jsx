import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,Image,
  useColorModeValue,
  
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link as RouterLink, Navigate, useNavigate} from 'react-router-dom';
import { useReducer } from 'react';
import { REGISTER_SUCCESS } from "../../Redux/Authentication/actionTypes"
// import { REGISTER_SUCCESS } from '../Redux/AuthReducer/actionTypes';
import { register } from '../../Redux/Authentication/action';
import {useDispatch,useSelector} from 'react-redux';
import Navbar from "./signin-Login/SignupNavbar"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const[password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")


  
  const Navigate=useNavigate();
  const dispatch = useDispatch()
  
  const email = useSelector( state => state.auth.email)
  
  const signupHandler=()=>{
    const payload = {
      name: email,
      email: email,
      password: password,
      username: email,
      mobile: email,
      description: email,
    };

    dispatch(register(payload))
    .then((r) => {
      console.log(r)
      if(r == REGISTER_SUCCESS){
        Navigate("/register")
      }
    })
  };


  return (
    <>
    <Navbar/>
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={1} mx={'auto'} maxW={'lg'} py={5} px={4}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
          Create password
          </Heading>
          <Text fontSize={'0.8g'} color={'gray.600'} marginLeft={'15px'}>
            Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers. 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={1}>
          
            <FormControl id="password" isRequired>
              <FormLabel >Password</FormLabel>
                <InputGroup>
                <Input  border={"3px solid black"} type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="Cpmformpassword" isRequired>
              <FormLabel> Confirm password</FormLabel>
              <InputGroup>
                <Input border={"3px solid black"} type={showPassword ? 'text' : 'password'} onChange={(e) => setConfPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
            <RouterLink to="/" color={'blue.400'}> <Button
              bg={"rgb(105, 138, 242 )"}
                 h={"50px"}
                 w={"309px"}
                 color={"white"}
                 _hover={{
                   bg: "blue.700",
                 }}
                onClick={signupHandler}
                >
              Create account
              </Button>
              </RouterLink>

            </Stack>
            <Stack pt={2}>
              <Text align={'center'}>
                By sigining or createomg an account you agree
                with our terms & Conditions and Privacy StatementLogin
              </Text>
            </Stack>
            <Flex justifyContent={"center"}>
            <Image w="380px" h="70px" m="10px auto" src='https://i.ibb.co/bmS6pyc/image-11.png' alt='Dan Abramov' />
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Flex></>
  );
}
