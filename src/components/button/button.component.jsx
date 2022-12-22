import React, { memo } from 'react'

const Button= memo(({bgColor,children, ...props}) => {
  
  const BUTTON_TYPES = {
    'black' : 'bg-black hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black ',
    'blue' : 'bg-blue-500'
  }
  return (
    <button {...props} className={`${BUTTON_TYPES[bgColor]} min-w-[200px] flex items-center justify-center  text-white h-12 w-auto   `}>{children}</button>
  )
})

export default Button