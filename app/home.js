import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../components/Profile';
import Category from '../components/Category';
import Appointment from '../components/Appointment';
import colors from '../theme/colors';
import { usuario, categorias, partidas } from '../data/content';

// Tela Home.
export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
        <View style={styles.topo}>
          <Profile nome={usuario.nome} frase="Hoje é dia de vitória" avatar={usuario.avatar} />

          <TouchableOpacity style={styles.botaoMais} onPress={() => router.push('/agendar')}>
            <Ionicons name="add" size={28} color={colors.white} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categorias}>
          <View style={styles.categoriasLinha}>
            {categorias.map((categoria) => (
              <Category key={categoria.id} titulo={categoria.titulo} icone={categoria.icone} />
            ))}
          </View>
        </ScrollView>

        <View style={styles.secaoTopo}>
          <Text style={styles.secaoTitulo}>Partidas agendadas</Text>
          <Text style={styles.secaoTotal}>Total {partidas.length}</Text>
        </View>

        <View style={styles.lista}>
          {partidas.map((partida) => (
            <Appointment
              key={partida.id}
              capa={partida.capa}
              titulo={partida.titulo}
              categoria={partida.categoria}
              data={partida.data}
              hora={partida.hora}
              papel={partida.papel}
              onPress={() => router.push({ pathname: '/detalhes', params: { id: partida.id } })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  botaoMais: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorias: {
    marginTop: 24,
  },
  categoriasLinha: {
    flexDirection: 'row',
    gap: 12,
  },
  secaoTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 28,
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
  lista: {
    gap: 0,
  },
});
