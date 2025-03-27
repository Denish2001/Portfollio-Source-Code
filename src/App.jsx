import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Hero/Hero";
import './App.css'

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PracticeAreas from "./components/PracticeAreas/PracticeAreas";
import AboutUs from "./components/AboutUs/AboutUs";
import Publications from "./components/Publications/Publications";
import Team from "./components/Team/Team";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <div className="white-gradient"/>
          <Header/> 
    
        </div>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PracticeAreas" element={<PracticeAreas />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    <Footer/>
    </Router>

  );
}

export default App;
