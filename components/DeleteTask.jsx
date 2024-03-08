'use client'
import { deleteTask } from '@/Models/Tasks'
import { useFormStatus } from 'react-dom'
import SubmitBtn from './SubmitBtn'

const handleSubmit = async formData => {
  return await deleteTask({ where: { id: formData.get('id') } })
}

const DeleteForm = ({ id }) => {
  return (
    <form action={handleSubmit}>
      <input type='hidden' className='hidden' name='id' value={id} />
      <SubmitBtn>Delete</SubmitBtn>
    </form>
  )
}

export default DeleteForm
