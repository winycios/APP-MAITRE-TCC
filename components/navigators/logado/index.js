import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

/*telas */
import { Home } from '../../../screens/home/index';
import { Pesquisa } from '../../../screens/pesquisa/index';
import { Reservas } from '../../../screens/reservas/index';
import { Usuario } from '../../../screens/usuario/index';
import {Restaurante} from '../../../screens/restaurante/index';


const Tab = createMaterialBottomTabNavigator();
export function Logado() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="orange"
      inactiveColor="#BDBDBD"
      barStyle={{
        backgroundColor: colors.background,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size ? size : 27}
              color={focused ? color : '#BDBDBD'}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurantes"
        component={Pesquisa}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="magnify"
              size={size ? size : 27}
              color={focused ? color : '#BDBDBD'}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Reservas"
        component={Reservas}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={size ? size : 27}
              color={focused ? color : '#BDBDBD'}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Usuario"
        component={Usuario}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={size ? size : 27}
              color={focused ? color : '#BDBDBD'}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




