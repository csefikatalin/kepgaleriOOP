
export default class Kep {

  constructor(kep, cim, index, szuloElem) {

    this.kep = kep;
    this.cim = cim;
    this.id = index
    this.szuloElem = $(szuloElem);
    this.megjelenit()
    this.kepElem = $(".kep:last-child")
    //this.kepElem = this.szuloElem.lastElementChild
   /*  console.log(this.kepElem) */
    this.kepElem.on("click",  (event)=> {
   /*    console.log(event.target.closest("div")) */
      console.log(this.id)
      this.kattintasTrigger()
    })


  }
  megjelenit() {
    let html = `
          <div class="kep" >
                <img src="${this.kep}" alt="${this.cim}">               
            </div>
    `
    //this.szuloElem.innerHTML+=html;
    //this.szuloElem.insertAdjacentHTML("beforeend", html)
    this.szuloElem.append(html)
  }
  kattintasTrigger() {
    let esemeny = new CustomEvent("kivalaszt", {
        detail: this.id, //ezzel adok át adatokat
    });
    window.dispatchEvent(esemeny); //a főablakhoz adom az eseményt, ezt tudom majd a script.js-ben elkapni.
}

}
