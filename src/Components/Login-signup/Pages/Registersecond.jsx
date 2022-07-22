import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    
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
          
        default:
          return state;
    }
  }
  
  const initialState={
    
    password:'',
   
  }
  export default function Registersecond() {
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
              
  
              <Stack spacing={5} pt={2}>
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
                <Text align={'center'} border={'2px solid rgba(105, 138, 242 )'} h={'30px'} color={"blue"}>
                 sign in with a verification link
                </Text>
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
              <Stack pt={2}>
                <Text align={'center'}>
                  All nights reserved.
                  Copyright (2006-2022).Booking.com
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </>
    );
  }
  