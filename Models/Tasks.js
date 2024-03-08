'use server'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// await getTasks({ orderBy: { createdAt: 'desc' } })
export const getTasks = async args => await prisma.task.findMany(args)
// await createTask({ content: 'message' })
export const createTask = async data => {
  const Task = z.object({ content: z.string().min(5) })
  try {
    Task.parse(data)
    await prisma.task.create({ data })
    revalidatePath('/tasks')
    return { message: 'success' }
  } catch (error) {
    return { message: 'error' }
  }
}
// await deleteTask({ where: { id: formData.get('id') } })
export const deleteTask = async args => {
  await prisma.task.delete(args)
  revalidatePath('/tasks')
}
// getTask({ where: { id: params.id } })
export const getTask = async args => await prisma.task.findUnique(args)
// updateTask({ where: { id }, data: { id, content, completed } })
export const updateTask = async args => await prisma.task.update(args)
