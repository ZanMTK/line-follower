basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 75)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 80)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 80)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
