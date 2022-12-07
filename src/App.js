import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Splash from './components/authentication/Splash';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Cars from './components/cars/Cars';
import Details from './components/team/details';
import Useredit from './components/authentication/EditUser';
import CardDetail from './components/cars/CardDetails';
import Teams from './components/team/teams';
import Love from './components/team/details-pages/love';
import Quality from './components/team/details-pages/quality';
import Availibility from './components/team/details-pages/avalibility';
import Beauty from './components/team/details-pages/beauty';

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
        <Route path="/love" element={<Love />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/availibility" element={<Availibility />} />
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </Router>
  );
}

export default App;
