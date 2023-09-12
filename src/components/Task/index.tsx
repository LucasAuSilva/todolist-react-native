import Checkbox from 'expo-checkbox'
import { styled } from 'nativewind'
import { Text, View } from 'react-native'

import { DeleteButton } from '../Buttons/Delete'

type Props = {
  description: string
  finished: boolean
  onCheck: () => void
  onDelete: () => void
}

const TaskStyled = ({ description, finished, onCheck, onDelete }: Props) => {

  return (
    <View className='flex-row items-center mb-2 bg-gray-500 pl-3 pr-2 py-3 rounded-md border-gray-400 border-2'>
      <Checkbox
        value={finished}
        onValueChange={(value) => {
          onCheck()
        }}
        color={finished ? '#5e60ce' : undefined}
        className={`
          rounded-full mr-2
          ${finished ? 'border-[#5e60ce]' : 'border-blue'}
        `}
      />
      <Text
        className={`
          flex-1
          ${finished ? 'text-gray-300 line-through' : 'text-gray-100'}
        `}
      >
        {description}
      </Text>
      <DeleteButton handlePress={onDelete} />
    </View>
  )
}

const Task = styled(TaskStyled);
export { Task }
