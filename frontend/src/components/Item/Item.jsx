import './Item.css'
import { useParams, useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidfaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularfaHeart } from '@fortawesome/free-regular-svg-icons'


function Item() {

	const cloths = useOutletContext();
	const clothId = useParams().clothId;
	const selectedCloth = cloths.find(item => item._id === clothId);
	return (
		<div className="Item">
			<div className="Item-imageContainer">
				<img src={selectedCloth.image} className="Item-image" />
				{selectedCloth.favorite && <span className="Item-favorite"><FontAwesomeIcon icon={solidfaHeart} /></span>}
				{!selectedCloth.favorite && <span className="Item-favorite"><FontAwesomeIcon icon={regularfaHeart} /></span>}
			</div>
			<div className="Item-info">
				<div className="Item-brand">{selectedCloth.brand}</div>
				<div className="Item-name">{selectedCloth.name}</div>
				<div className="Item-details">
					<div>Color: <span>{selectedCloth.color}</span></div>
					<div>Year Purchased: <span>{selectedCloth.purchaseYear}</span></div>
					<div>Material: <span>{selectedCloth.material}</span></div>
					<div>Price: <span>{selectedCloth.price}</span> Ft</div>
					<div>Usage: <span>{selectedCloth.usage}</span></div>
				</div>
			</div>

		</div>
	)
}

export default Item;