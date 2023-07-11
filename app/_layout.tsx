import ToastMessage from 'react-native-toast-message'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Navigator } from '~/Navigator'
import { GameProvider } from '~/features/game/context/GameProvider'
import { AuthProvider } from '~/features/auth/context/AuthProvider'
import '~/langs/translation'

export default function Layout() {
  return (
    <>
      <SafeAreaProvider>
        <AuthProvider>
          <GameProvider>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
          </GameProvider>
        </AuthProvider>
      </SafeAreaProvider>
      <ToastMessage />
    </>
  )
}
