import { useState } from "react"
import LikeTotal from "./LikeTotal"


const Likes = () => {

  const [totalLikes, setTotalLikes] = useState(0)

  const increaseLikes = () => {
    let like = totalLikes + 1
    setTotalLikes(like)
  }

  const decreaseLikes = () => {
    let unlike = totalLikes -1
    setTotalLikes(unlike)
  }

  return (
    <div>
      <LikeTotal totalLikes={totalLikes}/>
      <button onClick={increaseLikes}>+</button>
      <button onClick={decreaseLikes}>-</button>
    </div>
   
  ) 
}

export default Likes