import React, { useContext } from 'react';
import { TextInput, DefaultTheme, Button } from 'react-native-paper';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//css

import style from './style';

function senha({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [text, setText] = React.useState('');
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
        <Text style={{ marginHorizontal: 10, fontSize: 17 }}>
          Sua senha precisa ter pelo menos seis caracteres e incluir uma
          combinação de números, letras e caracteres especiais (!$@%).
        </Text>

        <View style={{ marginTop: 20 }}>
          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Senha atual"
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Nova senha"
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Repita a nova senha"
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
          />
          <Text
            style={style.button}
            mode="Outlined "
            onPress={() => console.log('Pressed')}>
            Atualizar senha
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


export function AlterSenha() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="senha"
        component={senha}
        options={{
          title: 'ALTERAR SENHA',
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
