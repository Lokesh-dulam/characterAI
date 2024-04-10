import {ICON} from "../utils/constants"
const Card = ({name,title}) => {
  return (
    <div className="text-white border border-white m-3 p-4 h-28 justify-center items-center rounded-xl w-80">
      <div className="flex">
            <img 
            className="h-20 w-24 rounded-md m-1"
            alt="image"
            src={ICON}/>
            <div className="p-4 items-center w-[200px]">
                <h3 className="font-bold text-ellipsis">{name}</h3>
                {/* <p>{title}</p> */}
                </div>
            </div>
            </div>
  )
}

export default Card