function mediaCA(notaDoAluno) {
  if (notaDoAluno >= 9.0 && notaDoAluno <= 10) {
    return "SS - Superior";
  } else if (notaDoAluno >= 7.0 && notaDoAluno < 9.0) {
    return "MS - Médio Superior";
  } else if (notaDoAluno >= 5.0 && notaDoAluno < 7.0) {
    return "MM - Médio";
  } else if (notaDoAluno >= 0.1 && notaDoAluno < 3.0) {
    return "II - Inferior";
  } else if (notaDoAluno === 0.0) {
    return "SR - Sem rendimento";
  } else {
    throw new Error("nota inválida");
  }
}

module.exports = mediaCA;
