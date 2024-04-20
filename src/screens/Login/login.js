import { useContext, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import FormLogin from './components/formLogin';
import FormRegister from './components/formRegister';
import { themes } from '../../themes/basedThemes';
import { AuthContext } from '../../contexts/authContext';
import {
  canAuthenticate,
  CanCreateAccount,
} from '../../validators/authValidators';
import { VALIDATOR_FAIL } from '../../validators/errors/errors';

export default function Login() {
  const { signUp, signIn } = useContext(AuthContext);
  const logo = require('../../assets/HealthShift.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [type, setType] = useState('login');

  async function handleLogin() {
    const { isValid } = canAuthenticate(email, password);

    if (isValid) {
      signIn(email, password);
    } else {
      Alert.alert('Alerta', VALIDATOR_FAIL);
    }
  }

  async function handleRegister() {
    const { isValid } = CanCreateAccount(
      registerEmail,
      registerPassword,
      registerConfirmPassword
    );

    if (isValid) {
      signUp(registerEmail, registerPassword);
    } else {
      Alert.alert('Alerta', VALIDATOR_FAIL);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {type === 'login' ? (
        <>
          <FormLogin
            styles={styles}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            setType={(e) => setType(e)}
          />
        </>
      ) : (
        <>
          <FormRegister
            styles={styles}
            setType={(e) => setType(e)}
            registerEmail={registerEmail}
            registerPassword={registerPassword}
            registerConfirmPassword={registerConfirmPassword}
            setRegisterEmail={setRegisterEmail}
            setRegisterPassword={setRegisterPassword}
            setRegisterConfirmPassword={setRegisterConfirmPassword}
            handleRegister={handleRegister}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: themes.mainColor,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200,
    borderRadius: 100,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 45,
    borderRadius: 30,
    color: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themes.mainColor,
  },
  createAccountTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
