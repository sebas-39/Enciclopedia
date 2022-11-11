import { Route, Routes } from "react-router-dom";
import './css/App.css';
import Navbar from './components/nav/Navbar';
import Home from './components/home/home';
import About from "./components/about/about";
import Category from "./components/category/category";
import Footer from "./components/footer/footer";
import Tecnology from "./components/footer/tecnology";

function App() {
  return ( 
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path = "/tecnology" element={<Tecnology />} />

        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />

    </div>

  );
    
}

export default App;
