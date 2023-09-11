import { Text, View, Image, TextInput } from 'react-native'
import Logo from 'assets/logo.png'
import colors from 'tailwindcss/colors'

export const Home = () => {
  return(
    <View className='bg-gray-600 flex-1'>
      <View className='bg-gray-700 w-full h-[173] items-center px-4'>
        <Image
          source={Logo}
          className='my-16'
        />
        <TextInput
          className='bg-gray-500 border-gray-700 w-full p-[16] text-[16] rounded-md text-gray-100'
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
      </View>
      <Text>Hello World</Text>
    </View>
  )
}
