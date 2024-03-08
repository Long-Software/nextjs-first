import { getTask } from '@/Models/Tasks'
import EditTask from '@/components/EditTask'
import Link from 'next/link'

const SingleTaskPage = async ({ params }) => {
  const task = await getTask({ where: { id: params.id } })
  return (
    <div className='mb-16'>
      <Link href='/tasks' className='btn btn-accent'>
        Back
      </Link>
      <EditTask task={task} />
    </div>
  )
}

export default SingleTaskPage
