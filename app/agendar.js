import { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Cabecalho from '../components/Cabecalho';
import Categoria from '../components/Categoria';
import Botao from '../components/Botao';
import colors from '../theme/colors';
import { categorias, servidorSelecionado } from '../data/content';

// Tela de Agendar partida, com o servidor já selecionado (vindo da Home ou
// dos Detalhes). A lista de categorias tem estado: tocar em uma marca ela e
// desmarca a anterior.
export default function Agendar() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [hora, setHora] = useState('');
  const [minuto, setMinuto] = useState('');
  const [descricao, setDescricao] = useState('');

  const formularioValido =
    categoriaSelecionada !== null &&
    dia.length > 0 &&
    mes.length > 0 &&
    hora.length > 0 &&
    minuto.length > 0 &&
    descricao.length > 0;

  function agendar() {
    Alert.alert(
      'Partida agendada!',
      `${servidorSelecionado.titulo} — ${dia}/${mes} às ${hora}:${minuto}`
    );
    router.back();
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Cabecalho title="Agendar partida" onBack={() => router.back()} />

      <Pressable style={styles.flex} onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
          <Text style={styles.rotulo}>Categoria</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriasLinha}>
              {categorias.map((categoria) => (
                <Categoria
                  key={categoria.id}
                  titulo={categoria.titulo}
                  icone={categoria.icone}
                  selecionavel
                  selecionado={categoriaSelecionada === categoria.id}
                  onPress={() => setCategoriaSelecionada(categoria.id)}
                />
              ))}
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.servidorBox} activeOpacity={0.7}>
            <Image source={servidorSelecionado.capa} style={styles.servidorCapa} resizeMode="cover" />

            <View style={styles.servidorTextos}>
              <Text style={styles.servidorNome}>{servidorSelecionado.titulo}</Text>
              <Text style={styles.servidorJogo}>{servidorSelecionado.jogo}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color={colors.label} />
          </TouchableOpacity>

          <View style={styles.linhaData}>
            <View style={styles.colunaData}>
              <Text style={styles.rotulo}>Dia e mês</Text>
              <View style={styles.duplaCampos}>
                <TextInput
                  style={styles.campoData}
                  keyboardType="numeric"
                  placeholder="00"
                  placeholderTextColor={colors.label}
                  value={dia}
                  onChangeText={(texto) => setDia(texto.slice(0, 2))}
                />
                <TextInput
                  style={styles.campoData}
                  keyboardType="numeric"
                  placeholder="00"
                  placeholderTextColor={colors.label}
                  value={mes}
                  onChangeText={(texto) => setMes(texto.slice(0, 2))}
                />
              </View>
            </View>

            <View style={styles.colunaData}>
              <Text style={styles.rotulo}>Hora e minuto</Text>
              <View style={styles.duplaCampos}>
                <TextInput
                  style={styles.campoData}
                  keyboardType="numeric"
                  placeholder="00"
                  placeholderTextColor={colors.label}
                  value={hora}
                  onChangeText={(texto) => setHora(texto.slice(0, 2))}
                />
                <TextInput
                  style={styles.campoData}
                  keyboardType="numeric"
                  placeholder="00"
                  placeholderTextColor={colors.label}
                  value={minuto}
                  onChangeText={(texto) => setMinuto(texto.slice(0, 2))}
                />
              </View>
            </View>
          </View>

          <View style={styles.linhaDescricao}>
            <Text style={styles.rotulo}>Descrição</Text>
            <Text style={styles.contador}>Max 100 caracteres</Text>
          </View>
          <TextInput
            style={styles.campoDescricao}
            multiline
            placeholder="Fala um pouco sobre a partida"
            placeholderTextColor={colors.label}
            value={descricao}
            onChangeText={(texto) => setDescricao(texto.slice(0, 100))}
          />

          <View style={styles.botaoBox}>
            <Botao title="Agendar" onPress={agendar} disabled={!formularioValido} />
          </View>
        </ScrollView>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32,
  },
  rotulo: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.label,
    marginBottom: 12,
  },
  categoriasLinha: {
    flexDirection: 'row',
    gap: 12,
  },
  servidorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.surface,
    borderRadius: 8,
    padding: 4,
    paddingRight: 16,
    marginTop: 20,
  },
  servidorCapa: {
    width: 64,
    height: 64,
    borderRadius: 6,
  },
  servidorTextos: {
    flex: 1,
    gap: 2,
  },
  servidorNome: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.heading,
  },
  servidorJogo: {
    fontSize: 13,
    color: colors.label,
  },
  linhaData: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 24,
  },
  colunaData: {
    flex: 1,
  },
  duplaCampos: {
    flexDirection: 'row',
    gap: 12,
  },
  campoData: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    backgroundColor: colors.surface,
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
  linhaDescricao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 24,
    marginBottom: 12,
  },
  contador: {
    fontSize: 13,
    color: colors.label,
  },
  campoDescricao: {
    height: 120,
    borderRadius: 8,
    backgroundColor: colors.surface,
    color: colors.white,
    padding: 16,
    textAlignVertical: 'top',
    fontSize: 15,
  },
  botaoBox: {
    marginTop: 32,
  },
});
