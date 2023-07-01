import './Category.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'

function Category() {

  return (
    <div className="Category">
        {categories.map(item =>
        <CategoryCard
          key={item.name}
          name={item.name}
          image={item.img}
        />)}
    </div>
  )
}

export default Category