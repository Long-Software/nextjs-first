'use client'
import { useFormStatus } from 'react-dom'

const SubmitBtn = ({children}) => {
  const { pending } = useFormStatus()
  return (
    <button type='submit' className='btn btn-primary join-item' disabled={pending}>
      {pending ? 'Please wait' : children}
    </button>
  )
}

export default SubmitBtn
