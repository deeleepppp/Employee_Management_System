import React, { useEffect, useState } from 'react'

function Header({data}) {
const [username, setUsername] = useState()
useEffect(() => {
  if(!data){
    setUsername('Admin')
  }
  else{
    setUsername(data.name)
  }
}, [])
const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className=' font-semibold text-3xl'>{username} 👋</span> </h1>
        <button onClick={logOutUser} className='cursor-pointer bg-red-600 text-lg font-medium text-white rounded-sm px-3 py-2'>Log Out</button>
    </div>
  )
}

export default Header