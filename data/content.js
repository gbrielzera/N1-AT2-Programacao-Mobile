// Conteúdo estático usado para preencher as telas (dados de exemplo).

const capaLendarios = require('../assets/images/Lendarios.png');
const capaYeahBoy = require('../assets/images/Yeah boy.png');
const capaRumoAoTopo = require('../assets/images/Rumo ao topo.png');
const capaBoraQueimarTudo = require('../assets/images/Bora queimar tudo.png');
const capaValorosos = require('../assets/images/Valorosos.png');

export const usuario = {
  nome: 'Tiago',
  avatar: 'https://i.pravatar.cc/150?img=12',
};

export const categorias = [
  { id: 'ranqueada', titulo: 'Ranqueada', icone: 'trophy' },
  { id: 'duelo', titulo: 'Duelo 1x1', icone: 'sword-cross' },
  { id: 'diversao', titulo: 'Diversão', icone: 'emoticon-happy' },
  { id: 'squad', titulo: 'Squad', icone: 'account-group' },
];

export const partidas = [
  {
    id: '1',
    titulo: 'Lendários',
    jogo: 'League of Legends',
    categoria: 'Ranqueada',
    capa: capaLendarios,
    descricao: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    data: '18/06',
    hora: '21:00h',
    papel: 'Anfitrião',
  },
  {
    id: '2',
    titulo: 'Yeah, boy',
    jogo: 'Red Dead Redemption 2',
    categoria: 'Diversão',
    capa: capaYeahBoy,
    descricao: 'Explorando o velho oeste sem pressa nenhuma, só pra relaxar',
    data: '23/06',
    hora: '19:00h',
    papel: 'Visitante',
  },
  {
    id: '3',
    titulo: 'Rumo ao topo',
    jogo: 'CS:GO',
    categoria: '1x1',
    capa: capaRumoAoTopo,
    descricao: 'Treino livre pra afiar a mira antes do campeonato',
    data: '20/06',
    hora: '09:00h',
    papel: 'Anfitrião',
  },
  {
    id: '4',
    titulo: 'Bora queimar tudo',
    jogo: 'Apex Legends',
    categoria: 'Ranqueada',
    capa: capaBoraQueimarTudo,
    descricao: 'Squad fechado, foco total em fechar o dia com a vitória',
    data: '20/06',
    hora: '14:20h',
    papel: 'Anfitrião',
  },
  {
    id: '5',
    titulo: 'Valorosos',
    jogo: 'Valorant',
    categoria: 'Diversão',
    capa: capaValorosos,
    descricao: 'Partida tranquila pra testar os agentes novos',
    data: '18/06',
    hora: '21:00h',
    papel: 'Anfitrião',
  },
];

export const jogadoresPorPartida = {
  1: [
    { id: 'a', nome: 'Tiago Luchtenberg', avatar: 'https://i.pravatar.cc/150?img=12', status: 'disponivel' },
    { id: 'b', nome: 'Rodrigo Gonçalves', avatar: 'https://i.pravatar.cc/150?img=33', status: 'ocupado' },
    { id: 'c', nome: 'Diego Fernandes', avatar: 'https://i.pravatar.cc/150?img=51', status: 'ocupado' },
  ],
};

// Servidor já selecionado na tela de Agendar (não é preciso construir o
// modal de escolha — o usuário já chega nessa tela com um servidor definido).
export const servidorSelecionado = partidas[4];
