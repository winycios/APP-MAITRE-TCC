import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer, CommonActions } from '@react-navigation/native';

/*css */
import styles from './styles';

/*telas */
import Lista from '../../components/pratosEspecias/ListaPrato';

function pratos({ navigation }) {
  return (
    <ScrollView
      style={{ backgroundColor: '#fff' }}
      showsVerticalScrollIndicator={false}>
      <Text
        style={styles.text}>
        {' '}
        Pratos Especiais
      </Text>
      <Lista />
    </ScrollView>
  );
}

export function PratosEspeciais() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={pratos}
        options={{
          title: 'CARDAPIO',
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
