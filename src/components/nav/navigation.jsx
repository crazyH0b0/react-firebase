import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.scss'
const navigation = memo(() => {

  return (
    <div className='px-8'>
    <div className='flex w-full h-[70px] justify-between  items-center'>
<CrownLogo></CrownLogo>

<nav>
  <ul className='flex gap-4'>
    <li className='  uppercase active:border border-black rounded-md  p-2'>Home</li>
    <li className=' border border-black rounded-md  p-2 uppercase'>Shop</li>
    <li className=' border border-black rounded-md  p-2 uppercase'>Sign in</li>
  </ul>
</nav>
    </div>

    <Outlet></Outlet>
    </div>
  )
})

export default navigation