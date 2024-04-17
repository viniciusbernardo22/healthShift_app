import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FormLogin from './components/formLogin';
import FormRegister from './components/formRegister';

export default function Login() {
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
      setRegisterEmail(email)
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
    console.log({email, password})
  }

  function handleRegister() {
    
    console.log({registerEmail, registerPassword, registerConfirmPassword})

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/HealthShift.png')}
          style={styles.logo}
        />
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
            setRegisterConfirmPassword={ setRegisterConfirmPassword}
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
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#F2EAD3',
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
