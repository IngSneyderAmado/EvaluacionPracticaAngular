import { Planta } from './planta';

describe('Planta', () => {
  it('should create an instance', () => {
    expect(new Planta(1,"","","",100,"","")).toBeTruthy();
  });
});
