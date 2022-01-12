function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`O efeito estufa é um acontecimento natural que garante a manutenção do calor no planeta, sem o qual não haveria vida. No entanto, a sua intensificação em razão dos poluentes emitidos pelas atividades humanas vem sendo um dos elementos causadores do aquecimento global.`)
            location.href = "problema2_quim.html";

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