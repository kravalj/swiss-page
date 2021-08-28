import React from 'react';
import './styles/MainPage.css';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';



const MainPage = () => {

  return (
    <div className="App">
      <header className='App-header'>

        <Link to="/WelcomePage">
          <img src={Logo} className="App-logo" alt="logo" style={{ width: '1400px' }} />
        </Link>

      </header>
    </div>
  );
}

export default MainPage;