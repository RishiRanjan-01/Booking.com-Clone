import React from 'react'
import { Route, Routes } from "react-router-dom";
import ContactFlight from './ContactFlight';
import FligthOption from './FligthOption';
import { PaymentFlight } from './PaymentFlight';
import FlightHome from '../FlightHome/FlightHome'

export const FlightRoutes = () => {
    return (
        <Routes>
            <Route path='/flighthome' element={<FlightHome />} />
            <Route path='/flightoption' element={<FligthOption />} />
            <Route path='/flightcontact' element={<ContactFlight />} />
            <Route path='/flightcontact/flightpayment' element={<PaymentFlight />} />
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    )
}
