import { NavigationMainMenu } from '../../components/navigation/NavigationMainMenu'
import { Background } from '../../layout/Background'
import { Paper } from '../../layout/Paper'
import { Profile } from '../../features/auth/components/Profile'

export function HomeScreen() {
  return (
    <Background>
      <Profile />
      <Paper>
        <NavigationMainMenu />
      </Paper>
    </Background>
  )
}
