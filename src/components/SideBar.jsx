import {useSelector} from "react-redux"
const SideBar = () => {
    const isOpen=useSelector(store=>store.app.isOpen)
    if(!isOpen) return null 
  return (
    <div className="flex flex-col h-full w-2/12 bg-black text-white p-3 shadow-md shadow-white -m-3 ease-in-out duration-300">
        <h1 className="font-semibold p-3">Character.ai</h1>
        <button className="rounded-full bg-gray-800 text-white w-32 h-10">+ Create</button>
        <button className="bg-gray-800 text-white w-52 h-10 mt-3 pl-4 text-left rounded-lg">🔍 Discover</button>
    <div className="pt-4">
        <button className="rounded-3xl bg-white text-black w-11/12 h-10">Sign in</button>
    </div>    
</div>
  )
}

export default SideBar