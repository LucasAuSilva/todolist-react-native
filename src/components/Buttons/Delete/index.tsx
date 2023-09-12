import { Pressable, Image } from 'react-native'
import { styled } from 'nativewind'

import colors from 'tailwindcss/colors'
import Trash from 'assets/trash.png'
import { useState } from 'react'

const StyledPressable = styled(Pressable)

type Props = {
  handlePress: () => void
}

export const DeleteButton = ({ handlePress }: Props) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <StyledPressable
      className='active:bg-gray-400 p-2 rounded-md'
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Image
        source={Trash}
        className=''
        tintColor={isPressed ? '#E25858' : colors.gray[400]}
      />
    </StyledPressable>
  )
}
