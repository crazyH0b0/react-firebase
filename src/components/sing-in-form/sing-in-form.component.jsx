import React, { memo,useState, useContext } from 'react'
import { signInAuthUserWithEmailAndPassword, createUserDocFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { UserContext } from '../../context/user.context'
const SignInForm = memo(() => {

  const {setCurrentUser} = useContext(UserContext)
  const defaultFormFields = {
    email : '',
    password: '',
  }
  const [formFields , setFormFields] = useState(defaultFormFields)
  const { email, password} = formFields
  const handleChange = (e) => {
      const {name, value} = e.target
      setFormFields({...formFields, [name]: value})
    }
    const signInWithGoogle = async ()=> {
    let {user}=  await signInWithGooglePopup()
   
      await createUserDocFromAuth(user)

    }
    const handleSubmit = async (e) => {

             e.preventDefault()
             try {
              
        const {user} =      await signInAuthUserWithEmailAndPassword(email, password)
    
        setCurrentUser(user)
               setFormFields(defaultFormFields)
              } catch (error) {
                if(error.code === "auth/wrong-password"){
                  alert("incorrect password for email")
                }else if(error.code === "auth/user-not-found"){
                  alert("user-not-found")

                }
                else{
                  console.log(error);
                }
              
             }
    }
  return (
    <div className='w-[450px] flex flex-col '>
    <h2 className='my-2 mx-0 text-3xl font-bold'>Already have an account?</h2>
    <span>Sign in with your email and password</span>
  <form onSubmit={handleSubmit} >
    <FormInput label="Email" type="text" required  opts={{onChange:handleChange,name:"email",value:email, type:"email"}}/>
    <FormInput label="Password" type="text" required  opts={{onChange:handleChange,name:"password",value:password, type:"password"}}/>
   {/* <button type="submit" >Sign Up</button> */}
   <div className='flex justify-between'>
   <Button type="submit" bgColor="black"  >SIGN IN</Button>
   <Button type="button"  bgColor="blue" onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
   </div>
  </form>
    </div>
  )
})

export default SignInForm