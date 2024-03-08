import prisma from '@/utils/db'

// await getTasks({ orderBy: { createdAt: 'desc' } })
export const getTasks = async args => await prisma.task.findMany(args)
// await createTask({ content: 'message' })
export const createTask = async data => await prisma.task.create({ data })
// await deleteTask({ where: { id: formData.get('id') } })
export const deleteTask = async args => await prisma.task.delete(args)
// getTask({ where: { id: params.id } })
export const getTask = async args => await prisma.task.findUnique(args)
// updateTask({ where: { id }, data: { id, content, completed } })
export const updateTask = async args => await prisma.task.update(args)
