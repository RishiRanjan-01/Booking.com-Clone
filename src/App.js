import './App.css';

import HomePage from './Pages/HomePage';
import Hotel from './Pages/All_Hotel/Hotel';
import FlightHome from "./Pages/FlightHome/FlightHome"
import FligthOption from './Pages/FlightOption/FligthOption';


function App() {
  return (
    <>

      <FligthOption />
      <HomePage />
      <Hotel />
      <FlightHome />


    </>
  );
}

export default App;
