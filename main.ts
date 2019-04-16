
enum controllerList{
    //% block="ON"
    con1 = 1,
    //% block="OFF"
    con2 = 0
}

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace Electromagnet {

    //% weight=99
    //% blockId="magnet_controller" block="Pin %pin| Electromagnet %con| Magnetism"
    export function magnetController(pin: DigitalPin, con:controllerList): void {

        pins.digitalWritePin(pin, con);
        
    }
    
}


