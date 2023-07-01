import './SubCategory.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'
import { useParams } from 'react-router-dom';

function SubCategory() {

  let categoryId = useParams().categoryId;
  const selectedCategoryIndex = categories.findIndex((item) => item.name === categoryId);


  return (
    <div className="SubCategory">
      <div className="SubCategory-cards">
        {categories[selectedCategoryIndex].subCategories.map((item) =>
          <CategoryCard
            key={item.name}
            name={item.name}
            image={item.img}
          />)}

      </div>

    </div>
  )
}

export default SubCategory;