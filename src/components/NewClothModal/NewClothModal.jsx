import './NewClothModal.css'
import categories from '../../categories';
import {useState} from 'react';

function NewClothModal({onClose}){

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [brand, setBrand] =useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");
    const [material, setMaterial] = useState("");
    const [date, setDate] = useState(null);
    const [price, setPrice] = useState(null);

    const cloth={
        id: new Date().getTime(),
        subCategory: selectedSubcategory, 
        name: type, 
        brand: brand,
        color: color,
        material: material,
        purchaseYear: date && parseInt(date.slice(0,4), 10),
        purchaseMonth: date && parseInt(date.slice(5,7), 10),
        price: price,
        favorite: false,
        usage: 0
    }

    
    async function postCloth() {
        const response = await fetch('http://localhost:3001/api/cloths', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cloth)
        });
        if (response.status === 200) {
          console.log("uploaded");
          console.log(date);
          console.log(JSON.stringify(cloth));
        } else {
          console.log("failed to upload")
        }
    }

    const closeHandler=(event)=>{
        if(event.target.className==="NewClothModal-backdrop"){
            onClose();
        }
    }

    const submitHandler=() => {
        postCloth();
        onClose();
    }
    
    const selectedCategoryIndex=categories.findIndex((category) => category.name === selectedCategory);

    return(
        <div>
            <div className="NewClothModal-backdrop" onClick= {closeHandler}>
                <div className="NewClothModal-modal">
                    <div className="NewClothModal-closeButton" onClick= {onClose}>x</div>
                    <div className="NewClothModal-title">Add a new cloth</div>
                    <select onChange={event=>setSelectedCategory(event.target.value)} >
                        <option value="Category">Category</option>
                        {categories.map((category) => <option value={category.name} key={category.name}>{category.name}</option>)}
                    </select>
                    {selectedCategoryIndex >-1 && categories[selectedCategoryIndex].subCategories!= undefined &&
                    <select onChange={event=>setSelectedSubcategory(event.target.value)}>
                        <option value="Subcategory" hidden>Subcategory</option>
                        {categories[selectedCategoryIndex].subCategories?.map(subcategory => <option key={subcategory.name}>{subcategory.name}</option>)}
                    </select>}
                    <div className="NewClothModal-inputs">
                        <input placeholder="brand" onChange={event=>setBrand(event.target.value)}/>
                        <input placeholder="type" onChange={event=>setType(event.target.value)}/>
                        <input placeholder="color" onChange={event=>setColor(event.target.value)}/>
                        <input placeholder="material" onChange={event=>setMaterial(event.target.value)}/>
                        <input type="month" onChange={event=>setDate(event.target.value)}/>
                        <input placeholder="price" onChange={event=>setPrice(parseInt(event.target.value, 10))}/>
                    </div>
                    <div className="NewClothModal-photo">
                        <label>Upload a photo about your cloth:</label>
                        <input type="file"/>
                    </div>
                    <input className="NewClothModal-submit" type="submit" onClick={submitHandler}/>
                </div>
            </div>

            
        </div>
    )
}

export default NewClothModal