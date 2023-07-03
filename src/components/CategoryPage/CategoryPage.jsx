import './CategoryPage.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'

function CategoryPage() {

  return (
    <div className="CategoryPage">
        {categories.map(item =>
        <CategoryCard
          key={item.name}
          name={item.name}
          image={item.img}
        />)}
    </div>
  )
}

export default CategoryPage