import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { RadioButton, DefaultTheme } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { BackButton } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function tema({ navigation }) {
  const [value, setValue] = React.useState('light');

  const { changeTheme } = useContext(AuthContext);

  function trocaTema(theme) {
    changeTheme({ theme });
    setValue(theme);
  }
  //darkmode
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View style={{ marginTop: 15 }}>
        <RadioButton.Group
          onValueChange={(value) => trocaTema(value)}
          value={value}
          style={{ color: colors.text }}>
          <RadioButton.Item
            label="Claro"
            value="light"
            color="orange"
            uncheckedColor="orange"
          />
          <RadioButton.Item label="Escuro" value="dark" color="orange" />
        </RadioButton.Group>
      </View>
    </ScrollView>
  );
}

export function Tema() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Alterar Tema"
        component={tema}
        options={{
          title: 'ALTERAR TEMA',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },

          headerTitleAlign: 'center',

          headerLeft: () => (
            <MaterialIcons
              onPress={() => navigation.goBack()}
              name="keyboard-arrow-left"
              color="orange"
              size={35}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
