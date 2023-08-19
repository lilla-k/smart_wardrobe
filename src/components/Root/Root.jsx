import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import NewClothModal from '../NewClothModal/NewClothModal';

import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

import './Root.css'

function Root() {

  const [cloths, setCloths] = useState([]);
  
  async function loadCloths () {
    const response = await fetch("http://localhost:3001/api/cloths");
    const data = await response.json();
    setCloths(data);
  }

  useEffect(() => {
    loadCloths();
  }, []);


  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Root">
      <Header openModalHandler={()=>setOpenModal(true)}/>
      <Breadcrumbs />
      <Outlet
        context= {cloths}
      />
      {openModal && <NewClothModal onClose={()=>setOpenModal(false)}/>}
    </div>

  )
}

export default Root;