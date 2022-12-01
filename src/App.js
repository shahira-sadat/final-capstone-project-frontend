import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Splash from './components/authentication/Splash';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Cars from './components/cars/Cars';
import Details from './components/team/details';
import Useredit from './components/authentication/EditUser';
import CardDetail from './components/cars/CardDetails';
import Navbar from './components/navbar/Navbar';
import Teams from './components/team/teams';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/edit" element={<Useredit />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CardDetail />} />
        <Route path="/details" element={<Details />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
