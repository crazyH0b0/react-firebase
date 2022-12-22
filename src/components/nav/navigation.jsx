import React, { memo, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import './navigation.scss'
const navigation = memo(() => {
  const {currentUser} = useContext(UserContext)
  console.log(currentUser);
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