function site(){
    let nome;
    let mostrar;

    nome +prompt("qual teu nome?");
    mostrar = document.getElementById('mostrar');

    mostrar.innerHTML = `<p>ola, <mark>${nome}!</mark> te amo (˶>⩊<˶)</p>`;
}