/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param checkDoor is the pin the user clicked, eg: 0
     */
    //% block
    export function checkDoor(doorNum: number): void {
        if (doorNum == 1) {
            basic.showIcon(IconNames.Yes)
            for (let index = 0; index < 3; index++) {
                music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.OnceInBackground)
                basic.pause(500)
            }
            basic.showString("You found it!")
        } else {
            basic.showIcon(IconNames.No)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            game.gameOver()
        }
    }


}