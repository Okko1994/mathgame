import { Text } from 'react-native'
import { Background } from '../../layout/Background'
import { Paper } from '../../layout/Paper'

export function StoreModeScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>StoreMode</Text>
      </Paper>
    </Background>
  )
}
