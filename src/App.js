import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import './app.css';
import Gallery from './pages/gallery/Gallery';



function App() {
  return (
    <div className='App'>
      <Router >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;
