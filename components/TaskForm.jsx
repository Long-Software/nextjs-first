import { createTask } from '@/Models/Tasks'
import { revalidatePath } from 'next/cache'

const handleSubmit = async formData => {
  'use server'
  await createTask({ content: formData.get('content') })
  revalidatePath('/tasks')
}
const handleSubmitCustom = async formData => {}
const TaskForm = async () => {
  return (
    <form action={handleSubmit}>
      <div className='join w-full'>
        <input
          type='text'
          name='content'
          placeholder='Content'
          required
          className='input input-bordered join-item w-full'
        />
        <button type='submit' className='btn btn-primary'>
          Create Task
        </button>
        <button type='reset' className='btn btn-error'>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
