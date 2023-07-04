import Header from '../Header/Header'
import Breadscrumbs from '../Breadscrumbs/Breadscrumbs'
import { Outlet } from "react-router-dom";

import './Root.css'

function Root() {
  

  return (
    <div className="Root">
      <Header />
      <Breadscrumbs />
      <Outlet/>
    </div>

  )
}

export default Root;