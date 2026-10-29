function aleatorio() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    if(num == 69){
     let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p>${num} hummm nossamm que delicia... é muito cremoso</p>`   
    }
    else{
    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p>o numero mais foda é ${num}.</P>`
    }
} 