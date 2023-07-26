import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useHref } from 'react-router-dom';

import './Breadcrumbs.css'


function Breadscrumbs() {

  let categoryId = useParams().categoryId;
  console.log(useHref()==="/")

  return (
    <div className="Breadcrumbs">
      {useHref()!=="/"  && <Link to={`/`} >Cloths</Link>}
      {useHref()!=="/"  && <span className="Breadcrumbs-arrow"> <FontAwesomeIcon icon={faAngleRight} /> </span>}
      <div>{categoryId}</div>
    </div>
  )
}

export default Breadscrumbs