import { GeneralPower, GeneralPowerType, RequirementType } from './types';

const combatPowers: GeneralPower[] = [
  {
    name: 'Acuidade com Arma',
    description:
      'Quando usa uma arma leve de corpo a corpo uma arma de arremesso, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano.',
    type: GeneralPowerType.COMBATE,
    requirements: [
      { type: RequirementType.ATRIBUTO, name: 'Destreza', value: 13 },
    ],
  },
  {
    name: 'Arma Secundária Grande',
    description:
      'Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas.',
    type: GeneralPowerType.COMBATE,
    requirements: [
      { type: RequirementType.PODER, name: 'Estilo de Duas Armas' },
    ],
  },
  {
    name: 'Arremesso Potente',
    description:
      'Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso. ',
    type: GeneralPowerType.COMBATE,
    requirements: [
      { type: RequirementType.PODER, name: 'Estilo de Arremesso' },
      { type: RequirementType.ATRIBUTO, name: 'Força', value: 13 },
    ],
  },
  {
    name: 'Ataque pesado',
    description:
      'Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).',
    type: GeneralPowerType.COMBATE,
    requirements: [
      { type: RequirementType.PODER, name: 'Estilo de Duas Mãos' },
    ],
  },
  {
    name: 'Ataque poderoso',
    description:
      'Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano. ',
    type: GeneralPowerType.COMBATE,
    requirements: [
      { type: RequirementType.ATRIBUTO, name: 'Força', value: 13 },
    ],
  },
  {
    name: 'Ataque preciso',
    description:
      'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.',
    type: GeneralPowerType.COMBATE,
    requirements: [{ type: RequirementType.PODER, name: 'Estilo de Uma Arma' }],
  },
];

export default combatPowers;
