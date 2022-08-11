import React from 'react';         
import Portfolio from './Pages/Portfolio';    
import Header from './Pages/Header';
import './main.css';

function App() {
  return (
    <div>
      <Header className="header"/>
      <Portfolio/>
    </div>
  );
}

export default App;
