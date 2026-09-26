import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Botao from '../components/Botao';
import colors from '../theme/colors';

// Tela de Login.
export default function Login() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.ilustracaoBox}>
        <View style={styles.faixaGrande} />
        <View style={styles.faixaPequena} />

        <Image
          source={require('../assets/images/Imagem login.png')}
          style={styles.ilustracao}
          resizeMode="contain"
        />
      </View>

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
  ilustracaoBox: {
    width: '100%',
    height: 320,
    backgroundColor: colors.navy,
    overflow: 'hidden',
  },
  faixaGrande: {
    position: 'absolute',
    top: -60,
    right: -60,
    width: 110,
    height: 480,
    backgroundColor: colors.primary,
    transform: [{ rotate: '25deg' }],
  },
  faixaPequena: {
    position: 'absolute',
    bottom: -80,
    left: -70,
    width: 60,
    height: 300,
    backgroundColor: colors.primary,
    opacity: 0.85,
    transform: [{ rotate: '25deg' }],
  },
  ilustracao: {
    width: '100%',
    height: '100%',
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
