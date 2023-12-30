import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Index from './pages/Index';
import Layout from './Layout';
import CouronneeDetoiles from './chants/CouronneeDetoiles';
import SavoirSarreter from './heures-feu/SavoirSarreter';

function App(){ 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Index/>} />
          <Route path='/couronnee-d-etoiles' element={<CouronneeDetoiles/>} />
          <Route path='/savoir-s-arreter' element={<SavoirSarreter/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
    {/*
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Index/>} />
          
        </Route> 
      </Routes>
  */}
  </>
  )
}

export default App