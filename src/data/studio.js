export const studio = {
  name: 'Studio CFCM',
  shortName: 'CFCM',
  tagline: 'Aqui a máquina é você',
  unit: 'Unidade Floramar',
  city: 'Belo Horizonte — MG',
  address: 'Av. Saramenha, 705 — Floramar',
  postalCode: 'CEP 31840-220',
  phoneDisplay: '+55 31 99119-2635',
  phoneDigits: '5531991192635',
  instagram: '@studio.cfcm',
  instagramUrl: 'https://www.instagram.com/studio.cfcm/',
  whatsappUrl:
    'https://wa.me/5531991192635?text=Ol%C3%A1%2C%20Studio%20CFCM%21%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental.',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Saramenha%2C%20705%20-%20Floramar%2C%20Belo%20Horizonte%20-%20MG%2C%2031840-220',
}

// Modalidades ainda não confirmadas pelo Studio. Mantidas em um único ponto
// para que sejam substituídas rapidamente quando a grade oficial for enviada.
export const modalities = [
  {
    index: '01',
    title: 'Força',
    description:
      'Uma proposta de treino orientado para desenvolver força com execução consciente e progressão consistente.',
    focus: ['Técnica de movimento', 'Progressão planejada', 'Acompanhamento próximo'],
  },
  {
    index: '02',
    title: 'Condicionamento',
    description:
      'Sessões dinâmicas para ampliar capacidade física, disposição e confiança para os desafios da rotina.',
    focus: ['Ritmo individual', 'Estímulos variados', 'Evolução gradual'],
  },
  {
    index: '03',
    title: 'Performance',
    description:
      'Uma frente possível para quem busca preparação mais específica, com objetivos e contexto bem definidos.',
    focus: ['Objetivo claro', 'Treino direcionado', 'Ajustes contínuos'],
  },
]

export const methodSteps = [
  {
    number: '01',
    title: 'Entender o seu ponto de partida',
    text: 'A proposta começa por ouvir sua rotina, seu histórico e o que você quer construir com o treino.',
  },
  {
    number: '02',
    title: 'Dar direção a cada sessão',
    text: 'Você treina sabendo o que fazer, como executar e por que aquele estímulo faz parte do processo.',
  },
  {
    number: '03',
    title: 'Ajustar para continuar evoluindo',
    text: 'O acompanhamento próximo permite adaptar o treino e avançar com consistência, sem atalhos vazios.',
  },
]

export const interestOptions = [
  'Ainda não sei — quero orientação',
  'Treino de força',
  'Condicionamento',
  'Performance',
  'Outro objetivo',
]

export const goalOptions = [
  'Ganhar força e condicionamento',
  'Criar constância no treino',
  'Melhorar a preparação física',
  'Retomar os treinos com acompanhamento',
  'Outro objetivo',
]
