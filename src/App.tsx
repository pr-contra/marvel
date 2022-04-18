import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Character from './pages/Character';
import Characters from './pages/Characters';
import './styles/global.css';

// Important links:
// Auth: https://developer.marvel.com/documentation/authorization
// Entities/Endpoints: https://developer.marvel.com/documentation/entity_types
// Image repo: https://developer.marvel.com/documentation/images

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/details/:id" element={<Character />} />
        <Route path="/" element={<Navigate to="/characters" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
