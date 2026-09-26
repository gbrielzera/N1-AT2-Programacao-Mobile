import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import colors from '../theme/colors';

// Linha de jogador na tela de Detalhes: avatar, nome e status (bolinha colorida).
export default function Member({ nome, avatar, status }) {
  const disponivel = status === 'disponivel';

  return (
    <View style={styles.container}>
      <Avatar uri={avatar} size={64} />

      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>

        <View style={styles.statusBox}>
          <View style={[styles.bolinha, { backgroundColor: disponivel ? colors.success : colors.primary }]} />
          <Text style={styles.status}>{disponivel ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  info: {
    gap: 6,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.heading,
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bolinha: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  status: {
    fontSize: 13,
    color: colors.text,
  },
});
