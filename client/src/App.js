import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharacterProvider } from './context/CharacterContext';
import { CharacterList } from './components/Character/CharacterList';
import AddCharacter from './components/Character/AddCharacter';
import Navbar from './components/UI/Navbar';
import ApiEndPoint from './context/ResourceType';
import CharacterDetails from './components/Character/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CharacterProvider>
        <Routes>
          <Route path='/' element={<h1>Homepage</h1>} />
          <Route
            path='/create/enemies'
            element={<AddCharacter resourceType={ApiEndPoint.ENEMY} />}
          />
          <Route path='/enemies' element={<CharacterList resourceType={ApiEndPoint.ENEMY} />} />
          <Route
            path='/enemies/:id'
            element={<CharacterDetails resourceType={ApiEndPoint.ENEMY} />}
          />
          <Route
            path='/create/players'
            element={<AddCharacter resourceType={ApiEndPoint.PLAYER} />}
          />
          <Route path='/players' element={<CharacterList resourceType={ApiEndPoint.PLAYER} />} />
          <Route
            path='/players/:id'
            element={<CharacterDetails resourceType={ApiEndPoint.PLAYER} />}
          />
        </Routes>
      </CharacterProvider>
    </BrowserRouter>
  );
}

export default App;
