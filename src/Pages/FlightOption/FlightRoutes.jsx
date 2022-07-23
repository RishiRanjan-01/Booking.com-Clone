import React from 'react'
import { Route, Routes } from "react-router-dom";
import ContactFlight from './ContactFlight';
import FligthOption from './FligthOption';
import { PaymentFlight } from './PaymentFlight';
export const FlightRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<FligthOption />} />
            <Route path='/flightcontact' element={<ContactFlight />} />
            <Route path='/flightcontact/flightpayment' element={<PaymentFlight />} />
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    )
}
