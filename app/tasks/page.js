import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'
export const dynamic = 'force-dynamic'
const Task = () => {
  return (
    <div className='max-w-lg'>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Task
