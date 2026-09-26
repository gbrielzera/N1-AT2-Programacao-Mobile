import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import colors from '../theme/colors';

// Cabeçalho "Olá, Fulano" com avatar e frase de efeito, usado na Home.
export default function Profile({ nome, frase, avatar }) {
  return (
    <View style={styles.container}>
      <Avatar uri={avatar} size={56} />

      <View style={styles.texts}>
        <Text style={styles.saudacao}>
          Olá, <Text style={styles.nome}>{nome}</Text>
        </Text>
        <Text style={styles.frase}>{frase}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  texts: {
    flex: 1,
  },
  saudacao: {
    fontSize: 20,
    color: colors.heading,
  },
  nome: {
    fontWeight: '700',
  },
  frase: {
    fontSize: 14,
    color: colors.text,
    marginTop: 2,
  },
});
