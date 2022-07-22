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
  Text,
  useColorModeValue,
  
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link as RouterLink, Navigate, useNavigate} from 'react-router-dom';
import { useReducer } from 'react';
import { REGISTER_SUCCESS } from '../Redux/AuthReducer/actionTypes';
import { register } from '../Redux/AuthReducer/action';
import {useDispatch} from 'react-redux';
import Navbar from '../Components/Navbar';
function reducer(state,action){
  switch(action.type){

      case 'password':
        return{
          ...state,
        password:action.payload
        }
        case 'confirmpassword':
          return{
            ...state,
           confirmpassword:action.payload
          }
         
      default:
        return state;
  }
}

const initialState={
  
  password:'',
  confirmpassword:'',
 
}
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const[state,setter]=useReducer(reducer,initialState)
  const Navigate=useNavigate();
  const dispatch = useDispatch()

  const signupHandler=()=>{
    dispatch(register(state)).then((r)=>{
      if(r==REGISTER_SUCCESS){
        Navigate("/login",{replace:true});
      }
    });
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
          <Text fontSize={'0.8g'} color={'gray.600'} ml={'85px'}>
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
              <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}
                value={state.password} onChange={(e)=> setter({type:'password',payload:e.target.value})} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    value={state.password} onChange={(e)=> setter({type:'password',payload:e.target.value})}
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
                <Input type={showPassword ? 'text' : 'password'}
                value={state.password} onChange={(e)=> setter({type:'password',payload:e.target.value})} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    value={state.password} onChange={(e)=> setter({type:'password',payload:e.target.value})}
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
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                h={"30px"}
                 w={"310px"}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
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
            <Stack pt={2}>
              <Text align={'center'}>
                All nights reserved.
                Copyright (2006-2022).Booking.com
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex></>
  );
}
