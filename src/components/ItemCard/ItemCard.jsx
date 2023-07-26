import './ItemCard.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';

function ItemCard(props){

  let categoryId=useParams().categoryId;
  let subCategoryId=useParams().subCategoryId;

    return(
      <div className="ItemCard">
        <Link to={`/categories/${categoryId}/${subCategoryId}/cloths/${props.id}`}>
          <div className="ItemCard-imageContainer">
            <img src={props.image} className="ItemCard-image" />
            <span className="ItemCard-favorite"><FontAwesomeIcon icon={faHeart} /></span>
            <div className="ItemCard-usage">{props.usage}</div>
          </div>
          <div className="ItemCard-name">{props.name}</div>
        </Link>
      </div>
    )
}

export default ItemCard