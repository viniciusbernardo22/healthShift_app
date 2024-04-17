import { useState , useEffect, useContext} from 'react';
import {  StyleSheet } from 'react-native';
import Login from './components/Login/login';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider, { AuthContext } from './contexts/authContext';
import Routes from './routes';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState('');
  //const { signed , user} = useContext(AuthContext);


  if (!user) {
    return <Login changeStatus={setUser}/>;
  } 

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
  },
});

export default App;
