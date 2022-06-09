import React from 'react';
import Navbar from '../components/Navbar';
import "../Style/Err404.css";
//import Img404 from '/img404.jpg'

const Err404 = () => {


    return (
      <div>
        <Navbar />
     
        <div className="err404">
          <img className="img404" src="/Img404.jpg" alt="" />
        </div>
      </div>
    );
};

export default Err404;
