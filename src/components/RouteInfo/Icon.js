import React, { useState } from 'react'

function Icon(props) {
  const [openIcon, setOpenIcon] = useState(props.action === "true")
  console.log(props.action);
  const icon = openIcon ? props.icon2 : props.icon1

  return (
    <div onClick={()=>{
      setOpenIcon(!openIcon)}}>
      {icon}
    </div>
  )
}

export default Icon