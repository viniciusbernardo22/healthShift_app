import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { themes } from '../../../themes/basedThemes';
class FormRegister extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      styles,
      setType,
      registerEmail,
      registerPassword,
      registerConfirmPassword,
      setRegisterEmail,
      setRegisterPassword,
      setRegisterConfirmPassword,
      handleRegister,
    } = this.props;

    return (
      <>
        <TextInput
          placeholder='Digite um e-mail'
          style={styles.input}
          value={registerEmail}
          onChangeText={(e) => setRegisterEmail(e)}
          placeholderTextColor={themes.mainColor}
        />
        <TextInput
          placeholder='Digite uma senha'
          style={styles.input}
          value={registerPassword}
          onChangeText={(e) => setRegisterPassword(e)}
          secureTextEntry={true}
          placeholderTextColor={themes.mainColor}
        />
        <TextInput
          placeholder='Confirme sua senha'
          style={styles.input}
          value={registerConfirmPassword}
          onChangeText={(e) => setRegisterConfirmPassword(e)}
          secureTextEntry={true}
          placeholderTextColor={themes.mainColor}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.btnText}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={styles.createAccountTxt}
            onPress={() => setType('login')}
          >
            Ja tenho uma conta
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default FormRegister;
