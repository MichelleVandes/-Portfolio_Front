import React from 'react';
import './LogiqueModale'
import { useState, useEffect } from 'react';
import LogiqueModale from './LogiqueModale';

const Modal = (props) => {

    const {modalIsOpen, toggle} = LogiqueModale


    return (
      <div>
        <button onClick={toggle}>X</button>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    );
};

export default Modal;