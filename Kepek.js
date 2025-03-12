import Kep from "./Kep.js";

export class Kepek {
  #lista;
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = $(szuloElem);
    this.megjelenit();
  }
  megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      const GALERIAKEP = new Kep(
        this.#lista[index].kep,
        this.#lista[index].cim,index,
        this.szuloElem
      );
    }
  }
}
