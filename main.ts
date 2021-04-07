let counter = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    counter = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(counter)
        basic.pause(1000)
        counter += -1
    }
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    counter = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(counter)
        basic.pause(1000)
        counter += -1
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
