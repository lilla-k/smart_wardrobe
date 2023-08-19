import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import NewClothModal from '../NewClothModal/NewClothModal';

import { Outlet } from "react-router-dom";
import { useState } from 'react';

import './Root.css'

function Root() {
  
  const [cloths, setCloths] = useState([{
    "id":1,
    "subCategory": "Long Sleeve T-shirts",
    "name": "Julie, single coloured T-shirt",
    "brand": "Only",
    "color": "purple",
    "material": "80% viscose, 20% polyamide",
    "purchaseYear": 2023,
    "purchaseMonth": 3,
    "price": 9500,
    "image": "/images/cloths/2023_03_07_Only_lila_hosszu_polo.avif",
    "favorite": false,
    "usage": 5
  },
  {
    "id": 2,
    "subCategory": "Long Sleeve T-shirts",
    "name": "Julie, single coloured T-shirt",
    "brand": "Only",
    "color": "green",
    "material": "80% viscose, 20% polyamide",
    "purchaseYear": 2023,
    "purchaseMonth": 3,
    "price": 9500,
    "image": "/images/cloths/2023_03_07_Only_zold_hosszu_polo.avif",
    "favorite": true,
    "usage": 4
  },
  {
    "id":3,
    "subCategory": "Short Sleeve T-shirts",
    "name": "leaf pattern T-shirt",
    "brand": "Only",
    "color": "pink",
    "material": "100% cotton",
    "purchaseYear": 2023,
    "purchaseMonth": 6,
    "price": 5300,
    "image": "/images/cloths/2023_06_28_Only_rozsaszin_polo_20230628.avif",
    "favorite": false,
    "usage": 2
  }]);

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