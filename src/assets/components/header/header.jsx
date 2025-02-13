import React from 'react'
import UserTag from '../userData/userData'


function Header() {
  return (
    <div className="width-full bg-blue-500 flex h-[100px]
    relative items-center">
      <h1 className='text-[30px] text-blue-200'>Leonine Villa</h1>
  
      <UserTag imgLink="https://img.freepik.com/free-psd/3d-rendering-contact-ui-icon_23-2150838975.jpg?t=st=1739290883~exp=1739294483~hmac=eb8764643aff333a156ce97049f929b7db2e69ad41d7f87911627e6bf9fee6e1&w=740" name="Madusanka"/>
      
    </div>
  )
}

export default Header
