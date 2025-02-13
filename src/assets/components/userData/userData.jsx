import React from 'react'


function UserTag(props) {
    
  return (
    <div className='user-data-div'>
      <img src={props.imgLink} alt=''
     ></img>
      <span>{props.name}</span>
    </div>
  )
}

export default UserTag
