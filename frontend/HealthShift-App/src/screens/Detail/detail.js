import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { themes } from '../../themes/basedThemes';
import UnityImage from './components/unityImage';
import Shifts from '../../custom/shifts/shifts';
import { useNavigation } from '@react-navigation/native';
import Select from '../../custom/select/select';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../custom/cards/card';

export default function Detail(data) {
  const { title, image, turnos } = data.route.params;
  const [selectedShift, setSelectedShift] = useState({});

  const selectShift = (shift) => {
    console.log(shift);
    setSelectedShift(shift);
  };

  useEffect(() => {
    console.log('shift: ', selectedShift);
  }, [selectedShift]);

  return (
    <View>
      <UnityImage image={image} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <Shifts turnos={turnos} />

      <Select
        turnos={turnos}
        defaultValue={selectedShift}
        onSelect={selectShift}
      />
      {selectedShift && (
        <FlatList
          data={selectedShift.shifts}
          renderItem={(shift) => <Card shifts={shift} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: themes.mainColor,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
