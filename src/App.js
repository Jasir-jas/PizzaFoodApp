import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>  

        <Routes>
        <Route exact path="/" element={<Navbar />} Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/menu' Component={Menu} />
        <Route path='/contact' Component={Contact} />
        </Routes>
        <Footer />

      </Router>
     
      
    </div>
  );
}

export default App;
