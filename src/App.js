
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { Toaster } from 'sonner';
import KnowledgeCenter from './pages/KnowledgeCenter';

function App() {

 

  //State to control language selection - true = dansk & false = english
  const [language, setLanguage] = useState(true);



  return (
    <div className="pb-16">
      <Navbar setLanguage={setLanguage} language={language} />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/videnscenter' element={<KnowledgeCenter />} />
      </Routes>
      <Toaster richColors />
    </div>
  );
}

export default App
