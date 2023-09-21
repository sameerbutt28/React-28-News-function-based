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
<Route exact path='/news' element={<News pageSize={8}  category="all"/>}/>
<Route exact path='/business' element={<News pageSize={8}  category="business"/>}/>
<Route exact path='/business' element={<News pageSize={8}  category="business"/>}/>
<Route exact path='/entertainment' element={<News pageSize={8}  category="entertainment"/>}/>
<Route exact path='/general' element={<News pageSize={8}  category="general"/>}/>
<Route exact path='/health' element={<News pageSize={8}  category="health"/>}/>
<Route exact path='/science' element={<News pageSize={8}  category="science"/>}/>
<Route exact path='/sports' element={<News pageSize={8}  category="sports"/>}/>
<Route exact path='/business' element={<News pageSize={8}  category="business"/>}/>
<Route exact path='/technology' element={<News pageSize={8}  category="technology"/>}/>



<Route exact path='/about' element={<About/>}/>




      </Routes>
      </Main>  
     </div>
    )
}

export default App
