import React from 'react'


interface Props{
    params:{id:number}
}

const UserDetailPage = ({params:{id}}:Props) => {
  return (
    <div className='text-black'>UserDetailPage {id} </div>
  )
}

export default UserDetailPage