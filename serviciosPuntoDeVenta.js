
calcTotal = function (montosubtotal, montodescuento, montoIva) {
    let Total = montosubtotal - montodescuento + montoIva
    console.log("Total:", Total)
    return Total
}

calcularValorDescuento = function (monto, porcentajeDescuento) {
    return monto - ((monto * porcentajeDescuento) / 100)
}

calcularSubtotal = function (precio, cantidad) {
    return cantidad * precio
}
calcularIva = function (monto) {
    return monto * 0.12
}

