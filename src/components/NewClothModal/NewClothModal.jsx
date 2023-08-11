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
                    <div className="NewClothModal-title">Add a new cloth</div>
                    <select onChange={event=>setSelectedCategory(event.target.value)} >
                        <option value="Category">Category</option>
                        {categories.map((category) => <option value={category.name} key={category.name}>{category.name}</option>)}
                    </select>
                    {selectedCategoryIndex >-1 && categories[selectedCategoryIndex].subCategories!= undefined &&
                    <select>
                        <option value="Subcategory" hidden>Subcategory</option>
                        {categories[selectedCategoryIndex].subCategories?.map(subcategory => <option key={subcategory.name}>{subcategory.name}</option>)}
                    </select>}
                    <div className="NewClothModal-inputs">
                        <input placeholder="brand"/>
                        <input placeholder="type" />
                        <input placeholder="color" />
                        <input placeholder="material" />
                        <input type="month" />
                        <input placeholder="price"/>
                    </div>
                    <div className="NewClothModal-photo">
                        <label>Upload a photo about your cloth:</label>
                        <input type="file"/>
                    </div>
                    <input className="NewClothModal-submit" type="submit"/>
                </div>
            </div>

            
        </div>
    )
}

export default NewClothModal