import { StatusBar } from 'react-native';
import { Home } from '@/screens/Home'

import colors from 'tailwindcss/colors'

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.gray[700]}
        barStyle='light-content'
        translucent
      />
      <Home />
    </>
  );
}
