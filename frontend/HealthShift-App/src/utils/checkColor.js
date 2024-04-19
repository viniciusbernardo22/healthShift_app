import { themes } from '../themes/basedThemes';

//Com base no turno disponivel, escolhe uma cor
function checkColor(turno) {
  switch (turno.title) {
    case 'Matutino':
      return themes.daylight;
    case 'Vespertino':
      return themes.afternoon;
    case 'Noturno':
      return themes.mainColor;
    default:
      return themes.mainColor;
  }
}

export { checkColor };
