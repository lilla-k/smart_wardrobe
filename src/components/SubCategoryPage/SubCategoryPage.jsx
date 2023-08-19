import './SubCategoryPage.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'
import { useParams } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";


function SubCategoryPage() {
  

  let categoryId = useParams().categoryId;
  const selectedCategoryIndex = categories.findIndex((item) => item.name === categoryId);

  const cloths = useOutletContext();



  return (
    <div className="SubCategoryPage">
      <div className= "SubCategoryPage-title">{categoryId}</div>
      <div className="SubCategoryPage-cards">
        {categories[selectedCategoryIndex].subCategories.map((subCategory) =>
          <CategoryCard
            key={subCategory.name}
            categoryName={categoryId}
            subCategoryName={subCategory.name}
            image={subCategory.img}
            count={cloths.filter(cloth => cloth.subCategory===subCategory.name).length}
          />)}
      </div>
    </div>
  )
}

export default SubCategoryPage;