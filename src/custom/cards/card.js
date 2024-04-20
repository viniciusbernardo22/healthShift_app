import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatDateTimeRange } from '../../utils/formatDate';
import { themes } from '../../themes/basedThemes';
export default function Card({ shifts, btnAction, btnColor, btnTxt }) {
  const { id, starting, finishing } = shifts.item;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {formatDateTimeRange(starting, finishing)}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.Button,
          { backgroundColor: btnColor ? btnColor : themes.mainColor },
        ]}
        onPress={() => btnAction(shifts.item)}
      >
        <Text style={styles.ButtonTxt}>
          {btnTxt ? btnTxt : 'Candidatar-se'}
        </Text>
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
    fontSize: 16,
  },
  Button: {
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 12,
  },
  ButtonTxt: {
    color: '#fff',
    fontSize: 14,
  },
});
