import React from 'react'
import './userData.css'

function UserTag(props) {
    
  return (
    <div className='user-data-div'>
      <img src={props.imgLink} alt=''
      style={{ width: '50px' }}></img>
      <h2>{props.name}</h2>
    </div>
  )
}

export default UserTag
