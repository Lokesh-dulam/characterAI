import { API } from "../utils/constants"
import { useEffect,useState } from "react"
import Card from "./Card"
import ButtonsList from "./ButtonList"
const CardContainer = () => {
  const[info,setInfo]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const data=await fetch(API)
        const json=await data.json()
        setInfo(json[0]?.result?.data?.json?.characters)
    }
  return (
    <div className="max-w-[1240px] h-svh mx-auto px-4">
    <div className="flex flex-col">
      <h1 className="font-bold text-white m-2 pl-3">For you</h1>
      <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide h-full w-auto">
      {info.map((i,index)=><Card key={index} {...i}/>)}</div>
    </div>
    <div className="flex flex-col">
      <h1 className="font-bold text-white m-2 pl-3">Try these</h1>
      <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide h-full w-auto">
      {info.map((i,index)=><Card key={index} {...i}/>)}</div>
      <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide h-full w-auto">
      {info.map((i,index)=><Card key={index} {...i}/>)}</div>
    </div>
    <div className="flex flex-col">
      <h1 className="font-bold text-white m-2 pl-3">Featured</h1>
      <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide h-full w-auto">
      {info.map((i,index)=><Card key={index} {...i}/>)}
      </div>
      <ButtonsList/>
    </div>
    </div>   
  )
}

export default CardContainer