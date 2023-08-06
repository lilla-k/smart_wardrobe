import './NewClothModal.css'

function NewClothModal(props){

    const closeHandler=(event)=>{
        if(event.target.className==="NewClothModal-backdrop"){
            props.onClose();
        }
    }

    return(
        <div>
            <div className="NewClothModal-backdrop" onClick= {closeHandler}>
                <div className="NewClothModal-modal">
                <div className="NewClothModal-closeButton" onClick= {props.onClose}>x</div>
                <div>Choose category:</div>
        
                <div>Choose subcategory:</div>

            </div>
            </div>

            
        </div>
    )
}

export default NewClothModal