// Paleta de cores do app — tema escuro, baseado nos valores reais
// extraídos do protótipo do Figma (GamePlay).
export default {
  // fundo geral de todas as telas (navy bem escuro)
  background: '#0D1440',

  // navy um pouco mais claro: cards de categoria selecionados, campos de
  // input (dia/mês, hora/minuto, descrição) e o cartão de servidor
  surface: '#1B2464',

  // navy intermediário: cards de categoria NÃO selecionados no Agendar
  surfaceDim: '#151D53',

  // vermelho/rosa: botão principal, "+", indicador de categoria marcada,
  // bolinha "Ocupado"
  primary: '#E51C44',

  // verde: bolinha "Disponível", papel "Visitante"
  success: '#32BD50',

  // textos
  heading: '#FFFFFF', // títulos (ex: "Lendários", nome do jogador, "Olá, Tiago")
  text: '#C7CBE3', // texto secundário com mais contraste (descrições, subtítulos)
  label: '#9AA0C0', // rótulos discretos (ex: "Categoria", "Jogadores", "Total")

  // linhas e bordas (bem sutis sobre fundo escuro)
  line: 'rgba(255, 255, 255, 0.08)',

  // mantidos para compatibilidade com os componentes já escritos
  navy: '#0D1440',
  categoryInactive: '#151D53',
  white: '#FFFFFF',
};
