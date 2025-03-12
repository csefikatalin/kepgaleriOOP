/* hozd létre a Kep osztályt
adattagok: 
kep, cim, szuloElem

tagfüggvények

megjelenit
*/
export default class Kep {

  constructor(kep, cim, szuloElem) {

    this.kep = kep;
    this.cim = cim;

    this.szuloElem = szuloElem;
    this.megjelenit()
    //this.kepElem = document.querySelector(".kep:last-child")
    this.kepElem = this.szuloElem.lastElementChild
    console.log(this.kepElem)
    this.kepElem.addEventListener("click", function (event) {
      console.log(event.target.closest("div"))
      console.log(this)
    })


  }
  megjelenit() {
    let html = `
          <div class="kep" >
                <img src="${this.kep}" alt="${this.cim}">               
            </div>
    `

    //this.szuloElem.innerHTML+=html;
    this.szuloElem.insertAdjacentHTML("beforeend", html)
  }


}
