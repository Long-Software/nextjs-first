import { getTasks } from '@/Models/Tasks'
import Link from 'next/link'
import DeleteTask from './DeleteTask'

const TaskList = async () => {
  const tasks = await getTasks({ orderBy: { createdAt: 'desc' } })
  if (tasks.length === 0) return <h2 className='mt-8 font-medium text-lg'>No Tasks</h2>
  else
    return (
      <ul className='mt-8'>
        {tasks.map(task => (
          <li
            key={task.id}
            className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'>
            <h2
              className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>
              {task.content}
            </h2>
            <div className='flex gap-6 items-center'>
              <Link href={`tasks/${task.id}`} className='btn btn-accent join-item'>
                Edit
              </Link>
              <DeleteTask id={task.id} />
            </div>
          </li>
        ))}
      </ul>
    )
}

export default TaskList
