import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";
 

export default function Root() {
  return (
    <div className="mx-auto container">
 
        <NavBar></NavBar>
        <Outlet></Outlet>
      
    </div>
  )
}
