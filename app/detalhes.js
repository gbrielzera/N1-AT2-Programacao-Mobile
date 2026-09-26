import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import Cabecalho from '../components/Cabecalho';
import Jogador from '../components/Jogador';
import Botao from '../components/Botao';
import colors from '../theme/colors';
import { partidas, jogadoresPorPartida } from '../data/content';

// Tela de Detalhes do servidor.
export default function Detalhes() {
  const { id } = useLocalSearchParams();
  const partida = partidas.find((item) => item.id === id) ?? partidas[0];
  const jogadores = jogadoresPorPartida[partida.id] ?? [];

  function entrarNaPartida() {
    Alert.alert('Entrar na partida', `Você entrou em ${partida.titulo}!`);
  }

  return (
    <View style={styles.container}>
      <Cabecalho
        title="Detalhes"
        onBack={() => router.back()}
        rightIcon="share-social"
        onRightPress={() => Alert.alert('Compartilhar', `Compartilhando "${partida.titulo}"`)}
      />

      <ScrollView bounces={false} contentContainerStyle={styles.scroll}>
        <View style={styles.bannerWrapper}>
          <Image source={partida.capa} style={styles.banner} resizeMode="cover" />
          <View style={styles.bannerSombra} />
          <View style={styles.bannerTextos}>
            <Text style={styles.bannerTitulo}>{partida.titulo}</Text>
            <Text style={styles.bannerDescricao}>{partida.descricao}</Text>
          </View>
        </View>

        <View style={styles.corpo}>
          <View style={styles.secaoTopo}>
            <Text style={styles.secaoTitulo}>Jogadores</Text>
            <Text style={styles.secaoTotal}>Total {jogadores.length}</Text>
          </View>

          <View>
            {jogadores.map((jogador) => (
              <Jogador key={jogador.id} nome={jogador.nome} avatar={jogador.avatar} status={jogador.status} />
            ))}
          </View>
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={styles.rodape}>
        <Botao title="Entrar na partida" icon="discord" onPress={entrarNaPartida} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flexGrow: 1,
  },
  bannerWrapper: {
    width: '100%',
    height: 280,
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  bannerSombra: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(14,20,64,0.45)',
  },
  bannerTextos: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
  },
  bannerTitulo: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.white,
  },
  bannerDescricao: {
    fontSize: 14,
    color: colors.white,
    marginTop: 8,
  },
  corpo: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  secaoTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  secaoTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.label,
  },
  secaoTotal: {
    fontSize: 13,
    color: colors.label,
  },
  rodape: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
});
