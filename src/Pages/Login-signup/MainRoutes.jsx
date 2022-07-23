import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Register from './Register'
import Registersecond from './Registersecond'
import Signup from './Signup'
import Taxi from './Taxi'

const MainRoutes = () => {
  return (
    <Routes>
   <Route path='/' element={<Homepage/>}/>
   <Route path='/login' element={<Login/>} />
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/registersecond' element={<Registersecond/>}/>
   <Route path='/taxi' element={<Taxi/>}/>

   </Routes>
   
  )
}

export default MainRoutes
