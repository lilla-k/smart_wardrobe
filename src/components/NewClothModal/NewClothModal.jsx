import './NewClothModal.css'
import categories from '../../categories';
import {useState} from 'react';

function NewClothModal(props){

    const [selectedCategory, setSelectedCategory] = useState("");
    
    const closeHandler=(event)=>{
        if(event.target.className==="NewClothModal-backdrop"){
            props.onClose();
        }
    }
    
    const selectedCategoryIndex=categories.findIndex((category) => category.name === selectedCategory);
    console.log(selectedCategoryIndex);

    return(
        <div>
            <div className="NewClothModal-backdrop" onClick= {closeHandler}>
                <div className="NewClothModal-modal">
                <div className="NewClothModal-closeButton" onClick= {props.onClose}>x</div>
                <label>Choose category:</label>
                <select onChange={event=>setSelectedCategory(event.target.value)}>
                    <option value=""></option>
                    {categories.map((category) => <option value={category.name}>{category.name}</option>)}
                </select>
                <label>Choose subcategory:</label>
                <select>
                    <option value=""></option>
                    {selectedCategoryIndex >-1 && categories[selectedCategoryIndex].subCategories?.map(subcategory => <option>{subcategory.name}</option>)}
                </select>
            </div>
            </div>

            
        </div>
    )
}

export default NewClothModal