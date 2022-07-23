
import "./App.css";
import AllHotelsRoutes from "./Pages/All_Hotel/AllHotelsRoutes";
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home/HomePage';
import { FlightRoutes } from './Pages/FlightOption/FlightRoutes';

function App() {
  return (
    <>

     <AllHotelsRoutes />
      <HomePage/>
     <Navbar/>
      <FlightRoutes />



    </>
  );
}

export default App;
