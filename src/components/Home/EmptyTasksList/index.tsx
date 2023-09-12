import { View, Image, Text } from 'react-native'
import Clipboard from 'assets/clipboard.png'

export const EmptyTasksList = () => {
  return (
    <View
      className='flex-1 justify-center items-center py-12 gap-4 border-t-2 mx-4 mt-1 border-[#333333]'
    >
      <Image
        source={Clipboard}
      />
      <View
        className='text-center items-center'
      >
        <Text
          className='font-bold text-gray-300 text-sm'
        >
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text
          className='text-gray-300 text-sm'
        >
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
