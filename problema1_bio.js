function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`A importância do desenvolvimento sustentável está atrelada à 
conservação dos recursos ambientais para as gerações futuras. Portanto, torna-se necessário a promoção do manejo sustentável 
desses recursos a fim de garantir a sua disponibilidade para as próximas gerações.`)
            location.href = "problema2_bio.html";

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