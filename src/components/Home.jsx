import {useDispatch} from "react-redux"
import {toogleMenu} from "../utils/appSlice"
import SideBar from "./SideBar"
import CardContainer from "./CardContainer"
const Home = () => {
    const dispatch=useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toogleMenu())
    }
  return (
    <div className="bg-black w-screen h-screen hover:cursor-pointer p-3">
    <div className="flex justify-between">
    <button
    onClick={()=>toggleMenuHandler()}
    >🔽</button>
    <div>
        <input type="search"
        placeholder="🔍  Search for Characters"
        className="rounded-full bg-gray-800 p-3 mr-80 mt-5 w-96 text-center"
        />
    </div>
    </div>
    <SideBar/>
    <div>
        <CardContainer/>
    </div>
    </div>
  )
}

export default Home