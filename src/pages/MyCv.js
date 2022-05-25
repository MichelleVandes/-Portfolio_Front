import React from 'react';
import Navbar from '../components/Navbar';
import '../Style/MyCv.css'
import Cv from "./Vandescrick_Michelle_CV.jpg";

const MyCv = () => {
    return (
      <div>
        <Navbar />
        <p>
          <img src={Cv} alt="Vandeschrick_Michelle" />
        </p>
      </div>
    );
};

export default MyCv;