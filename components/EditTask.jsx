import { updateTask } from '@/Models/Tasks'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import SubmitBtn from './SubmitBtn'

const handleSubmit = async formData => {
  'use server'
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed')
  await updateTask({
    where: { id },
    data: { content, completed: completed == 'on' ? true : false }
  })
  redirect('/tasks')
}

const EditTask = ({ task }) => {
  const { id, completed, content } = task
  return (
    <form
      action={handleSubmit}
      className='max-w-sm p-12 border border-base-300 rounded-lg'>
      <input type='hidden' name='id' value={id} />
      <input
        type='text'
        name='content'
        defaultValue={content}
        required
        className='input input-bordered w-full'
      />
      <div className='form-control my-4'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>Completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            id='completed'
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
        <SubmitBtn>Submit</SubmitBtn>
      </div>
    </form>
  )
}

export default EditTask
