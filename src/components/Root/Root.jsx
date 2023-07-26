import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import { Outlet } from "react-router-dom";

import './Root.css'

function Root() {
  

  return (
    <div className="Root">
      <Header />
      <Breadcrumbs />
      <Outlet/>
    </div>

  )
}

export default Root;