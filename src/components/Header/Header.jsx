import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

import {useState} from 'react';
import NewClothModal from '../NewClothModal/NewClothModal'

function Header() {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal=()=> {
    setOpenModal(true)
  }

  return (
    <div className="Header">
      <div className="Header-container">
        <div className="Header-title">Smart Wardrobe</div>
        <div className="Header-logo">
          <span className="Header-favorite">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="Header-chart">
            <FontAwesomeIcon icon={faChartLine} />
          </span>
          <span className="Header-plus" onClick={handleOpenModal}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        {/* <div>Login</div> */}
      </div>
      {openModal && <NewClothModal onClose={()=>setOpenModal(false)}/>}
    </div>
  )

}

export default Header;