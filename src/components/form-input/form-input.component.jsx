import React, { memo } from 'react'
import "./a.scss"

const FormInput= memo(({label, opts}) => {
  return (
    <div>
 { label && (
  <div className='group'>
   <input  id={label} type="text" className='form-input' {...opts}/>
   
   <label className={`${opts.value.length>0 ? 'shrink' : ''} form-input-label`}>{label}</label>
  </div>
   
   ) }
    </div>
  )
})

export default FormInput