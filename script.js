
function adicionarNumero(numero) {
    var operator = document.getElementById("operador")
    var numerin = operator.textContent ? document.getElementById("numero2") : document.getElementById("numero1")
    var tamanhomax = 5

    if (numerin.textContent.length == tamanhomax) {
        return
    }
    if (numero == "." && numerin.textContent.includes(".")) {
        return
    }
    if (numero == "." && !numerin.textContent) {
        numerin.textContent = "0."
        return
    }

    numerin.textContent = numerin.textContent + numero
}
function adicionaOperador(operador) {
    var numerin2 = document.getElementById("numero2")
    var numerin = document.getElementById("numero1")
    var operator = document.getElementById("operador")

    if (numerin.textContent && numerin2.textContent && operator.textContent) {
        result(operador)
        return
    }
    if (numerin.textContent) {
        var operator = document.getElementById("operador")
        operator.textContent = operador
    }
}
function result(novoOperador = "") {
    var numerin2 = document.getElementById("numero2")
    var numerin = document.getElementById("numero1")
    var operator = document.getElementById("operador")

    if (!numerin.textContent || !numerin2.textContent || !operator.textContent) {
        return
    }
    var numerinNumero = Number(numerin.textContent)
    var numerin2Numero = Number(numerin2.textContent)
    var resultado
    if (operator.textContent == "+") {
        resultado = numerinNumero + numerin2Numero
    }
    if (operator.textContent == "-") {
        resultado = numerinNumero - numerin2Numero
    }
    if (operator.textContent == "/") {
        resultado = numerinNumero / numerin2Numero
    }
    if (operator.textContent == "*") {
        resultado = numerinNumero * numerin2Numero
    }
    console.log(resultado)
    numerin.textContent = resultado
    operator.textContent = novoOperador
    numerin2.textContent = ""

    if(resultado == Infinity || isNaN(resultado)){
       alert("*error*")
       numerin.textContent = ""
       operator.textContent = novoOperador
       numerin2.textContent = ""
    }
}
function apagAll(){
    var numerin2 = document.getElementById("numero2")
    var numerin = document.getElementById("numero1")
    var operator = document.getElementById("operador")
    numerin.textContent = ""
    operator.textContent = ""
    numerin2.textContent = ""
}