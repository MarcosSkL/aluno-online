const mediaCA = require("../../../src/models/mediaCA");

test('notaDoAluno 9.5 deve retornar "SS - Superior"', () => {
  expect(mediaCA(9.5)).toBe("SS - Superior");
});

test('notaDoAluno 7.8 deve retornar "MS - Médio Superior"', () => {
  expect(mediaCA(7.8)).toBe("MS - Médio Superior");
});

test('notaDoAluno 5.5 deve retornar "MM - Médio"', () => {
  expect(mediaCA(5.5)).toBe("MM - Médio");
});

test('notaDoAluno 3.2 deve retornar "MI - Médio Inferior"', () => {
  expect(mediaCA(3.2)).toBe("MI - Médio Inferior");
});

test('notaDoAluno 1.5 deve retornar "II - Inferior"', () => {
  expect(mediaCA(1.5)).toBe("II - Inferior");
});

test('notaDoAluno 0.0 deve retornar "SR - Sem rendimento"', () => {
  expect(mediaCA(0.0)).toBe("SR - Sem rendimento");
});

test("notaDoAluno inválida deve lançar um erro", () => {
  expect(() => {
    mediaCA(11);
  }).toThrow("nota inválida");
});
