import { deleteTask } from '@/Models/Tasks'
import { revalidatePath } from 'next/cache'

const handleSubmit = async formData => {
  'use server'
  await deleteTask({
    where: { id: formData.get('id') }
  })
  revalidatePath('/tasks')
}
const DeleteForm = ({ id }) => {
  return (
    <form action={handleSubmit}>
      <input type='hidden' className='hidden' name='id' value={id} />
      <button className='btn btn-xs btn-error'>Delete</button>
    </form>
  )
}

export default DeleteForm
