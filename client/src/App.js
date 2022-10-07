import './App.css';
// import Nav from './components/Nav';
import Hero from './components/Hero';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    {/* <Nav /> */}
    <div id='LinksAbout'>
      <Routes>
        <Route path='/New-portfolio' element={<Hero />} exact />
      </Routes>
    </div>
    </>
  );
}

export default App;
