import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useParams, useOutletContext } from 'react-router-dom';

import './Breadcrumbs.css'


function Breadcrumbs({cloths}) {

  const categoryId = useParams().categoryId;
  const subCategoryId = useParams().subCategoryId;
  const clothId = useParams().clothId;
  const selectedCloth = cloths.find(item => item._id === clothId)

  return (
    <div className="Breadcrumbs">
      {categoryId &&
        <div>
          <Link to={`/`} >Cloths</Link>
          <span className="Breadcrumbs-arrow"> <FontAwesomeIcon icon={faAngleRight} /> </span>
          <Link to={`categories/${categoryId}`} > <div>{categoryId}</div> </Link>
        </div>
      }
      {subCategoryId && 
      <div>
        <span className="Breadcrumbs-arrow"> <FontAwesomeIcon icon={faAngleRight} /> </span>
        <Link to={`categories/${categoryId}/${subCategoryId}`} > <div>{subCategoryId}</div> </Link>
      </div>
      }
      {clothId && 
      <div>
        <span className="Breadcrumbs-arrow"> <FontAwesomeIcon icon={faAngleRight} /> </span>
        <div>{selectedCloth.name}</div>
      </div>
      }
      
    </div>
  )
}

export default Breadcrumbs