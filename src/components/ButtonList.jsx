import Button from "./Button"

const ButtonsList = () => {
    const list=["Helpers","Anime Game Charcters","Games","Anime","Game Characters","Comedy","Books","Sports","Hockey","All","Live","Sports","Cricket","Football","Music","Live","Sports","Hockey"]
  return (
    <div className="flex overflow-scroll w-screen whitespace-nowrap scroll-smooth scrollbar-hide">
        {list.map((i,index)=><Button key={index} name={i}/>)}
    </div>
  )
}
export default ButtonsList