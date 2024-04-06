
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Location from './pages/Location';
import Login from './pages/Login';
import Pagenotfound from './pages/Pagenotfound';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="*" element={<Pagenotfound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
