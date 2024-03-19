import axios from 'axios'

import { Task } from '@/core/entities/task'
import { Header } from '@/components/header'
import { TaskList } from '@/components/task-list'

export default async function Home() {
  async function handleTaskUpdate(id: string, newTaskData: Task) {
    'use server'
    await axios.put<Task>(`http://localhost:3333/tasks/${id}`, newTaskData)
  }

  async function handleTaskDelete(id: string) {
    'use server'
    await axios.delete(`http://localhost:3333/tasks/${id}`)
  }

  const response = await axios.get<Task[]>('http://localhost:3333/tasks')
  const tasks = response.data

  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 px-2 pb-4 sm:px-6 lg:px-8">
        <TaskList
          tasks={tasks}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
        />
      </div>
    </>
  )
}
