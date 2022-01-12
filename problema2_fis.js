function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`A poluição radioativa é considerada uma das mais perigosas no mundo, uma vez que utiliza materiais radioativos (naturais e artificiais) nas usinas nucleares como o urânio, o estrôncio, o iodo, o césio, o cobalto e o plutônio.
Os gases poluentes e os elementos tóxicos liberados na atmosfera contaminam o meio ambiente, além de afetar a saúde dos seres humanos gerando deformidades crônicas, problemas respiratórios, câncer, perturbações mentais, envenenamento, entre outros.`)
            location.href = "problema3_fis.html";

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