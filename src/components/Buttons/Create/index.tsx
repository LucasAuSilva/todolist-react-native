import { Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import colors from 'tailwindcss/colors'
import { styled } from 'nativewind'

const StyledPressable = styled(Pressable)

type Props = {
  handlePress: () => void
}

export const CreateButton = ({ handlePress }: Props) => {
  return (
    <StyledPressable
      className='bg-blue-dark active:bg-blue p-4 justify-center items-center rounded-md'
      onPress={handlePress}
    >
      <Ionicons name="add-circle-outline" size={20} color={colors.gray[100]} />
    </StyledPressable>
  )
}
