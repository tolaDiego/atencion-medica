
import './styles/App.css';
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Especialidades from './components/especialidades';
import SumarAEquipo from './components/sumarAEquipo';
import Carousel from "./components/carousel";
import Contacto from "./components/contacto"
export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/sumar-a-equipo" element={<SumarAEquipo />}></Route>
          <Route path="/especialidades" element={<Especialidades />}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>


    </div>



  );
}

