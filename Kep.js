/* hozd létre a Kep osztályt
adattagok: 
kep, cim, szuloElem

tagfüggvények

megjelenit
*/
export default class Kep {

  constructor(kep, cim,  szuloElem) {
 
    this.kep = kep;
    this.cim = cim;

    this.szuloElem = szuloElem;
    this.megjelenit();
    
  }
  megjelenit(){
    let html=`
          <div class="kep">
                <img src="${this.kep}" alt="${this.cim}">               
            </div>
    `
    this.szuloElem.innerHTML+=html
  }
}
