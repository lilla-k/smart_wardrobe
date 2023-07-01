import './Category.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'

function Category() {

  return (
    <div className="Category">
        {categories.map((item, index) =>
        <CategoryCard
          key={item.index}
          categoryId={index+1}
          name={item.name}
          image={item.img}
        />)}
    </div>
  )
}

export default Category