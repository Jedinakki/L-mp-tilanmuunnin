const Lampotila = document.getElementById("Lampotila")
const MuuntoNappi = document.getElementById("MuuntoNappi")
const valitsin = document.getElementById("valitsin")
const d1 = document.getElementById("d1")
const d2 = document.getElementById("d2")
const d3 = document.getElementById("d3")
const vastaus = document.getElementById("vastaus")
let numero
let Mnumero
let pyoristin = 0

function onInput(e){
    numero = e.target.value
}
function d1un(){
    d1.checked = false
}
function d2un(){
    d2.checked = false
}
function d3un(){
    d3.checked = false
}

function merkattu1(){
    d2un()
    d3un()
}
function merkattu2(){
    d1un()
    d3un()
}
function merkattu3(){
    d2un()
    d1un()
}
function laillinen(num){
    if (num >= -273.15){
        return true
    }else {
        return false
    }
}
function klikkaus(){
    if (d1.checked === true) {
        pyoristin = 1
    } else if (d2.checked === true) {
        pyoristin = 2
    } else if (d3.checked === true) {
        pyoristin =3
    } else {
        pyoristin = 0
    }

    if (valitsin.value == 0) {

        if (laillinen(numero)=== true){
            Mnumero = (numero*1.8+32).toFixed(pyoristin)
            vastaus.innerText = Mnumero + "F"
        }else{
            vastaus.innerText = "Luku on liian pieni tai sisältää kirjaimia"
        }

    } else if (valitsin.value == 1){

        Mnumero = ((numero-32)/1.8).toFixed(pyoristin)
        if (laillinen(Mnumero)=== true){            
            vastaus.innerText = Mnumero + "C"
        }else{
            vastaus.innerText = "Luku on liian pieni tai sisältää kirjaimia"
        }
        
    }
    
}

Lampotila.addEventListener("input", onInput)
MuuntoNappi.addEventListener("click", klikkaus)
d1.addEventListener("input",merkattu1)
d2.addEventListener("input",merkattu2)
d3.addEventListener("input",merkattu3)
