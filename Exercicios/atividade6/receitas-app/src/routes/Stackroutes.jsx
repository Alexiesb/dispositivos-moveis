import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import ReceitaScreen from '../screens/ReceitaScreen'

const Stack = createStackNavigator

export default function StackRoutes() {
  return (
    <Stack.Navigator>

        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Receitas' component={ReceitaScreen} />

    
    </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})