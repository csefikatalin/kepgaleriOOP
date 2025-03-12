import { KEPEK } from "./adatok.js";
import KiemeltKep from "./KiemeletKep.js";

export default class NagyKep {
  #aktIndex = 0;
  constructor(szuloElem) {
    this.NAGYKEPELEM = $(szuloElem);
   
    this.balElem = $(".bal");
    this.jobbElem = $(".jobb");
    this.balElem.on("click", () => {
        this.#aktIndex--
      this.setIndex(this.#aktIndex);
      
    });
    this.jobbElem.on("click", () => {
        this.#aktIndex++
      this.setIndex(this.#aktIndex);
    });

    $(window).on("kivalaszt",(event)=>{
      console.log(event.detail)
      this.setIndex(event.detail);
    })
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
      KEPEK[this.#aktIndex].cim,-1,
      this.NAGYKEPELEM
    );
  }
}
