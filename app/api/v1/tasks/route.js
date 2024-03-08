import { createTask, getTasks } from '@/Models/Tasks'

export const GET = async req => {
  const tasks = await getTasks({ orderBy: { createdAt: 'desc' } })
  return Response.json({ data: tasks })
}

export const POST = async req => {
  const data = await req.json()
  const task = await createTask(data)
  return Response.json({ data: task })
}
