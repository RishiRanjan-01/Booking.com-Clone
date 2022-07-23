
import "./App.css";
import AllHotelsRoutes from "./Pages/All_Hotel/AllHotelsRoutes";
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home/HomePage';
import { FlightRoutes } from './Pages/FlightOption/FlightRoutes';
import PaymentModal from './Pages/FlightOption/PaymentModal/PaymentModal';
import PaymentSuccess from './Pages/FlightOption/PaymentSuccess/PaymentSuccess';

function App() {
  return (
    <>
    <AllHotelsRoutes />
    {/* <Navbar/> */}
    <PaymentModal/>
      {/* <PaymentSuccess/> */}
      <HomePage/>
    FlightRoutes />
 </>
  );
}

export default App;
