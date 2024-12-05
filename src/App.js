import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';

const App = () => {
  return (
    <BrowserRouter>

        <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart' element={<CardsDetails />} />
        </Routes>
        
    </BrowserRouter>
  );
};

export default App;
