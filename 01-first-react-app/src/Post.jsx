import React from 'react'
import { useState } from 'react'

const Post = () => {
    const [like, setLike] = useState(0);

    const handleLike = ()=>{
        setLike(like + 1);
    }
  return (
    <div>
      <button onClick={handleLike}>👍 {like}</button>
      
    </div>
  )
}

export default Post
