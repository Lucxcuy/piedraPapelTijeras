var uno = "piedra";
var dos = "papel";
var tres = "tijera";


var resultado = function (user,cpu) {
    switch (true) {
        case user === cpu:
            console.log("Empate!");
            break;
        case user === uno && cpu === dos:
            console.log("Perdiste!");
            break;
        case user === dos && cpu === tres:
            console.log("Perdiste!");
            break;
        case user === tres && cpu === uno:
            console.log("Perdiste!");
            break;
        default:
            console.log("Ganaste!");
}
}

resultado(tres,dos)