import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter'
import { StatusBar } from 'react-native';
import { Home } from '@/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    interRegular: Inter_400Regular,
    interBold: Inter_700Bold
  })

  return (
    <>
      <StatusBar />
      <Home />
    </>
  );
}
