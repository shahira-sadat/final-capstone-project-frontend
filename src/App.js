import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Splash from './components/authentication/Splash';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Cars from './components/cars/Cars';
import Details from './components/team/details';
import Navbar from './components/navbar/Navbar';
import Teams from './components/team/teams';
import CarCreate from './components/cars/CarCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/navbar" element={<Navbar />}>
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/create" element={<CarCreate />} />
          <Route path="/details" element={<Details />} />
          <Route path="/teams" element={<Teams />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
