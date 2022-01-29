import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Dropin from "./pages/services/Dropin"
import Dogwalks from "./pages/services/Walks"
import Dogpark from "./pages/services/Dogpark"
import Dogbeach from "./pages/services/Dogbeach"
import Hiking from "./pages/services/Hiking"
import Training from "./pages/services/Training"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/dropin" element={<Dropin />} />
          <Route path="/services/walks" element={<Dogwalks />} />
          <Route path="/services/dogpark" element={<Dogpark />} />
          <Route path="/services/dogbeach" element={<Dogbeach />} />
          <Route path="/services/hiking" element={<Hiking />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
