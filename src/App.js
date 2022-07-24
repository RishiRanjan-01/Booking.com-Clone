

import './App.css';
import Navbar from './Components/Navbar';
import Hotel from './Pages/All_Hotel/Hotel';
// import FlightHome from "./Pages/FlightHome/FlightHome"



import HomePage from './Pages/Home/HomePage';
import HotelPrice from './Pages/All_Hotel/HotelPrice';
import HotelSeeAvialability from './Pages/All_Hotel/HotelSeeAvialability';
import { FlightRoutes } from './Pages/FlightOption/FlightRoutes';
import HotelCheckout from './Pages/HotelCheckout/HotelCheckout';
import HotelPaymentPage from './Pages/HotelCheckout/HotelPaymentPage';
import MainRoutes from './Pages/MainRoutes';




function App() {
  return (
    <>
    <MainRoutes/>
    {/* <HotelCheckout/> */}
      {/* <FligthOption /> */}
      {/* <ContactFlight /> */}
      {/* <HomePage/> */}
      {/* <Hotel/> */}
      {/* <FlightHome/> */}
     {/* <FligthOption /> */}
    {/* <HomePage/> */}
    {/* <Hotel/> */}
    {/* <HotelPrice/> */}
    {/* <HotelSeeAvialability/> */}
      {/* <FlightRoutes /> */}
      {/* <HotelPaymentPage/> */}

    </>
  );
}

export default App;
