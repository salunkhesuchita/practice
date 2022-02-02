import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AppContextProvider';
import Footer from './Routes/Footer';
import { Navbar } from './Routes/Navbar';
import Rout from './Routes/Route';
import OutsideClickHandler from 'react-outside-click-handler';

function App() {
  const { hamBurgerHandler } = useContext(AuthContext);
  const handleHamBurger = () => {
    hamBurgerHandler()
  }
  return (
    <div className="App">
      <Navbar />
      <Rout />
      <Footer />
      <OutsideClickHandler
        onOutsideClick={handleHamBurger}
      >
      </OutsideClickHandler>
    </div>
  );
}

export default App;
