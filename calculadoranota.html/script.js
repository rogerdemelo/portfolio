let nota1tri
let nota2tri
let resultado

function calcular() {
    nota1tri = Number (prompt(" digam-me a nota do primeiro trimestre"));
    nota2tri = Number (prompt("digame a nota do segundo trimestre"));

    resultado = 180 - (nota1tri + nota2tri);

    if(resultado <= 0){
        alert ("congratulations, you are approved :3")
    } else{
        alert("infelizmente ou felizmente, voce precisa de mais " + resultado + " para passar de ano. boa sorte UWU")
    }
}