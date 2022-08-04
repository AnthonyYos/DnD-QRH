import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharacterProvider } from './context/CharacterContext';
import { CharacterList } from './components/Character/CharacterList';
import AddCharacter from './components/Character/AddCharacter';
import Navbar from './components/UI/Navbar';
import CharacterType from './context/CharacterType';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CharacterProvider>
        <Routes>
          <Route path='/' element={<h1>Homepage</h1>} />
          <Route
            path='/create/enemies'
            element={<AddCharacter characterType={CharacterType.ENEMY} />}
          />
          <Route
            path='/create/players'
            element={<AddCharacter characterType={CharacterType.PLAYER} />}
          />
          <Route path='/enemies' element={<CharacterList characterType={CharacterType.ENEMY} />} />
          <Route path='/players' element={<CharacterList characterType={CharacterType.PLAYER} />} />
        </Routes>
      </CharacterProvider>
    </BrowserRouter>
  );
}

export default App;
