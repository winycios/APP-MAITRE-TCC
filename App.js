import React, { useState } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

/* imports telas */
import { Deslogado } from './components/navigators/deslogado/index';
import { Logado } from './components/navigators/logado/index';
import api from './API/Auth';
import Dark from './temas/escuro';
import Light from './temas/claro';
import { AuthContext } from './contexts/authContext';

export default function App() {
  const [tema, setTema] = useState();
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };

        case 'CHANGE_THEME':
          return {
            ...prevState,
            theme: action.theme,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      theme: 'light',
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      console.log('tema', state.theme);
      console.log('token state', state.userToken);

      try {
        token = await SecureStore.getItemAsync('userToken');
        console.log('token ' + token);
        if (token != null) {
          console.log('batata');
        } else {
          console.log('bisteca');
        }
      } catch (e) {
        console.log(e);
      }
    };

    bootstrapAsync();
  }, [state.theme]);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data.email, data.senha);
        token = await SecureStore.getItemAsync('userToken');

        console.log('token =', token);

        await api
          .post('/login', {
            email: data.email,
            password: data.senha,
          })
          .then((response) =>
            dispatch({
              type: 'SIGN_IN',
              token: SecureStore.setItemAsync('userToken', response.data.token),
            })
          )

          .catch((err) => {
            console.error(err);
          });
      },
      signOut: async () => {
        dispatch({ type: 'SIGN_OUT' });
      },

      signUp: async (data) => {
        console.log(state.userToken);
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },

      changeTheme: async (data) => {
        dispatch({ type: 'CHANGE_THEME', theme: data.theme });
      },
    }),
    []
  );

  return (
    <AppearanceProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={state.theme == 'light' ? Light : Dark}>
          {state.userToken ? <Logado /> : <Deslogado />}
        </NavigationContainer>
      </AuthContext.Provider>
    </AppearanceProvider>
  );
}
