import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatDateTimeRange } from '../../utils/formatDate';
import { themes } from '../../themes/basedThemes';
export default function Card({ shifts }) {
  const { id, starting, finishing } = shifts.item;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {formatDateTimeRange(starting, finishing)}
        </Text>
      </View>

      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonTxt}>Candidatar-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 3,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: themes.mainColor,
    fontSize: 16
  },
  Button: {
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: themes.mainColor,
    borderRadius: 12
  },
  ButtonTxt: {
    color: '#fff',
    fontSize: 14
  }
});
