def Render():
    global ang1Start, ang2Start, x, y, ang1Offset, ang2Offset
    scene.background_image().fill(15)
    ang1Start = animTime
    ang2Start = animTime
    for index in range(64):
        x = 0
        y = 0
        for index2 in range(256):
            ang1Offset = ang1Start + x
            ang2Offset = ang2Start + y
            x = Math.sin(ang1Offset) + Math.sin(ang2Offset)
            y = Math.cos(ang1Offset) + Math.cos(ang2Offset)
            scene.background_image().set_pixel(xCentre + x * 30, yCentre + y * 30, 1)
        ang1Start += 0.10694783501582275
        ang2Start += 4
ang2Offset = 0
ang1Offset = 0
y = 0
x = 0
ang2Start = 0
animTime = 0
ang1Start = 0
yCentre = 0
xCentre = 0
xCentre = scene.screen_width() / 2
yCentre = scene.screen_height() / 2
size = scene.screen_height()

def on_forever():
    global animTime
    animTime = game.runtime() / 10000
    Render()
forever(on_forever)
