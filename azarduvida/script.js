let contasorte =0;
let contaazar = 0;
function sorte() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado');

    if(num > 50){
        contasorte++;

        mostrar.innerHTML = `<p>sorte: ${contasorte}</p><p>azar: ${contaazar}</p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRUTAgBUDzTC0rfPCXH5yhL7cpIFJwnO9EWbHKl2IQm0MXaoeTC5X5sVO&s=10">`
    }else{
        contaazar++;
         mostrar.innerHTML = `<p>sorte: ${contasorte}</p><p>azar: ${contaazar}</p><img src="https://i.imgur.com/BBdZhQK_d.webp?maxwidth=760&fidelity=grand">`
    }

    

}