import React from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable, TouchableOpacity } from 'react-native';
import { themes } from '../../../themes/basedThemes';

export default function UnidadeCard({ props, handlePress }) {
  const { id, title, image, city, uf, type, description } = props;

  return (
    <View style={styles.container} key={id}>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri:
              image ??
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardLabel}>
            {city}/{uf}
          </Text>
          <Text style={styles.cardDescription}>{description}</Text>
          <Text style={styles.cardFooter}>Anunciado à 12 min</Text>
         
          <Button
          title='Ver detalhes'
          onPress={() => handlePress(props)}
          color={themes.mainColor}
        />
      
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  btn: {
    backgroundColor: 'red',
  },
  card: {
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    paddingBottom: 10
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: themes.mainColor,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: themes.mainColor,
    fontSize: 12,
    fontStyle: 'italic',
    paddingBottom: 5,
    fontWeight: 'bold',
  },
});
