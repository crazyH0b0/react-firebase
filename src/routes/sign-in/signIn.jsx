import React, { memo } from 'react'

import SignUpForm from '../../components/sing-up-form/sign-up-form.component'
import SignInForm from '../../components/sing-in-form/sing-in-form.component'
const signIn = memo(() => {

  return (
    <div className='flex justify-between max-w-5xl my-[30px] mx-auto'>
<SignInForm></SignInForm>
<SignUpForm></SignUpForm>
    </div>
  )
})


export default signIn