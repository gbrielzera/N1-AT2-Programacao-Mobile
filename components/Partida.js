import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

// Item da lista "Partidas agendadas", na Home.
export default function Partida({ capa, titulo, categoria, data, hora, papel, onPress }) {
  const ehAnfitriao = papel === 'Anfitrião';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: capa }} style={styles.capa} />

      <View style={styles.info}>
        <View style={styles.linhaTopo}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.categoria}>{categoria}</Text>
        </View>

        <View style={styles.linhaBase}>
          <View style={styles.dataBox}>
            <Ionicons name="calendar-outline" size={14} color={colors.primary} />
            <Text style={styles.data}>{data} às {hora}</Text>
          </View>

          <View style={styles.papelBox}>
            <Ionicons
              name="person"
              size={14}
              color={ehAnfitriao ? colors.primary : colors.success}
            />
            <Text style={[styles.papel, { color: ehAnfitriao ? colors.primary : colors.success }]}>
              {papel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  capa: {
    width: 64,
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.navy,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  linhaTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.heading,
  },
  categoria: {
    fontSize: 13,
    color: colors.text,
  },
  linhaBase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  data: {
    fontSize: 13,
    color: colors.text,
  },
  papelBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  papel: {
    fontSize: 13,
    fontWeight: '700',
  },
});
