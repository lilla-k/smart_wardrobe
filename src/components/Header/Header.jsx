import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <div className="Header-Pacifico">Smart Closet</div>
        <div className="Header-logo">
          <span className="Header-favorite">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="Header-chart">
            <FontAwesomeIcon icon={faChartLine} />
          </span>
          <span className="Header-plus">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        {/* <div>Login</div> */}
      </div>

    </div>
  )

}

export default Header;