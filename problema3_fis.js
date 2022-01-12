function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`O crescimento exacerbado das cidades é provocado, dentre outros elementos, pela falta de aplicação de políticas públicas de planejamento urbano. Portanto, grande parte dos problemas ambientais enfrentados pelos centros urbanos poderiam ser evitados pela adoção de práticas de controle do uso e ocupação do solo.`)
            location.href = "fim.html";

            break;
        }

        if (entradaUsr == 2) {

            location.href = "game_over.html";

            break;
        } else {
            alert("Entrada inválida!")
            entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

        }
    }
}