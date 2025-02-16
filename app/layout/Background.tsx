import type { PropsWithChildren } from 'react'
import type { RoutesList } from '../types/RouteList'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import bg from '../assets/bg.png'

export function Background({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets()
  const router = useRoute<RouteProp<RoutesList>>()
  const isHomeScreen = router.name === 'Home'

  return (
    <View style={[styles.root, isHomeScreen && insets]}>
      <ImageBackground style={styles.background} source={bg} resizeMode="cover">
        {children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
})
