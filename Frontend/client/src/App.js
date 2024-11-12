import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharacterList } from './components/Character/CharacterList';
import AddCharacter from './components/Character/AddCharacter';
import Navbar from './components/UI/Navbar';
import UpdateCharacter from './components/Character/UpdateCharacter';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<CharacterList />} />
        <Route path='/create/characters' element={<AddCharacter />} />
        <Route path='/characters/:id' element={<UpdateCharacter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
