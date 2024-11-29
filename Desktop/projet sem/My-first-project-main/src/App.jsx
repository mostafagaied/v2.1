

import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home"; // Import Home page
import About from "./pages/About"; // Import About page
import Contact from "./pages/Contact"; // Import Contact page
import Signin from "./pages/signin";
import Login from './pages/login';
import Accueill from './pages/accueill';

const App = () => { 
 
  return (
    <div>
      
      <Navbar /> {/* Navbar should always be visible */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accueill" element={<Accueill />} />
        
      </Routes>
    
      

      
      
      

    </div>
          
  )
}

export default App



