
function sumar(){
    numero1 = prompt("numero 1");
    numero2 = prompt("numero 2")
    alert(Number(numero1) + Number(numero2))
}

  function restar(){
    numero1 = prompt("numero 1");
    numero2 = prompt("numero 2")
    alert(Number(numero1) - Number(numero2))
  }

function multiplicar(){
    numero1 = prompt("numero 1");
    numero2 = prompt("numero 2")
    alert(Number(numero1) * Number(numero2))
}

function dividir(){
    numero1 = prompt("numero 1");
    numero2 = prompt("numero 2")
    alert(Number(numero1) / Number(numero2))
}


decision = Number(prompt("O que voce quere fazer? 1 = suma, 2 = resta, 3 = multiplicacion, 4 = division"))

if (decision == 1) {
    sumar()
}

if (decision == 2) {
    restar()
}

if (decision == 3) {
    multiplicar()
}

if (decision == 4) {
    dividir()
}