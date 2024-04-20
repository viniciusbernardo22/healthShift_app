import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/authContext';
import Routes from './src/routes';

function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
