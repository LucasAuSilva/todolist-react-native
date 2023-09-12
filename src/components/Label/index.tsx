import { styled } from 'nativewind'
import { Text } from 'react-native'

type Props = {
  text: string
}

const LabelStyled = ({ text, ...rest }: Props) => {
  return (
    <Text className='font-bold text-gray-500 mr-2' {...rest}>
      {text}
    </Text>
  )
}

const Label = styled(LabelStyled);
export { Label }
