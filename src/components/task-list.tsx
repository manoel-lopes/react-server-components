'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/outline'

import { Task } from '@/core/entities/task'
import { Stats } from './stats'

type TaskListProps = {
  tasks: Task[]
  onTaskUpdate: (id: string, newTaskData: Task) => void
  onTaskDelete: (id: string) => void
}

export function TaskList({ tasks, onTaskUpdate, onTaskDelete }: TaskListProps) {
  const router = useRouter()

  function handleTaskComplete(id: string) {
    const oldTask = tasks.find((task) => task.id === id)
    if (!oldTask) {
      return
    }
    const newTask = {
      ...oldTask,
      isComplete: !oldTask.isComplete,
    }
    onTaskUpdate(id, newTask)
    router.refresh()
  }

  function handleTaskDelete(id: string) {
    onTaskDelete(id)
    router.refresh()
  }

  const taskCount = tasks.length
  const taskCompleteCount = tasks.filter((task) => task.isComplete).length

  return (
    <>
      <div className="flex justify-between px-0 pb-4 pt-12 font-semibold">
        <p style={{ color: 'hsl(203, 69%, 59%)' }}>
          Tarefas criadas <Stats>{taskCount}</Stats>
        </p>
        <p style={{ color: 'hsl(237, 92%, 75%)' }}>
          Concluídas{' '}
          {taskCount ? (
            <Stats>
              {taskCompleteCount} de {taskCount}
            </Stats>
          ) : (
            <Stats>{taskCount}</Stats>
          )}
        </p>
      </div>
      {taskCount ? (
        <ul className="grid gap-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-start justify-between gap-4 rounded-md border border-solid border-gray-500 p-4 dark:bg-neutral-800"
            >
              <button
                onClick={() => handleTaskComplete(task.id)}
                className={`flex justify-center rounded-full border border-solid border-blue-500 p-1 text-sm transition duration-150 ease-in-out ${task.isComplete ? 'border border-solid border-violet-600 bg-violet-600 text-gray-50' : ''}`}
              >
                <CheckIcon
                  className={`h-6 w-6 font-bold ${!task.isComplete && 'opacity-0'}`}
                />
              </button>
              <span
                className={`flex w-full justify-start transition-colors duration-500 ease-out dark:text-white ${task.isComplete ? 'text-gray-500 line-through' : ''}`}
              >
                {task.title}
              </span>
              <button
                onClick={() => handleTaskDelete(task.id)}
                className="flex justify-center rounded-lg border-none bg-transparent p-2 text-lg text-gray-500 transition duration-150 ease-in-out hover:bg-zinc-300 hover:text-red-600 focus:outline-none dark:hover:bg-neutral-700"
              >
                <TrashIcon className="h-6 w-6 text-2xl" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-4 pt-16 text-gray-500">
          <Image
            src={'/assets/clipboard-text.svg'}
            alt="Clipboard"
            width={80}
            height={80}
            className="text-6xlo pacity-50"
          />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  )
}
