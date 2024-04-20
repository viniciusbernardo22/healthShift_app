import { checkColor } from "../../utils/checkColor";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function Shifts({turnos}) {
 return (
    <View style={styles.btnView}>
    {turnos.map((turno) => (
      <TouchableOpacity
        style={[styles.btns, {backgroundColor: checkColor(turno)}]}
        disabled
        key={turno.title}
       >
        <Text style={styles.btnTxt}>{turno.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
 );
}

const styles = StyleSheet.create({
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      btns: {
        width: 100,
        color: 'red',
        padding: 5,
        borderRadius: 10,
      },
      btnTxt: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
      },
})