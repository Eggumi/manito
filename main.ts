// Inicializamos la posición del servo
// Función para rotar los servos lentamente
function rotateServos () {
    if (input.buttonIsPressed(Button.A)) {
        // Rotar lentamente hacia la posición 180 grados mientras el botón A esté presionado
        for (let i = 0; i <= 180; i++) {
            // Ahora rota hasta 180 grados
            pins.servoWritePin(AnalogPin.P0, i)
            pins.servoWritePin(AnalogPin.P1, i)
            pins.servoWritePin(AnalogPin.P2, i)
            pins.servoWritePin(AnalogPin.P3, i)
            pins.servoWritePin(AnalogPin.P4, i)
            // Pausa de 20ms para un movimiento más lento
            basic.pause(20)
            if (!(input.buttonIsPressed(Button.A))) {
                // Si se suelta el botón A, detenemos la rotación
                break;
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    pins.servoWritePin(AnalogPin.P3, 180)
    pins.servoWritePin(AnalogPin.P4, 180)
    basic.pause(100)
    pins.servoWritePin(AnalogPin.P0, 0)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.servoWritePin(AnalogPin.P3, 0)
    pins.servoWritePin(AnalogPin.P4, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    pins.servoWritePin(AnalogPin.P3, 180)
    pins.servoWritePin(AnalogPin.P4, 180)
})
// Inicializamos la posición del servo
let servoPos = 0
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    // Llamamos a la función para rotar los servos
    rotateServos()
    if (!(input.buttonIsPressed(Button.A))) {
        // Si el botón A no está presionado, esperar 2 segundos antes de volver a 0 grados
        // Pausa de 2000 ms (2 segundos)
        basic.pause(2000)
        // Regresar a la posición 0 grados después de la pausa
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 0)
        pins.servoWritePin(AnalogPin.P3, 0)
        pins.servoWritePin(AnalogPin.P4, 0)
    }
})
