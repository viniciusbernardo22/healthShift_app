import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';

import { themes } from '../../themes/basedThemes';
import UnityImage from './components/unityImage';
import Shifts from '../../custom/shifts/shifts';
import { useNavigation } from '@react-navigation/native';
import Select from '../../custom/select/select';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../custom/cards/card';
import { useContext } from 'react';
import { ShiftContext } from '../../contexts/shiftContext';

export default function Detail(data) {
  const { title, image, turnos } = data.route.params;
  const [selectedShift, setSelectedShift] = useState({});
  const { addShift } = useContext(ShiftContext);
  const navigation = useNavigation();

  const onApply = (applyInfo) => {
    addShift(data.route.params, applyInfo);
    Alert.alert('Sucesso', 'Candidatura bem sucedida');
    navigation.goBack();
  };
  const selectShift = (shift) => setSelectedShift(shift);

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
          renderItem={(shift) => <Card shifts={shift} btnAction={onApply} />}
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
