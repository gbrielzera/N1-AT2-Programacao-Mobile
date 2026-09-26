import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Botao from '../components/Botao';
import colors from '../theme/colors';

// Tela de Login.
export default function Login() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Image
        source={{ uri: 'https://picsum.photos/seed/gameplay-login/800/900' }}
        style={styles.ilustracao}
      />

      <View style={styles.tituloBox}>
        <Text style={styles.titulo}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.subtitulo}>
          Crie grupos para jogar seus games favoritos com seus amigos
        </Text>

        <Botao
          title="Entrar com Discord"
          icon="discord"
          onPress={() => router.replace('/home')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  ilustracao: {
    width: '100%',
    height: 320,
  },
  tituloBox: {
    backgroundColor: colors.navy,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 34,
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  subtitulo: {
    fontSize: 15,
    color: colors.text,
    textAlign: 'center',
  },
});
