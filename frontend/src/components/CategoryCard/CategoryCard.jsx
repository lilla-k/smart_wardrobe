import './CategoryCard.css'

import { Link } from "react-router-dom";

function CategoryCard({categoryName, subCategoryName, image, count}) {


  return (
    <div className="CategoryCard">
      <Link to={`/categories/${categoryName}/${subCategoryName || ""}`}>
        <img src={image} className="CategoryCard-image" />
        <div className="CategoryCard-name">{subCategoryName || categoryName}</div>
        {subCategoryName && <div className="CategoryCard-itemsNumber">{count} items</div>}
      </Link>
    </div>

  )
}

export default CategoryCard;