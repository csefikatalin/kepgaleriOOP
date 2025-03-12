import { KEPEK } from "./adatok.js";
import Kep from "./Kep.js";
import { Kepek } from "./Kepek.js";
import NagyKep from "./NagyKep.js";

const GALERIAELEM = document.querySelectorAll(".galeria")[0];
const NAGYKEPELEM = document.querySelectorAll(".kiemelt")[0];

//new NagyKep(NAGYKEPELEM)

/* e helyett kellene egy Kepek osztály, 
ami egy ciklussal végigmegy a listán */
const GALERIAKEPEK = new Kepek(KEPEK, GALERIAELEM);
