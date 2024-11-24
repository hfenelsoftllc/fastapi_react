import React from 'react';
import './App.css';
import VergieList from './components/Vergies';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Vergies and Fruits Management App</h1> 
      </header>
      <main>
        <VergieList />
      </main>
    </div>
  );
};

export default App;
