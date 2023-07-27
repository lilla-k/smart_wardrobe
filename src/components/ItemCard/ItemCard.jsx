import './ItemCard.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidfaHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularfaHeart } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'react-router-dom';

function ItemCard(props){

  let categoryId=useParams().categoryId;
  let subCategoryId=useParams().subCategoryId;

    return(
      <div className="ItemCard">
        <Link to={`/categories/${categoryId}/${subCategoryId}/cloths/${props.id}`}>
          <div className="ItemCard-imageContainer">
            <img src={props.image} className="ItemCard-image" />
            {props.favorite &&  <span className="ItemCard-favorite"><FontAwesomeIcon icon={solidfaHeart} /></span>}
            {!props.favorite && <span className="ItemCard-favorite"><FontAwesomeIcon icon={regularfaHeart} /></span>}
            <div className="ItemCard-usage">{props.usage}</div>
          </div>
          <div className="ItemCard-name">{props.name}</div>
        </Link>
      </div>
    )
}

export default ItemCard