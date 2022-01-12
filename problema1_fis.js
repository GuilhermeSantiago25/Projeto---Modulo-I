function btn() {
    var entradaUsr = parseInt(prompt(`Digite 1 para opção 1. 
Digite 2 para opção 2. `));

    while (true) {
        if (entradaUsr == 1) {
            alert(`A ilha de calor, também chamada de ilha de calor urbana (ICU), são microclimas identificados pelo aumento de temperatura em algumas zonas dos centros urbanos.    
Isso porque os raios solares que atingem esses locais têm dificuldade de se dissiparem por conta das construções nas grandes cidades.        
É possível que quando isso acontece, a temperatura das zonas rurais próximas, ou mesmo das áreas periféricas, apresentem uma diferença de 5 a 10 graus.            
A inversão térmica é outro fenômeno que acontece nos centros urbanos por meio da inversão das camadas atmosféricas, onde o ar frio permanece em baixas altitudes e o ar quente fica retido nas camadas mais elevadas.`)
            location.href = "problema2_fis.html";

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