import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";
import Appointments from "./pages/Appointments";
import Socials from "./pages/Socials";
import Products from "./pages/Products";
import Candles from "./pages/Candles";
import  { FetchAPI } from "./pages/Random";
import "./styles/style.css";
import "./index";
import Supplements from './pages/supplements';
import Somavedic from "./pages/Somavedic";
import Emf from "./pages/Emf";
import Crystals from "./pages/Crystals";





function App() {   

  return (
    <div >
    <Router>
     <Navbar/>
      <Routes>
      <Route exact path="/"  Component={Home}/>
      <Route  path="/services" Component={Services}/>
      <Route  path="/Random" Component={FetchAPI}/>
      <Route  path="/blog" Component={Blog}/>
      <Route  path="/contact" Component={Contact}/>
      <Route  path="/socials" Component={Socials}/>
      <Route  path="/appointments" Component={Appointments}/>
      <Route  path="/products" Component={Products}/> 
      <Route  path="/candles" Component={Candles}/> 
      <Route  path="/supplements" Component={Supplements}/> 
      <Route  path="/somavedic" Component={Somavedic}/> 
      <Route  path="/emf" Component={Emf}/> 
      <Route  path="/crystals" Component={Crystals}/>  
      </Routes>
      </Router>
    </div>
  );
}


export default App;
