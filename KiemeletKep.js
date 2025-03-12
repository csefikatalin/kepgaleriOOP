import Kep from "./Kep.js";

export default class KiemeltKep extends Kep {

  constructor(kep, cim, szuloElem, hossz) {
    super(kep, cim, szuloElem);
    this.megjelenit()
  }


  megjelenit() {
    let html = `
          <div class="kep">
                <img src="${this.kep}" alt="${this.cim}">
                <h3>${this.cim}</h3>
            </div>
    `;
    this.szuloElem.innerHTML = html;
  }
}
