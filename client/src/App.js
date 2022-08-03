import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EnemyProvider } from './context/EnemyContext';
import { CharacterList } from './components/Character/CharacterList';
import AddCharacter from './components/Character/AddCharacter';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <EnemyProvider>
        <Routes>
          <Route path='/' element={<h1>Homepage</h1>} />
          <Route path='/create' element={<AddCharacter />} />
          <Route path='/enemies' element={<CharacterList type='enemies' />} />
          <Route path='/heroes' element={<CharacterList type='heroes' />} />
        </Routes>
      </EnemyProvider>
    </BrowserRouter>
  );
}

export default App;
