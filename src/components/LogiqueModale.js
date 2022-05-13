import {useState} from 'react';

const LogiqueModale = () => {

  const [modalIsOpen, setModalIsOpen] = useState(true);
  const toggle = () => setModalIsOpen(!modalIsOpen);

  return {modalIsOpen, toggle};
};

export default LogiqueModale;