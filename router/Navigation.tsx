import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from '../styles/constants'
import Users from '../screens/Users'
import User from '../screens/User'

const Stack = createStackNavigator()

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Users"
          component={ Users }
          options={{
            title: 'Users',
            headerStyle: {
              backgroundColor: colors.primary
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="SingleUser"
          component={ User }
          options={{
            title: 'User Details',
            headerStyle: {
              backgroundColor: colors.primary
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation