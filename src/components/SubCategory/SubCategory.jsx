import './SubCategory.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'
import { useParams } from 'react-router-dom';

function SubCategory() {

  let categoryId=useParams().categoryId;
  console.log(categories[categoryId-1].subCategories);

  return (
    <div className="Category">
        {categories[categoryId-1].subCategories.map((item, index) =>
        <CategoryCard
          key={item.index}
          name={item.name}
          image={item.img}
        />)}
    </div>
  )
}

export default SubCategory;