function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`O único tipo de resíduo que, quando decomposto por bactérias, produz gás combustível e tem condição de nutrir o solo é o resíduo orgânico`)
            location.href = "problema3_quim.html";

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