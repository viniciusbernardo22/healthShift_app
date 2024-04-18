import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { themes } from '../../../themes/basedThemes';
class FormLogin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      styles,
      email,
      password,
      setEmail,
      setPassword,
      handleLogin,
      setType,
    } = this.props;

    return (
      <>
        <TextInput
          placeholder='Digite seu e-mail'
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={themes.mainColor}
        />
        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholderTextColor={themes.mainColor}
        />

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnText} onPress={handleLogin}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={styles.createAccountTxt}
            onPress={() => setType('register')}
          >
            Criar uma conta
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default FormLogin;
