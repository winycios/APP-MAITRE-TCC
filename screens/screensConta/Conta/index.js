import React, { useContext } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
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
  Divider,
} from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CardView } from 'react-native-simple-card-view';
import { mdiAccountCircle } from '@mdi/js';
import {
  Container,
  OptionsList,
  Option,
  Info,
  Description,
  Wrapper,
  AdditionalMenu,
  AdditionalOption,
  OptionName,
  BackButton,
} from './styles';
import { AuthContext } from '../../../contexts/authContext';

import { createStackNavigator } from '@react-navigation/stack';

import { AlterEmail } from '../AlterEmail/index';
import { AlterSenha } from '../AlterSenha/index';
import { AlterEndereco } from '../AlterEndereco/index';
import { AlterFone } from '../AlterarFone/index';
import { VeriSeguranca } from '../VeriSeguranca/index';
import { ExcluirConta } from '../ExcluirConta/index';
import { useNavigation } from '@react-navigation/native';

/*css*/

function conta({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const { signOut } = useContext(AuthContext);

  //darkmode
  const { colors } = useTheme();
  return (
    <Container>
      <ScrollView>
        <View style={{ marginTop: 15 }}>
          <Title
            style={{ marginHorizontal: 10, fontSize: 15, color: colors.text }}>
            Segurança de login
          </Title>

          <OptionsList>
            <Option onPress={() => navigation.navigate('Verificação')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="shield-check-outline"
                size={23}
                color="#333"
              />

              <Info>
                <Title style={{ fontSize: 17, color: colors.text }}>
                  Verificação de Segurança
                </Title>
              </Info>
            </Option>

            <Option onPress={() => navigation.navigate('Alterar Email')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="email"
                size={23}
                color="#333"
              />

              <Info>
                <Title style={{ fontSize: 17, color: colors.text }}>
                  Alterar Email
                </Title>
              </Info>
            </Option>

            <Option onPress={() => navigation.navigate('Alterar Senha')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="key-variant"
                size={23}
                color="#333"
              />
              <Info>
                <Title style={{ fontSize: 17, color: colors.text }}>
                  Alterar Senha
                </Title>
              </Info>
            </Option>

            <Option onPress={() => navigation.navigate('Alterar Endereço')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="home-map-marker"
                size={23}
                color="#333"
              />
              <Info>
                <Title style={{ fontSize: 17, color: colors.text }}>
                  Alterar Endereço
                </Title>
              </Info>
            </Option>

            <Option onPress={() => navigation.navigate('Alterar Telefone')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="cellphone"
                size={23}
                color="#333"
              />
              <Info>
                <Title style={{ fontSize: 17, color: colors.text }}>
                  Alterar Telefone
                </Title>
              </Info>
            </Option>

            <Divider
              style={{ marginHorizontal: 5, width: '90%', marginTop: 10 }}
            />

            <Option onPress={() => navigation.navigate('ExcluirConta')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="account-remove-outline"
                size={23}
                color="#333"
              />
              <Info>
                <Title style={{ fontSize: 17, color: colors.text }}>
                  Excluir Conta
                </Title>
              </Info>
            </Option>
          </OptionsList>
        </View>
      </ScrollView>
    </Container>
  );
}

export function ContaScreen() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Minha Conta"
        component={conta}
        options={{
          title: 'CONTA',
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
      <Stack.Screen
        name="Verificação"
        component={VeriSeguranca}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Alterar Email"
        component={AlterEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Alterar Senha"
        component={AlterSenha}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Alterar Endereço"
        component={AlterEndereco}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Alterar Telefone"
        component={AlterFone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExcluirConta"
        component={ExcluirConta}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
