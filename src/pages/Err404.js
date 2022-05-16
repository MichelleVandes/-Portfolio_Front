import React from 'react';
import Navbar from '../components/Navbar';
import "../Style/Err404.css";
import Img404 from './img404.jpg'

const Err404 = () => {


    return (
        <div className='err404'>
       <Navbar/> 
       <img className='photo' src={Img404} alt="" />
        </div>
    );
};

export default Err404;
