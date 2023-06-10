import { NavigationContainer } from '@react-navigation/native'

import { Box } from 'native-base'

import { AuthRoutes } from './auth.routes'
// import { ApRoutes } from './app.routes'

export function Routes() {
  return (
    <Box flex={1}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
