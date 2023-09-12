import { Text, View } from 'react-native'

type Props = {
  count: number
}

export const Counter = ({ count }: Props) => {
  return (
    <View className='bg-gray-400 px-2 py-0.5 rounded-full'>
      <Text
        className='text-gray-200'
      >
        {count}
      </Text>
    </View>
  )
}
