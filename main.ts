input.onButtonPressed(Button.B, function () {
    Celsius = randint(-5, 50)
    basic.showNumber(Celsius)
    basic.showString("ºC")
    basic.showString("=")
    Fahrenheit = Celsius * 1.8 + 32
    basic.showNumber(Fahrenheit)
    basic.showString("ºF")
})
let Fahrenheit = 0
let Celsius = 0
basic.showString("REBECA GALVAN A01285709")
