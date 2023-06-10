import { useTheme } from 'native-base'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { MyAdds } from '@screens/MyAdds'
import { Logout } from '@screens/Logout'
import { AdPreview } from '@screens/AdPreview'
import { AddDetails } from '@screens/AddDetails'
import { Create } from '@screens/Create'
import { Edit } from '@screens/Edit'
import { EditAdDetails } from '@screens/EditAdDetails'

import { House, Tag } from 'phosphor-react-native'

type AppRoutes = {
  home: undefined
  addDetails: undefined
  logout: undefined
  myAdds: undefined
  create: undefined
  edit: undefined
  adPreview: undefined
  editAddDetails: undefined
  screenNoTabs: undefined
  outhersTabs: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen, Group } = createBottomTabNavigator<AppRoutes>()

function OuthersTabs() {
  const { colors } = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[200],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingTop: 22,
          paddingBottom: 30,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <House
              color={color}
              size={24}
              weight={focused ? 'bold' : 'regular'}
            />
          ),
        }}
      />
      <Screen
        name="myAdds"
        component={MyAdds}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Tag
              color={color}
              size={24}
              weight={focused ? 'bold' : 'regular'}
            />
          ),
        }}
      />
      <Screen
        name="logout"
        component={Logout}
        options={{
          tabBarIcon: () => <Logout />,
        }}
      />
    </Navigator>
  )
}

export function ApRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarButton: () => null,
        tabBarStyle: {
          height: 0,
        },
      }}
    >
      <Screen name="outhersTabs" component={OuthersTabs} />

      <Group
        screenOptions={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      >
        <Screen name="adPreview" component={AdPreview} />
        <Screen name="addDetails" component={AddDetails} />
        <Screen name="create" component={Create} />
        <Screen name="edit" component={Edit} />
        <Screen name="editAddDetails" component={EditAdDetails} />
      </Group>
    </Navigator>
  )
}
