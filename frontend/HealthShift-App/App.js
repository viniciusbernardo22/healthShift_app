import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/authContext';
import Routes from './src/routes';

function App() {
  // const [user, setUser] = useState('');
  // //const { signed , user} = useContext(AuthContext);

  // // if (!user) {
  // //   return <Login changeStatus={setUser}/>;
  // // }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
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
