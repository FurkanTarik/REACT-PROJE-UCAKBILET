import React from 'react';
import giphyImage from '../assets/giphy.gif';
import giphy2 from '../assets/giphy 2.gif';
import giphy3 from '../assets/giphy3.gif';
import giphy4 from '../assets/giphy4.gif';
import giphy5 from '../assets/giphy5.gif';

import './Home.css';

const Home = () => {
  return (
    <div className="site-layout-content">
      <div className="home-content">
        <h1 className="home-title">UÇAK BİLET SİSTEMİ</h1>
        <p className="home-description">
          Bu platformda uçak biletlerinizi kolayca rezerve edebilir ve seyahat planlarınızı yönetebilirsiniz.
        </p>
        <img src={giphyImage} alt="GIF" className="giphy-image" />
      </div>
      <img src={giphy2} alt="GIF2" className="corner-image aj" />
      <img src={giphy3} alt="GIF3" className="corner-image ps" />
      <img src={giphy4} alt="GIF4" className="corner-image sx" />
      <img src={giphy5} alt="GIF" className="corner-image thy" />
    </div>
  );
};

export default Home;
