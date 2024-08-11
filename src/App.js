// import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
import Hero from './Sections/Hero';
import Footer from './Components/Footer'
import AboutUs from './Sections/AboutUs';
import TopRecipes from './Sections/TopRecipes';
import ContactUs from './Sections/ContactUs';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <AboutUs />
      <TopRecipes />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
