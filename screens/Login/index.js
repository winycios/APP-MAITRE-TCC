import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  ImageBackground,
} from 'react-native';
import {
  NavigationContainer,
  CommonActions,
  useTheme,
} from '@react-navigation/native';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
  TextInput,
  DefaultTheme,
  Switch,
  HelperText,
} from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';

/*css */
import styles from './styles';

/*api*/
import api from '../../API/Auth';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../../contexts/authContext';

/*telas */
import { Cadastro } from '../Cadastro/index';
import { Cadastro2 } from '../cadastro2/index';

function login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [text, setText] = React.useState('');

  const { signIn } = useContext(AuthContext);

  async function getItem() {
    let r = await SecureStore.getItemAsync('userToken');
    console.log(r);
  }

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
    },
  };

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView>
      <View style={styles.container3}>
        <ImageBackground
          source={require('../../assets/maitre.png')}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'white',
            alignSelf: 'center',
          }}
        />
        <Title
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 15,
            color: 'orange',
          }}>
          MAÎTRE
        </Title>

        <View style={styles.inputView}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            label="Email"
            left={<TextInput.Icon name="email-outline" />}
            right={<TextInput.Affix />}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView3}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            label="Senha"
            secureTextEntry
            left={<TextInput.Icon name="lock-outline" />}
            right={<TextInput.Icon name="eye" />}
            onChangeText={(senha) => setSenha(senha)}
          />
        </View>

        <Button
          style={{
            marginTop: 20,
            width: '80%',
            height: 45,
            justifyContent: 'center',
            backgroundColor: 'orange',
          }}
          icon="login"
          mode="contained"
          onPress={() => signIn({ email, senha })}>
          Login
        </Button>

        <TouchableOpacity>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('cadastro')}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
// <Button
//           style={{
//             marginTop: 20,
//             width: '80%',
//             height: 45,
//             justifyContent: 'center',
//             backgroundColor: 'orange',
//           }}
//           icon="login"
//           mode="contained"
//           onPress={() => getItem()}>
//           Teste
//         </Button>

export function Login() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro2"
        component={Cadastro2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
