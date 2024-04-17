import { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import FormLogin from './components/formLogin';
import FormRegister from './components/formRegister';
import firebase from './services/firebase';
import { EmailValidator } from '../../validators/LoginValidator';

export default function Login({changeStatus}) {

  const logo = require('../../assets/HealthShift.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [type, setType] = useState('login');

  useEffect(() => {
    if (type == 'login') {
      ResetRegisterForm();
    } else {
      ResetLoginForm();
      setRegisterEmail(email);
    }
  }, [type]);

  function ResetRegisterForm() {
    setRegisterPassword('');
    setRegisterConfirmPassword('');
  }

  function ResetLoginForm() {
    setPassword('');
  }

  function handleLogin() {
    if (EmailValidator(email) && password !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          Alert.alert(
            '',
            'Login bem sucedido'
          );
          setEmail('');
          ResetLoginForm();
          changeStatus(response.user.uid);
        })
        .catch((e) => {
          Alert.alert(
            'Falha de autenticação',
            'Ocorreu algum erro durante sua tentativa de autenticação, tente novamente.'
          );
        });
    } else {
      Alert.alert(
        'Falha de validação',
        'Há algo errado com seu e-mail ou senha, por favor tente novamente.'
      );
    }
  }

  function handleRegister() {
    if (registerPassword !== registerConfirmPassword) {
      Alert.alert(
        'Falha de validação',
        'As duas senhas não coencidem, por favor tente novamente'
      );
    }
    if (EmailValidator(registerEmail)) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(registerEmail, registerPassword)
        .then((response) => {
          setType('login');
          setEmail(registerEmail);
          setPassword(registerPassword);
          handleLogin();
        })
        .catch((err) => {
          Alert.alert(
            'Falha de criação de usuário',
            'Ocorreu algum erro durante sua tentativa de criação de usuario, tente novamente.'
          );
        });
    } else {
      Alert.alert(
        'Falha de validação',
        'O endereço de e-mail é invalido, verifique e tente novamente.'
      );
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
    backgroundColor: '#6681F6',
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
    color: '#6681F6',
  },
  createAccountTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
