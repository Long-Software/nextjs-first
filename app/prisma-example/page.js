import { createTask, getTasks } from '@/Models/Tasks'

const prismaHandlers = async () => {
  // await createTask({ content: 'First Content' })

  const tasks = await getTasks({ orderBy: { createdAt: 'desc' } })
  return tasks
}
const Query = async () => {
  const tasks = await prismaHandlers()
  return (
    <div>
      <h1 className='text-7xl'>Prisma Example</h1>
      {tasks.map(task => (
        <h2 key={task.id}>{task.content}</h2>
      ))}
    </div>
  )
}

export default Query
