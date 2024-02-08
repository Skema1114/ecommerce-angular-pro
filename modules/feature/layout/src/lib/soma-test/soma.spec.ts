import { soma } from './soma';

describe('soma', () => {
  it('1 + 1 deve ser igual a 2', () => {
    const resultado = soma(1, 1);
    expect(resultado).toBe(2);
  });
  it('2 + 2 NÃO deve ser igual a 5', () => {
    const resultado = soma(2, 2);
    expect(resultado).not.toBe(5);
  });
});
