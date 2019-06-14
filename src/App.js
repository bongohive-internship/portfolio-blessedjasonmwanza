import React from 'react';
import './App.css';
import  './css/Contact.css';
import './css/FavoriteLangues.css';
import TopNav from './components/TopNav';
import Contact from './components/contact';
import FavoriteLangues from './components/favorite-languages';
function App() {
  return (
    <div className="App">
      <span className="margin" />
      < TopNav />
      < FavoriteLangues />
      < Contact />
    </div>
  );
}

export default App;
