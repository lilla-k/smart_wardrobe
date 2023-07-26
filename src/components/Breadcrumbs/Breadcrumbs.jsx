import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import './Breadcrumbs.css'


function Breadcrumbs() {

  let categoryId = useParams().categoryId;
  let subCategoryId = useParams().subCategoryId;
  let clothId = useParams().clothId;

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
        <div>{clothId}</div>
      </div>
      }
      
    </div>
  )
}

export default Breadcrumbs