import React, { useContext } from 'react';

import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {
  NavigationContainer,
  CommonActions,
  useTheme,
} from '@react-navigation/native';
import { TextInput, DefaultTheme, Button } from 'react-native-paper';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CardView } from 'react-native-simple-card-view';
import { mdiAccountCircle } from '@mdi/js';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//css

import style from './style';

 function email({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  //darkmode
  const { colors } = useTheme();

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
    },
  };
  return (
    <ScrollView>
      <View style={{ marginTop: 15 }}>
        <View style={{ marginTop: 20 }}>
          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Digite o seu email atual"
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Digite seu novo email"
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Confirmar email"
          />
          <Text
            style={style.button}
            mode="Outlined "
            onPress={() => console.log('Pressed')}>
            Salvar
          </Text>

          <Text
            style={style.button2}
            mode="Outlined "
            onPress={() => console.log('Pressed')}>
            Cancelar
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}


export function AlterEmail() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="email"
        component={email}
        options={{
          title: 'ALTERAR EMAIL',
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

