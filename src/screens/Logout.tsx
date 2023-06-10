import { Pressable, useTheme } from 'native-base'
import { SignOut } from 'phosphor-react-native'

import { Alert } from 'react-native'

export function Logout() {
  const { colors } = useTheme()

  function handleLogout() {
    Alert.alert('Deslogou')
  }

  return (
    <Pressable
      flex={1}
      h={6}
      w={6}
      alignItems="center"
      justifyContent="center"
      onPress={handleLogout}
    >
      <SignOut size={24} color={colors.red[500]} />
    </Pressable>
  )
}
