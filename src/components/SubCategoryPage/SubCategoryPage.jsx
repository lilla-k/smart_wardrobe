import './SubCategoryPage.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function SubCategoryPage() {

  let categoryId = useParams().categoryId;
  const selectedCategoryIndex = categories.findIndex((item) => item.name === categoryId);


  return (
    <div className="SubCategoryPage">
      <div className="SubCategoryPage-cards">
        {categories[selectedCategoryIndex].subCategories.map((item) =>
          <CategoryCard
            key={item.name}
            name={item.name}
            image={item.img}
          />)}
      </div>
      <Link to={`/`} className="SubCategoryPage-backIcon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </div>
  )
}

export default SubCategoryPage;