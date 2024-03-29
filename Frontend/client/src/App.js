import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharacterList } from './components/Character/CharacterList';
import AddCharacter from './components/Character/AddCharacter';
import Navbar from './components/UI/Navbar';
import UpdateCharacter from './components/Character/UpdateCharacter';
import CharacterType from './util/CharacterType';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/create/enemies'
          element={<AddCharacter characterType={CharacterType.ENEMY} />}
        />
        <Route path='/enemies' element={<CharacterList characterType={CharacterType.ENEMY} />} />
        <Route
          path='/enemies/:id'
          element={<UpdateCharacter characterType={CharacterType.ENEMY} />}
        />
        <Route
          path='/create/players'
          element={<AddCharacter characterType={CharacterType.PLAYER} />}
        />
        <Route path='/players' element={<CharacterList characterType={CharacterType.PLAYER} />} />
        <Route
          path='/players/:id'
          element={<UpdateCharacter characterType={CharacterType.PLAYER} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
