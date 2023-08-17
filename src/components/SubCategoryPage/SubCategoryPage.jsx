import './SubCategoryPage.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import categories from '../../categories.js'
import { useParams } from 'react-router-dom';
// import { useState } from 'react';


function SubCategoryPage() {
  

  let categoryId = useParams().categoryId;
  const selectedCategoryIndex = categories.findIndex((item) => item.name === categoryId);

  // const subCategoryItemsNumber = cloths.filter(element => {

  //   return element.subCategory===props.subCategoryName}).length;

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
            count={3}
          />)}
      </div>
    </div>
  )
}

export default SubCategoryPage;