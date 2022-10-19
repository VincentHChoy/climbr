import React from 'react'

function ListItem(props) {
  return (
      <li className='flex flex-row items-center justify-center font-comfortaa'>
        <div className='m-4 text-3xl font-bold'>{props.grade}</div>
        <main className='flex flex-col text-left m-4'>
          <h1 className='font-bold text-2xl text-left'>{props.name}</h1>
          <h2 className='text-base'>{props.location}, {props.sublocation}</h2>
        </main>
      </li>
  )
}

export default ListItem