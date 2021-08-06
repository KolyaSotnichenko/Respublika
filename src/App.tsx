import React from 'react';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
import Header from './components/Header';
import MainPage from './components/MainPage';
import RegisterPrev from './components/RegisterPrev';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="devider">
        <div className="container">
          <MainPage />
        </div>
      </div>
      <RegisterPrev />
    </div>
  );
}

export default App;
