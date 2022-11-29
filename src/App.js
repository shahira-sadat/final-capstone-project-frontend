import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Splash from './components/authentication/Splash';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Cars from './components/cars/Cars';
import Details from './components/team/details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/cars" element={<Cars />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
