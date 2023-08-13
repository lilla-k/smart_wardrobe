import './CategoryCard.css'
import cloths from '../../cloths.js'

import { Link } from "react-router-dom";

function CategoryCard(props) {
 
  const subCategoryItemsNumber = cloths.filter(element => {

    return element.subCategory===props.subCategoryName}).length;

  return (
    <div className="CategoryCard">
      <Link to={`/categories/${props.categoryName}/${props.subCategoryName || ""}`}>
        <img src={props.image} className="CategoryCard-image" />
        <div className="CategoryCard-name">{props.subCategoryName || props.categoryName}</div>
        {props.subCategoryName && <div className="CategoryCard-itemsNumber">{subCategoryItemsNumber} items</div>}
      </Link>
    </div>

  )
}

export default CategoryCard;