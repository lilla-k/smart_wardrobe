import './ItemPage.css'
import ItemCard from '../ItemCard/ItemCard.jsx'
import cloths from '../../cloths.js'
import { useParams } from 'react-router-dom';


function ItemPage() {

  let subCategoryId = useParams().subCategoryId;
  const selectedCloths = cloths.filter(cloth=> cloth.subCategory===subCategoryId);

  return (
    <div className="ItemPage">
      {selectedCloths.map(item =>
        <ItemCard
          brand={item.brand}
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          purchaseYear={item.purchaseYear}
          price={item.price}
          favorite={item.favorite}
          usage={item.usage}
        />)}
      </div>
  )
}

export default ItemPage