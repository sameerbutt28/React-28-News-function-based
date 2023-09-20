import './App.css';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

const App =()=>
{
    return (
       <div>
      <Main>
        <Navbar/>
      <Routes>
<Route exact path='/news' element={<News pageSize={8}  category="general"/>}/>


<Route exact path='/about' element={<About/>}/>




      </Routes>
      </Main>  
     </div>
    )
}

export default App
