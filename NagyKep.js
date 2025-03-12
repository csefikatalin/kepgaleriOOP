import { KEPEK } from "./adatok.js";
import KiemeltKep from "./KiemeletKep.js";

export default class NagyKep {
  #aktIndex = 0;
  constructor(szuloElem) {
    this.NAGYKEPELEM = szuloElem;
    this.balElem = document.querySelector(".bal");
    this.jobbElem = document.querySelector(".jobb");
    this.balElem.addEventListener("click", () => {
        this.#aktIndex--
      this.setIndex(this.#aktIndex);
      
    });
    this.jobbElem.addEventListener("click", () => {
        this.#aktIndex++
      this.setIndex(this.#aktIndex);
    });
    this.setIndex(0);
  }

  setIndex(index) {
    this.#aktIndex = index;
    if (this.#aktIndex >= KEPEK.length) {
      this.#aktIndex = 0;
    }
    if (this.#aktIndex < 0) {
      this.#aktIndex = KEPEK.length - 1;
    }
    console.log(this.#aktIndex);
    this.beallit();
  }

  beallit() {
    new KiemeltKep(
      KEPEK[this.#aktIndex].kep,
      KEPEK[this.#aktIndex].cim,
      this.NAGYKEPELEM,
      KEPEK.length
    );
  }
}
