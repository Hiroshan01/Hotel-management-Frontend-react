import React from 'react'

function UserTag(props) {
    
  return (
    <div>
      <img src={props.urLink} alt=''
      style={{ width: '50px' }}></img>
      <h2>{props.name}</h2>
    </div>
  )
}

export default UserTag
