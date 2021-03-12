import _ from 'lodash';
import { ClassDescription } from '../../interfaces/Class';
import Skill from '../../interfaces/Skills';
import { Atributo } from '../atributos';
import { standardFaithProbability } from '../divindades';
import PROFICIENCIAS from '../proficiencias';

const CLERIGO: ClassDescription = {
  name: 'Clérigo',
  pv: 16,
  addpv: 4,
  pm: 5,
  addpm: 5,
  periciasbasicas: [
    {
      type: 'and',
      list: [Skill.RELIGIAO, Skill.VONTADE],
    },
  ],
  periciasrestantes: {
    qtd: 2,
    list: [
      Skill.CONHECIMENTO,
      Skill.CURA,
      Skill.DIPLOMACIA,
      Skill.FORTITUDE,
      Skill.INICIATIVA,
      Skill.INTUICAO,
      Skill.LUTA,
      Skill.MISTICISMO,
      Skill.NOBREZA,
      Skill.OFICIO,
      Skill.PERCEPCAO,
    ],
  },
  proeficiencias: [PROFICIENCIAS.SIMPLES, PROFICIENCIAS.LEVES],
  abilities: [
    {
      name: 'Devoto',
      text:
        'Você se torna devoto de um deus maior. Você deve obedecer às Obrigações & Restrições de seu deus, mas, em troca, ganha os Poderes Concedidos dele. Veja a lista de deuses na página 97. Como alternativa, você pode cultuar o Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única Obrigação & Restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que clérigos do Panteão consideram proibido). O nome desta habilidade varia de acordo com a divindade escolhida: Devoto de Azgher, Devoto de Thyatis... ou Devoto dos Deuses, se escolher cultuar o Panteão como um todo.',
      effect: null,
      nivel: 1,
    },
    {
      name: 'Magias',
      text:
        'Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma seu bônus de Sabedoria no seu total de PM. Veja o Capítulo 4 para as regras de magia.',
      effect: null,
      nivel: 1,
    },
  ],
  probDevoto: 0.95,
  qtdPoderesConcedidos: 'all',
  faithProbability: standardFaithProbability,
  setup: (classe) => {
    const modifiedClasse = _.cloneDeep(classe);
    modifiedClasse.spellPath = {
      initialSpells: 3,
      spellType: 'Divine',
      qtySpellsLearnAtLevel: () => 1,
      spellCircleAvailableAtLevel: (level) => {
        if (level < 5) return 1;
        if (level < 9) return 2;
        if (level < 13) return 3;
        if (level < 17) return 4;
        return 5;
      },
      keyAttribute: Atributo.SABEDORIA,
    };

    return modifiedClasse;
  },
};

export default CLERIGO;
