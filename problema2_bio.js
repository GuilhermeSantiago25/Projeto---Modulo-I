function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`A discussão sobre o desenvolvimento sustentável está atrelada ao fato de que grande parte dos recursos ambientais utilizados pela sociedade é finita. Desse modo, torna-se necessário promover o consumo racional e consciente desses recursos, em prol da continuidade do desenvolvimento econômico e da preservação ambiental global.`)
            location.href = "problema3_bio.html";

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