import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import UnidadeCard from './components/unidadeCard';
import { TextInput } from 'react-native-gesture-handler';
import Unidades from '../../mock/Unidades';
import { themes } from '../../themes/basedThemes';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const [unidadesList, setUnidadesList] = useState(Unidades);

  function handlePress(item) {
    navigation.navigate('Detalhes', item)
  }
  useEffect(() => {
    if (search === '') {
      setUnidadesList(Unidades);
    } else {
      setUnidadesList(
        Unidades.filter((unidade) => {
          if (unidade.title.includes(search)) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [search]);

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          value={search}
          style={styles.input}
          onChangeText={setSearch}
          placeholder='O que você procura?'
          placeholderTextColor={themes.mainColor}
        />
      </View>

      <FlatList
        data={unidadesList}
        initialNumToRender={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UnidadeCard props={item} handlePress={(e) => handlePress(e)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 30,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
