import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import './app.css';
import Gallery from './pages/gallery/Gallery';
import ContactUs from './pages/contactUs/ContactUs';
import Messages from './pages/messages/Messages';



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
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;
