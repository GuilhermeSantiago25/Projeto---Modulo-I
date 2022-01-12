function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`A redução da utilização do transporte público, com a valorização do transporte individual, é uma prática que resulta em um amplo consumo de recursos naturais. O uso de combustíveis fósseis nos transportes, por exemplo, é preocupante, já que são elementos não renováveis e altamente poluentes. Assim, o ideal é o investimento em transporte público acessível e de qualidade para a população.`)
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