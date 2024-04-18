import { useState} from 'react';
import Login from './src/screens/Login/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './src/routes';

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 25,
//     paddingHorizontal: 10,
//     backgroundColor: '#f2f2f2',
//   },
// });

export default App;
