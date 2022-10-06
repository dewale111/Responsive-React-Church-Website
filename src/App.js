import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import './app.css';
import Gallery from './pages/gallery/Gallery';
import ContactUs from './pages/contactUs/ContactUs';
import Messages from './pages/messages/Messages';
import Giving from './pages/giving/Giving';
import Clubx from './pages/clubx/Clubx';
import Mos from './pages/mos/Mos';
import Women from './pages/women/Women';
import Events from './pages/events/Events';
import Sra from './pages/sra/Sra';



function App() {
  return (
    <div className='App'>
      <Router >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route exact path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/messages" element={<Messages/>}></Route>
        <Route path="/giving" element={<Giving/>}></Route>
        <Route path="/clubxtreme" element={<Clubx/>}></Route>
        <Route path="/men-of-significance" element={<Mos/>}></Route>
        <Route path="/women-of-worth" element={<Women/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/solid-rock-academy" element={<Sra/>}></Route>
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;
