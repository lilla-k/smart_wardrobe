import './SubCategoryPage.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'
import { useParams } from 'react-router-dom';


function SubCategoryPage() {

  let categoryId = useParams().categoryId;
  const selectedCategoryIndex = categories.findIndex((item) => item.name === categoryId);

  return (
    <div className="SubCategoryPage">
      <div className= "SubCategoryPage-title">{categoryId}</div>
      <div className="SubCategoryPage-cards">
        {categories[selectedCategoryIndex].subCategories.map((item) =>
          <CategoryCard
            key={item.name}
            categoryName={categoryId}
            subCategoryName={item.name}
            image={item.img}
          />)}
      </div>
    </div>
  )
}

export default SubCategoryPage;