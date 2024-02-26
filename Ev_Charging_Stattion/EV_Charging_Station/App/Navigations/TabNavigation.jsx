import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="search"
            size={size} color={color} />
        ),
        tabBarActiveTintColor: Colors.PRIMARY
      }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="heart"
            size={size} color={color} />
        ),
        tabBarActiveTintColor: Colors.PRIMARY
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user"
            size={size} color={color} />
        ),
        tabBarActiveTintColor: Colors.PRIMARY
      }}/>
    </Tab.Navigator>
  )
}