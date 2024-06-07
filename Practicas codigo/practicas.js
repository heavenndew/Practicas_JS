let palabraOculta = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
    if(suposicion.toLowerCase() === palabraOculta) {
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar adivina la palabra oculta");
    alert("Tienes 3 intenetos para adivinar la palabra");
    alert("-Pista- la palabra oculta es un lenguaje de programación");

    while (intentos > 0) {
        let suposicion = prompt("Adivina la palabra: ")

        if(verificarSuposicion(suposicion, palabraOculta)) {
            alert("¡correcto! has adivinado la palabra.")
            break;
        } else {
            intentos--;
            if(intentos < 0) {
                alert(`Incorrecto, Aún tienes ${intentos} intentos restantes`);
            } else {
                alert(`Agostaste tus intentos, la palabra oculta era ${palabraOculta}`);
            }
        }
    }
}


jugarAdivinaLaPalabra();
