import Header from '../Header/Header'
import { Outlet } from "react-router-dom";

import './Root.css'

function Root() {
  

  return (
    <div className="Root">
      <Header />
      <Outlet/>
    </div>

  )
}

export default Root;