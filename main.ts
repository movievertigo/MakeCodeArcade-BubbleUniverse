function Render () {
    scene.backgroundImage().fill(0)
    ang1Start = animTime
    ang2Start = animTime
    for (let index = 0; index <= curveCount - 1; index++) {
        x = 0
        y = 0
        colIdx = 1 + 3 * Math.floor(5 * index / curveCount)
        for (let index2 = 0; index2 < iterations; index2++) {
            ang1Offset = ang1Start + x
            ang2Offset = ang2Start + y
            x = Math.sin(ang1Offset) + Math.sin(ang2Offset)
            y = Math.cos(ang1Offset) + Math.cos(ang2Offset)
            scene.backgroundImage().setPixel(xMid + xOffset + x * size, yMid + yOffset + y * size, colIdx)
            colIdx += colInc
        }
        ang1Start += ang1Inc
        ang2Start += ang2Inc
    }
}
function controls (deltaTime: number) {
    scale = 1 + deltaTime / 4000
    if (controller.A.isPressed()) {
        size = size * scale
        xOffset = xOffset * scale
        yOffset = yOffset * scale
    }
    if (controller.B.isPressed()) {
        size = size / scale
        xOffset = xOffset / scale
        yOffset = yOffset / scale
    }
    xOffset += controller.dx(deltaTime * -2)
    yOffset += controller.dy(deltaTime * -2)
}
let scale = 0
let yOffset = 0
let xOffset = 0
let ang2Offset = 0
let ang1Offset = 0
let colIdx = 0
let y = 0
let x = 0
let ang2Start = 0
let animTime = 0
let ang1Start = 0
let size = 0
let yMid = 0
let xMid = 0
let colInc = 0
let ang2Inc = 0
let ang1Inc = 0
let iterations = 0
let curveCount = 0
let curveStep = 4
curveCount = 64
iterations = 256
let pi = 3.141592653589793
ang1Inc = curveStep * 2 * pi / 235
ang2Inc = curveStep
colInc = 3 / iterations
xMid = scene.screenWidth() / 2
yMid = scene.screenHeight() / 2
size = scene.screenHeight() / 4
let oldTime = game.runtime()
game.onUpdate(function () {
    animTime = game.runtime() / 10000
    Render()
    controls(game.runtime() - oldTime)
    oldTime = game.runtime()
})
