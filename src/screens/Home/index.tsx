import { View, Image, TextInput, FlatList } from 'react-native'
import Logo from 'assets/logo.png'
import { CreateButton } from '@/components/Buttons/Create'
import { Counter } from '@/components/Counter'
import { Label } from '@/components/Label'
import { useState } from 'react'
import { EmptyTasksList } from '@/components/Home/EmptyTasksList'
import { Task } from '@/components/Task'

type Task = {
  description: string,
  finished: boolean
}

export const Home = () => {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  const handleCheckboxClick = (task: Task) => {
    setTasks(prevState => prevState.map(prev => {
      if (prev.description == task.description) {
        const changedTask: Task = {...prev, finished: !prev.finished}
        return changedTask
      }
      return prev
    }))
  }

  const handleDeleteTask = (task: Task) => {
    setTasks(prevState => prevState.filter(prev => prev.description !== task.description))
  }

  const handleCreateTask = () => {
    const task = { description: taskInput, finished: false }
    setTasks(prevState => [...prevState, task])
    setTaskInput('')
  }

  const getTasksNotFinished = () => {
    return tasks.filter(task => task.finished == false).length
  }

  const getTasksFinished = () => {
    return tasks.filter(task => task.finished == true).length
  }

  return(
    <View className='bg-gray-700 flex-1'>
      <View className='bg-gray-700 w-full mt-24 items-center px-4'>
        <Image
          source={Logo}
          className='mb-16'
        />
      </View>
      <View
        className='bg-gray-600 flex-1 relative'
      >
        <View
          className='absolute -top-6 w-full flex-row px-4'
        >
          <TextInput
            className='bg-gray-500 border border-gray-700 p-4 text-[16] flex-1 mr-1 rounded-md text-gray-100 focus:border-purple-dark'
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            value={taskInput}
            onChangeText={setTaskInput}
          />
          <CreateButton handlePress={handleCreateTask} />
        </View>
        <View className='px-4 mt-16 flex-row justify-between items-center'>
          <View className='flex-row justify-center items-center'>
            <Label text='Criadas' className='text-blue' />
            <Counter count={getTasksNotFinished()} />
          </View>
          <View className='flex-row justify-center items-center'>
            <Label text='Concluídas' className='text-purple' />
            <Counter count={getTasksFinished()} />
          </View>
        </View>
        <FlatList
          data={tasks}
          className='flex-1 mt-6 px-4'
          renderItem={({ item, index }) => (
            <Task
              key={index}
              onCheck={() => handleCheckboxClick(item)}
              onDelete={() => handleDeleteTask(item)}
              finished={item.finished}
              description={item.description} />
          )}
          ListEmptyComponent={() => (
            <>
              <EmptyTasksList />
            </>
          )}
        />
      </View>
    </View>
  )
}
