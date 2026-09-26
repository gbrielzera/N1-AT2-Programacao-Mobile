import { Image, StyleSheet } from 'react-native';
import colors from '../theme/colors';

// Avatar circular com borda, usado no cabeçalho da Home e na lista de jogadores.
export default function Avatar({ uri, size = 56 }) {
  return (
    <Image
      source={{ uri }}
      style={[
        styles.image,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
