import React, { useContext, useState, useEffect } from 'react';

/*import auxiliares*/
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
  Dimensions,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {
  NavigationContainer,
  CommonActions,
  useTheme,
} from '@react-navigation/native';
import {
  Card,
  Title,
  Paragraph,
  Button,
  Divider,
  Portal,
  Provider,
  TextInput,
  DefaultTheme,
  Dialog,
} from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CardView } from 'react-native-simple-card-view';
import styles from './styles';
import { AuthContext } from '../../contexts/authContext';
import * as ImagePicker from 'expo-image-picker';
import { createStackNavigator } from '@react-navigation/stack';
/*css*/
import {
  ProfileButton,
  Name,
  Message,
  Avatar,
  Container,
  OptionsList,
  Option,
  Info,
} from './styles';
import style from './styles';
import { useNavigation } from '@react-navigation/native';

import api from '../../API/Auth';

function perfil({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [user, setUser] = useState('');

  async function getUser() {
    await api
      .get('/clientes/1')
      .then((response) => setUser(response.data))

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }

  useEffect(() => {
    if (user === '') {
      getUser();
    }
  }, []);

  async function alterarNome() {
    await api
      .patch('/clientes/1', {
        nome: nome.replace(/\b(\w)/g, s => s.toUpperCase())
      })
      .then(
        (response) => setUser(response.data),
        hideDialog()
      )

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }
  //

  const [image, setImage] = useState(null);
  const [nome, setNome] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const { colors } = useTheme();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [text, setText] = React.useState('');

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
    },
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Provider>
      <Container>
        <ScrollView>
          <View style={{ marginTop: 15, alignItems: 'center' }}>
            <ProfileButton onPress={pickImage}>
              {user.foto ? (
                <Avatar source={{ uri: user.foto }} />
              ) : (
                <Avatar source={{ uri: user.profile_photo_url }} />
              )}
            </ProfileButton>

            <Title style={{ color: colors.text }}>{user.nome}</Title>
          </View>

          <View style={{ marginTop: 30 }}>
            <OptionsList>
              <Option onPress={() => {}}>
                <MaterialCommunityIcons
                  style={{ color: colors.text }}
                  name="account-edit"
                  size={23}
                  color="#333"
                />

                <Info>
                  <Title onPress={showDialog}>Alterar nome</Title>
                </Info>
              </Option>
            </OptionsList>
          </View>

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Alterar Nome</Dialog.Title>
              <Dialog.Content>
                <TextInput
                  theme={theme}
                  mode="outlined"
                  label="Digite o seu nome"
                  placeholder="Digite o seu nome"
                  onChangeText={(nome) => setNome(nome)}
                />
              </Dialog.Content>
              <Button
                color="orange"
                style={{ fontSize: 19, fontWeight: 'bold', marginTop: 12 }}
                onPress={(() => alterarNome())}>
                Salvar{' '}
              </Button>

              <Dialog.Actions>
                <Button color="black" onPress={hideDialog}>
                  Fechar
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </ScrollView>
      </Container>
    </Provider>
  );
}

export function Perfil() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Meu Perfil"
        component={perfil}
        options={{
          title: 'PERFIL',
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
