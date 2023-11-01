import React, { useState, useEffect } from 'react'
import axios from 'axios'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts/'

function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  useEffect(() => {
    console.log('USE EFFECT COMPONENT')
    axios.get(POST_URL + idFromButtonClick)
      .then(res => setPost(res.data))
      .catch(err => console.log(err))

  }, [idFromButtonClick])

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  console.log('COMPONENT RENDER')
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
    </div>
  )
}

export default DataFetching