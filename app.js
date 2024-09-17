/**
 * Simulador de operadores logicos
 * @author Melo
 */

//variaveis
let receive //variavel que armazena o valor recebido pela função
//usada na logica para ligar e desligar as chaves e tambem na logica para acender ou apagar a lampada
let sw1 = false 
let sw2 = false

//variavel para capturar a pagina html
let identify = window.location.pathname
console.log(identify) //apoio ao entendimento da logica (pagina html)
// variavel para identificar a quebra da lampada
let broken = false


function sw(receive){
    //console.log(receive) //apoio a logica (teste da função)

    //logica das chaves
    if (receive === 1 && sw1 === false){
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if (receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    } else if (receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }

    //logica para quebrar a lampada
    if (receive === 3){
        //reproduzindo audio no JS
        let beep = new Audio()
        beep.scr = "glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "img/broken.jpg"
        broken = true 
    }

    //ATENÇÃO: no Github acrescentar o nome do repositorio antes da pagina nas estruturas abaixo
    //EX: /simulator/and.html no lugar de /and.html

    //logica do operador and
    if (identify === "/Simulator/and.html" && broken !== true){
        if (sw1 === true === sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    //logica do operador or
    if (identify === "/Simulator/or.html" && broken !== true){
        if (sw1 === true || sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    //logica do operador not
    if (identify === "/Simulator/not.html" && broken !== true){
        if (!sw1) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }
}


//atulizar automaticamente o ano no rodapé
let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getUTCFullYear()
ano.textContent = anoAtual
/*console.log(typeof(anoAtual))*/

//logica para quebrar a lampada//


