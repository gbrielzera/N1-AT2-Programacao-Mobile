import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../theme/colors';

// Botão padrão do app.
export default function Botao({ title, onPress, disabled, icon }) {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.containerDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && (
        <View style={styles.iconBox}>
          <FontAwesome5 name={icon} size={20} color={colors.white} />
        </View>
      )}
      <View style={styles.labelBox}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 8,
    overflow: 'hidden',
  },
  containerDisabled: {
    opacity: 0.4,
  },
  iconBox: {
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.3)',
  },
  labelBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
