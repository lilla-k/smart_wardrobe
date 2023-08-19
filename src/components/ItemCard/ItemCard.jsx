import './ItemCard.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidfaHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularfaHeart } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'react-router-dom';

function ItemCard({brand, id, image, name, purchaseYear, price, favorite, usage}){

  let categoryId=useParams().categoryId;
  let subCategoryId=useParams().subCategoryId;

    return(
      <div className="ItemCard">
        <Link to={`/categories/${categoryId}/${subCategoryId}/cloths/${id}`}>
          <div className="ItemCard-imageContainer">
            <img src={image} className="ItemCard-image" />
            {favorite &&  <span className="ItemCard-favorite"><FontAwesomeIcon icon={solidfaHeart} /></span>}
            {!favorite && <span className="ItemCard-favorite"><FontAwesomeIcon icon={regularfaHeart} /></span>}
            <div className="ItemCard-usage">{usage}
              <span className="Itemcard-usage-tooltiptext">usage</span>
            </div>
          </div>
          <div className="ItemCard-details">
            <div className="ItemCard-name">{name}</div>
            <div className="ItemCard-price">
              <div>{price}</div><span>&nbsp;Ft</span>
            </div>
            <div className="ItemCard-date">{purchaseYear}</div>
          </div>
          
        </Link>
      </div>
    )
}

export default ItemCard