import React, { memo } from 'react'
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
const signIn = memo(() => {
  const logGoogleUser =async () => {
    const {user} = await signInWithGooglePopup()
   const userDocRef =await createUserDocFromAuth(user)
   console.log(userDocRef);
  }
  return (
    <>
    <div>sign-in.component</div>
    <button onClick={logGoogleUser}>Sign in With Google Popup</button>
    </>
  )
})

export default signIn