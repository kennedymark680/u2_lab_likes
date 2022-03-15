import { useState } from "react"


const Likes = () => {

  const [totalLikes, setTotalLikes] = useState(0)

  const increaseLikes = () => {
    let like = totalLikes + 1
    setTotalLikes(like)
  }

  return (
    <button 
    text={totalLikes}
    onClick={increaseLikes}
    >
      {totalLikes}
    </button>
  ) 
}

export default Likes