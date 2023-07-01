import './CategoryCard.css'

import { Link } from "react-router-dom";

function CategoryCard(props) {
  return (
    <div className="CategoryCard">
      <Link to={`categories/${props.categoryId}`}>
        <img src={props.image} className="CategoryCard-image" />
        <div className="CategoryCard-name">{props.name}</div>
      </Link>
    </div>

  )
}

export default CategoryCard;