alert('Digite S= Se a resposta for Sim ou N= Se a resposta for não')

function verificarCulpabilidade() {
    var um = prompt('Você telefonou para a vítima?');
    var dois = prompt('Você esteve no local do crime?');
    var tres = prompt('Você mora perto da vítima?');
    var quatro = prompt('Você devia para a vítima?');
    var cinco = prompt('Você já trabalhou com a vítima?');

    var contadorSim = 0;

    if (um.toUpperCase() === "S") {
        contadorSim++;
    }

    if (dois.toUpperCase() === "S") {
        contadorSim++;
    }

    if (tres.toUpperCase() === "S") {
        contadorSim++;
    }

    if (quatro.toUpperCase() === "S") {
        contadorSim++;
    }

    if (cinco.toUpperCase() === "S") {
        contadorSim++;
    }

    if (contadorSim === 2) {
        console.log("Você é suspeito.");
    } else if (contadorSim === 3 || contadorSim === 4) {
        console.log("Você é cúmplice.");
    } else if (contadorSim === 5) {
        console.log("Você é o assassino!");
    } else {
        console.log("Você não é suspeito.");
    }
}

verificarCulpabilidade();

