let LA_IBB = 0
input.onButtonPressed(Button.A, function () {
    LA_IBB += 1
})
input.onButtonPressed(Button.B, function () {
    LA_IBB += 1
})
basic.forever(function () {
    basic.showString("" + (LA_IBB))
})
