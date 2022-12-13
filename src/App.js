import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Availability from './components/team/Availability';
import Splash from './components/authentication/Splash';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Cars from './components/cars/Cars';
import Details from './components/team/Details';
import EditUser from './components/authentication/EditUser';
import Teams from './components/team/Teams';
import CarCreate from './components/cars/CarCreate';
import CarDetails from './components/cars/CarDetails';
import Bookings from './components/bookings/Bookings';
import Love from './components/team/Love';
import Quality from './components/team/Quality';
import Beauty from './components/team/Beauty';
import Navbar from './components/navbar/Navbar';
import CarUpdate from './components/cars/CarUpdate';
import PageNotFound from './components/authentication/PageNotFound';

const App = () => {
  if (localStorage.getItem('user') === null) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Splash />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/navbar" element={<Navbar />} />

        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/create" element={<CarCreate />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/cars/:id/update" element={<CarUpdate />} />

        <Route path="/edit" element={<EditUser />} />

        <Route path="/bookings" element={<Bookings />} />

        <Route path="/details" element={<Details />} />
        <Route path="/details/teams" element={<Teams />} />
        <Route path="/details/love" element={<Love />} />
        <Route path="/details/quality" element={<Quality />} />
        <Route path="/details/availability" element={<Availability />} />
        <Route path="/details/beauty" element={<Beauty />} />
      </Routes>
    </Router>
  );
};

export default App;
