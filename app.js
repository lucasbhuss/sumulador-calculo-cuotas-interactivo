// MENSAJES -----------------------------------------------------------

let msjMonto = "Ingrese el monto a pagar"
let msjCuotas = ("¿En cuantas cuotas quiere abonar? (3, 6 o 12)"+"\n"+"Recuerde las cuotas incluyen un 10% de interés.")
let msjCalculate = "¿Desdea calcular otro monto?"
let msjFinal = "Estos son los montos correspondientes a cada cuota cuotas:"

// ---------------------------------------------------------------------

function calcularCuotas() {
    let totalCuota = 0;
    let monto;
    let cantidadCuotas;
    let calcularOtraVez;
    const interes = 0.10;

    do {
        monto = parseInt((prompt(msjMonto)))
    } while (monto <= 0 || !monto)

    do {
        cantidadCuotas = parseInt(prompt(msjCuotas));
    } while (!(cantidadCuotas == 3 || cantidadCuotas == 6 || cantidadCuotas == 12))

    totalCuota = monto / cantidadCuotas;
    let detalle = "";


    for(let n = 0; n < cantidadCuotas; n++) {
        totalCuota = totalCuota * (1+interes);
        detalle += "Cuota "+ parseInt(n+1) +": "+"ARS$"+ totalCuota.toFixed(2) +"\n";
    } return detalle;
};

function mostrar(detalle) {
    alert(msjFinal+"\n"+detalle)
    calcularOtraVez = confirm(msjCalculate)
    while(calcularOtraVez) {
        let detalle = calcularCuotas();
        mostrar(detalle);
    }
};

let detalle = calcularCuotas();
mostrar(detalle);
