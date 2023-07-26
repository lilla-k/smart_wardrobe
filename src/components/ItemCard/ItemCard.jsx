import './ItemCard.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ItemCard(props){
    return(
      <div className="ItemCard">
        <Link to={`/cloths/${props.id}`}>
          <div className="ItemCard-imageContainer">
            <img src={props.image} className="ItemCard-image" />
            <span className="ItemCard-favorite"><FontAwesomeIcon icon={faHeart} /></span>
            <div className="ItemCard-usage">{props.usage}</div>
          </div>
          <div className="ItemCard-type">{props.type}</div>
        </Link>
      </div>
    )
}

export default ItemCard