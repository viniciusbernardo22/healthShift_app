import {Image, StyleSheet} from 'react-native';

export default function UnityImage({ image }) {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.cardImage}
    />
  );
}

const styles = StyleSheet.create({
  cardImage: {
    height: 180,
    marginBottom: 8,
  },
});
