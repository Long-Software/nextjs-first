'use client'
import { createTask } from '@/Models/Tasks'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'
import SubmitBtn from './SubmitBtn'

const handleSubmit = async (prevState, formData) => {
  return await createTask({ content: formData.get('content') })
}

const TaskForm = () => {
  const [state, formAction] = useFormState(handleSubmit, { message: null })
  useEffect(() => {
    state.message == 'success' && toast.success('task created')
    state.message == 'error' && toast.error('there was an error')
  }, [state])
  return (
    <form action={formAction}>
      {state?.message && <p className='mb-2'>{state.message}</p>}
      <div className='join w-full'>
        <input
          type='text'
          name='content'
          placeholder='Content'
          required
          className='input input-bordered join-item w-full'
        />
        <SubmitBtn>Create Task</SubmitBtn>
        <button type='reset' className='btn btn-error join-item'>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
