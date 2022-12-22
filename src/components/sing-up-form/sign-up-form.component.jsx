import React, { memo,useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const SignUpForm = memo(() => {
  const defaultFormFields = {
    displayName : '',
    email : '',
    password: '',
    confirmPassword: ''
  }
  const [formFields , setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields
  const handleChange = (e) => {
      const {name, value} = e.target
      setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = async (e) => {
             e.preventDefault()
             if(password !== confirmPassword) {
              alert("passwords do not match ") 
              return
             }
             try {
              
               const {user} = await createAuthUserWithEmailAndPassword(email, password)
              
               await createUserDocFromAuth(user, { displayName })
               setFormFields(defaultFormFields)
              } catch (error) {
                if(error.code === "auth/email-already-in-use"){
                  alert("can not create user, emial already in use")
                }else{
                  console.log(error);
                }
              
             }
    }
  return (
    <div className='w-[380px] flex flex-col '>
    <h2 className='my-2 mx-0 text-3xl font-bold'>Don't have an account?</h2>
    <span>Sign up with your email and password</span>
  <form onSubmit={handleSubmit} >
    <FormInput label="DisplayName"  required  opts={{onChange:handleChange,name:"displayName",value:displayName ,type:"text"}}/>
    <FormInput label="Email" type="text" required  opts={{onChange:handleChange,name:"email",value:email, type:"email"}}/>
    <FormInput label="Password" type="text" required  opts={{onChange:handleChange,name:"password",value:password, type:"password"}}/>
    <FormInput label="ConfirmPassword" type="text" required  opts={{onChange:handleChange,name:"confirmPassword",value:confirmPassword, type:"password"}}/>
   <Button bgColor="black" >SIGN UP</Button>
  </form>
    </div>
  )
})

export default SignUpForm