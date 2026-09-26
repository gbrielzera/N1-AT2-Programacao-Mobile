import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../theme/colors';

// Card de categoria.
// Na Home ele é só exibido (fundo navy fixo).
// No Agendar ele é selecionável: recebe `selecionavel` e `selecionado`,
// muda de cor e mostra um checkbox no canto quando marcado.
export default function Categoria({
  titulo,
  icone,
  onPress,
  selecionavel = false,
  selecionado = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selecionavel && !selecionado && styles.containerInativo,
      ]}
      onPress={onPress}
      activeOpacity={selecionavel ? 0.7 : 1}
      disabled={!selecionavel}
    >
      {selecionavel && (
        <View style={[styles.checkbox, selecionado && styles.checkboxMarcado]} />
      )}

      <MaterialCommunityIcons name={icone} size={32} color={colors.white} />
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 96,
    height: 96,
    borderRadius: 12,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  containerInativo: {
    backgroundColor: colors.categoryInactive,
  },
  titulo: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  checkbox: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  checkboxMarcado: {
    backgroundColor: colors.primary,
  },
});
