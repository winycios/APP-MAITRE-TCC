import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

/*style */
import style from './styles';

/*telas */
import ListaConcluidas from '../../components/ReservasConcluidas/ListaConcluidas';

function concluidas() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={style.backgroundReser}>
      <ListaConcluidas />
      </View>
    </ScrollView>
  );
}

export function ReservasConcluidas() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={concluidas}
        options={{
          title: 'Reservas Concluidas',
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
