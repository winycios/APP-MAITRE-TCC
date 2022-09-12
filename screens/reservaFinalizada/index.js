import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

/*style */
import style from './styles';

/*telas */

import ListaFinalizadas from '../../components/ReservasFinalizadas/ListaFinalizadas';

function finalizada() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={style.backgroundReser}>
        <ListaFinalizadas />
      </View>
    </ScrollView>
  );
}

export function ReservasFinalizadas() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={finalizada}
        options={{
          title: 'Reservas Finalizadas',
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
