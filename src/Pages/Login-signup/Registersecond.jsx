import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Image,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link as RouterLink, Navigate, useNavigate} from 'react-router-dom';
  import { useReducer } from 'react';
  import { REGISTER_SUCCESS } from "../../Redux/Authentication/actionTypes";
  import { loginApi, register } from '../../Redux/Authentication/action';
  import {useDispatch,useSelector} from 'react-redux';
import Navbar from '../Login-signup/signin-Login/SignupNavbar';
  function reducer(state,action){
    switch(action.type){
  
        case 'password':
          return{
            ...state,
          password:action.payload
          }
          
        default:
          return state;
    }
  }
  
  const initialState={
    
    password:'',
   
  }
  export default function Registersecond() {
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const loginEmail = useSelector( state => state.auth.loginEmail)

    const Navigate=useNavigate();
    const dispatch = useDispatch()
  
    const signupHandler=()=>{
      const  payload = {
        username:loginEmail,
        password:password
      }
      dispatch(loginApi(payload))
      .then((r) => {
        console.log(r)
      })
    };
    
    return (
      <>
    <Navbar/>
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={'1'} ml={'5px'} maxW={'lg'} py={5} px={4}>
          <Stack ml={'25px'}>
            <Heading fontSize={'2xl'} textAlign={'auto'}>
            Enter your password
            </Heading>
            <Text fontSize={'0.8g'} color={'gray.600'} ml={'85px'}>
              Enter your booking.com password for 
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={1}>
            
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                  <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}
                  value={password} onChange={(e)=> setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={()=>setShowPassword(!showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              
  
              <Stack spacing={5} pt={2}>
              <RouterLink to="/" color={'blue.500'}> <Button
                  loadingText="Submitting"
                  bg={"rgb(105, 138, 242 )"}
                  h={"50px"}
                  w={"310px"}
                  color={"white"}
                  _hover={{
                    bg: "blue.700",
                  }}
                  onClick={signupHandler}
                  >
                Sign in
                </Button>
                </RouterLink>
  
              </Stack>
              <Stack pt={2}>
                <Text align={'center'}>
                 or
                </Text>
              </Stack>
              <Stack pt={2}>
                  <Button
                  h={"50px"}
                  w={"310px"}
                  color={"blue"}
                  border={"solid 1px blue"}
                 >
                 sign in with a verification link
                 </Button>
              </Stack>
              <Stack pt={2}>
                <Text align={'center'} color={'blue'}>
                 Forgot your password?
                </Text>
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
      </Flex>
      </>
    );
  }
  