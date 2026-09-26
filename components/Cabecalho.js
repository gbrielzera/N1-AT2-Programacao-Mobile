import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

// Cabeçalho navy com seta de voltar, título e um ícone opcional à direita.
export default function Cabecalho({ title, onBack, rightIcon, onRightPress }) {
  return (
    <View style={styles.wrapper}>
      <StatusBar style="light" />
      <SafeAreaView edges={['top']}>
        <View style={styles.content}>
          <TouchableOpacity onPress={onBack} hitSlop={12}>
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>

          <Text style={styles.title}>{title}</Text>

          {rightIcon ? (
            <TouchableOpacity onPress={onRightPress} hitSlop={12}>
              <Ionicons name={rightIcon} size={22} color={colors.primary} />
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.navy,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  placeholder: {
    width: 24,
  },
});
