function maior() {
    let numero1;
    let numero2;

    numero1 = Number(prompt("digite o primeiro numero:"))
    numero2 = Number(prompt("digite o segundo numero:"))

    if(numero1 > numero2){
        alert("o numero " + numero1 + " é maior que o numero " + numero2 + ", meu chapa ≧◠ᴥ◠≦")
    }
    else if(numero1 < numero2){
        alert("o num numero " + numero1 + " é menor que o numero " + numero2 + " (╥﹏╥)")
    }
    else{
        
        alert("Ils sont pareils, chéri ≽^•⩊•^≼")
    }
}