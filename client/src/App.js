import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharacterList } from './components/Character/CharacterList';
import AddCharacter from './components/Character/AddCharacter';
import Navbar from './components/UI/Navbar';
import ApiEndPoint from './util/ResourceType';
import UpdateCharacter from './components/Character/UpdateCharacter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>} />
        <Route path='/create/enemies' element={<AddCharacter resourceType={ApiEndPoint.ENEMY} />} />
        <Route path='/enemies' element={<CharacterList resourceType={ApiEndPoint.ENEMY} />} />
        <Route path='/enemies/:id' element={<UpdateCharacter resourceType={ApiEndPoint.ENEMY} />} />
        <Route
          path='/create/players'
          element={<AddCharacter resourceType={ApiEndPoint.PLAYER} />}
        />
        <Route path='/players' element={<CharacterList resourceType={ApiEndPoint.PLAYER} />} />
        <Route
          path='/players/:id'
          element={<UpdateCharacter resourceType={ApiEndPoint.PLAYER} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
