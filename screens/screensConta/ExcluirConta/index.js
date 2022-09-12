import React, { useContext } from 'react';

/*import auxiliares*/
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
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function excluir({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  //darkmode
  const { colors } = useTheme();

  return (
    <Container>
      <ScrollView>
        <View style={{ marginTop: 15 }}>
          <Title
            style={{ marginHorizontal: 10, fontSize: 15, color: colors.text }}>
            EXCLUIR CONTA
          </Title>
        </View>
      </ScrollView>
    </Container>
  );
}

export function ExcluirConta() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="seguranca"
        component={excluir}
        options={{
          title: 'EXCLUIR CONTA',
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
