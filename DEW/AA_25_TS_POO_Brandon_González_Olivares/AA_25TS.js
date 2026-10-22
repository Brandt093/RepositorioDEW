"use strict";
class Futbolista {
    nombre;
    edad;
    dorsal;
    sueldoBase;
    constructor(nombre, edad, dorsal, sueldoBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.dorsal = dorsal;
        this.sueldoBase = sueldoBase;
    }
    obtenerFicha() {
        return ("Jugador: " + this.nombre + ", Edad: " + this.edad + ", Dorsal: " + this.dorsal);
    }
    calcularSalario() {
        if (this.sueldoBase < 2000) {
            this.sueldoBase = 2000;
        }
        return this.sueldoBase;
    }
}
class Delantero extends Futbolista {
    dorsal;
    golesTemporada;
    constructor(nombre, edad, dorsal, golesTemporada, sueldoBase) {
        super(nombre, edad, dorsal, sueldoBase);
        this.dorsal = dorsal;
        this.golesTemporada = golesTemporada;
    }
    celebrarGol() {
        console.log("GOLAZO");
    }
    calcularSalario() {
        const nuevoSalario = super.calcularSalario();
        return nuevoSalario + (this.golesTemporada * 190);
    }
    obtenerFicha() {
        const fichaFutbolista = super.obtenerFicha();
        return fichaFutbolista + ", Posición: Delantero, Goles en esta temporada: " + this.golesTemporada;
    }
}
class portero extends Futbolista {
    dorsal;
    paradasClave;
    constructor(nombre, edad, dorsal, paradasClave, sueldoBase) {
        super(nombre, edad, dorsal, sueldoBase);
        this.dorsal = dorsal;
        this.paradasClave = paradasClave;
    }
    calcularSalario() {
        const nuevoSalario = super.calcularSalario();
        return nuevoSalario + (this.paradasClave * 150);
    }
    pararPenalti() {
        console.log("PARADÓN");
    }
    obtenerFicha() {
        const fichaFutbolista = super.obtenerFicha();
        return fichaFutbolista + ", Posición: Portero, Paradas en esta temporada: " + this.paradasClave;
    }
}
const jugador = new Futbolista("Sergio", 29, 14, 1500);
console.log("Salario Ajustados: " + jugador.calcularSalario());
console.log(jugador.obtenerFicha());
const delantero = new Delantero("Ronaldo", 38, 7, 25, 2500);
delantero.celebrarGol();
console.log(delantero.obtenerFicha());
console.log("Salario Ajustados: " + delantero.calcularSalario());
const nuevoPortero = new portero("Courtois", 31, 1, 30, 2200);
nuevoPortero.pararPenalti();
console.log(nuevoPortero.obtenerFicha());
console.log("Salario Ajustados: " + nuevoPortero.calcularSalario());
