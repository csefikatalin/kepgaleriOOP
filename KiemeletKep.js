import Kep from "./Kep.js";

export default class KiemeltKep extends Kep {

  constructor(kep, cim, id,szuloElem, ) {
    super(kep, cim, id, szuloElem);
  
    this.megjelenit()
  }


  megjelenit() {
    let html = `
          <div class="kep">
                <img src="${this.kep}" alt="${this.cim}">
                <h3>${this.cim}</h3>
            </div>
    `;
    this.szuloElem.empty()
    this.szuloElem.append(html);
  }
}
