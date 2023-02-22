var uno = "piedra";
var dos = "papel";
var tres = "tijera";

var resultado = function (user,cpu) {
    if (user != cpu) {
        if (user === uno && cpu === tres) {
            console.log("ganó user con " + uno)
        } else if (user === dos && cpu === uno) {
            console.log("ganó user con " + dos)
        } else if (user === tres && user === dos) {
            console.log("ganó user con " + tres)
        } else {
            console.log("la cpu ganó")
        }
    } else {
        console.log("empate")
    }
}

resultado(dos,dos)

