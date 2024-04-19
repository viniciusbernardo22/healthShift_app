import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { ShiftContext } from '../../contexts/shiftContext';
import Card from '../../custom/cards/card';
import { FlatList } from 'react-native-gesture-handler';
import { themes } from '../../themes/basedThemes';

export default function Turnos() {
  const { userShifts, removeShift } = useContext(ShiftContext);

  function cancelShift(shift, company) {
    removeShift(company.id, shift.id);
    Alert.alert('Sucesso', 'Candidatura cancelada com sucesso.');
  }

  return (
    <View style={styles.head}>
      {userShifts.length > 0 &&
        userShifts.map((shift, index) => (
          <View style={styles.separation} key={index}>
            <React.Fragment>
              <Text style={styles.title}>{shift.company.title}</Text>
              <FlatList
                data={shift.shifts}
                renderItem={(item) => (
                  <Card
                    shifts={item}
                    btnAction={(e) => cancelShift(e, shift.company)}
                    btnColor={'#E72929'}
                    btnTxt={'Excluir candidatura'}
                  />
                )}
              />
            </React.Fragment>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: themes.mainColor,
  },
  separation: {
    marginBottom: 10,
  },
});
