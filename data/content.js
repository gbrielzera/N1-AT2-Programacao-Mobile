// Conteúdo estático usado para preencher as telas (dados de exemplo).

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
    categoria: 'Ranqueada',
    capa: 'https://picsum.photos/seed/legendarios/128',
    banner: 'https://picsum.photos/seed/legendarios-banner/800/600',
    descricao: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    data: '18/06',
    hora: '21:00h',
    papel: 'Anfitrião',
  },
  {
    id: '2',
    titulo: 'Yeah, boy',
    categoria: 'Diversão',
    capa: 'https://picsum.photos/seed/yeahboy/128',
    banner: 'https://picsum.photos/seed/yeahboy-banner/800/600',
    descricao: 'Explorando o velho oeste sem pressa nenhuma, só pra relaxar',
    data: '23/06',
    hora: '19:00h',
    papel: 'Visitante',
  },
  {
    id: '3',
    titulo: 'Rumo ao topo',
    categoria: '1x1',
    capa: 'https://picsum.photos/seed/rumoaotopo/128',
    banner: 'https://picsum.photos/seed/rumoaotopo-banner/800/600',
    descricao: 'Treino livre pra afiar a mira antes do campeonato',
    data: '20/06',
    hora: '09:00h',
    papel: 'Anfitrião',
  },
  {
    id: '4',
    titulo: 'Bora queimar tudo',
    categoria: 'Ranqueada',
    capa: 'https://picsum.photos/seed/queimartudo/128',
    banner: 'https://picsum.photos/seed/queimartudo-banner/800/600',
    descricao: 'Squad fechado, foco total em fechar o dia com a vitória',
    data: '20/06',
    hora: '14:20h',
    papel: 'Anfitrião',
  },
  {
    id: '5',
    titulo: 'Valorosos',
    categoria: 'Diversão',
    capa: 'https://picsum.photos/seed/valorosos/128',
    banner: 'https://picsum.photos/seed/valorosos-banner/800/600',
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

export const servidores = [
  { id: '1', nome: 'Lendários' },
  { id: '2', nome: 'Yeah, boy' },
  { id: '3', nome: 'Rumo ao topo' },
];
