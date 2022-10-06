import Header from "../../components/header/Header";
import Quote from "../../components/quote/Quote";
import Subscribe from "../../components/subscribe/Subscribe";
import Describe from "../../components/describe/Describe";
import Workforce from "../../components/workforce/Workforce";
import Welcome from "../../components/welcome/Welcome";
import Footer from "../../components/footer/Footer";
import Scroll from '../../components/scroll/Scroll';

const Home = () => {
  return (
    <>
    <Scroll/>
    <Header/>
    <Welcome/>
    <Describe/>
    <Quote/>
    <Workforce/>
    <Subscribe/>
    <Footer/>
    
    </>
  );
};

export default Home;