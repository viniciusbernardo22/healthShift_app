import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { themes } from '../../themes/basedThemes';

function checkcolor(turno) {
  console.log(turno)
  switch (turno.title) {
    case 'Matutino':
      return '#87CEFA';
    case 'Vespertino':
      return '#FFA500';
    case 'Noturno':
      return themes.mainColor;
    default:
      return themes.mainColor;
  }
}


export default function Detail(data) {
  const { title, image, turnos } = data.route.params;

  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.cardImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.btnView}>
        {turnos.map((turno) => (
          <TouchableOpacity
            style={[styles.btns, {backgroundColor: checkcolor(turno)}]}
            disabled
            key={turno.title}
           >
            <Text style={styles.btnTxt}>{turno.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <SelectDropdown
        data={turnos}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {selectedItem && (
                <Icon
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) ||
                  'Qual turno deseja cobrir?'}
              </Text>
              <Icon
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: '#D2D9DF' }),
              }}
            >
              <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
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
    width: 130,
    color: 'red',
    padding: 10,
    borderRadius: 5,
  },
  btnTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
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
  dropdownButtonStyle: {
    height: 50,
    backgroundColor: themes.mainColor,
    color: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    margin: 10,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
    textAlign: 'center',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
    color: '#FFF',
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
    color: '#FFF',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
  },
});
