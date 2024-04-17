import { useState } from 'react';
import { Text, StyleSheet, SafeAreaView} from 'react-native';
import Login from './components/Login/login';

 function App() {
  const [user, setUser] = useState(null);

  if(!user) {
    return <Login changeStatus={setUser} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Rota app</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2'
  }
});

export default App;