import React from 'react'
import Discussion from './Discussion'

const Discussions = ({discussions}) => {
  console.log(discussions)

  return (
    <ul>
      {discussions.map((discussion, index)=>{
        return <Discussion discussion={discussion} key={index} />
      })}
    </ul>
  )
}

export default Discussions