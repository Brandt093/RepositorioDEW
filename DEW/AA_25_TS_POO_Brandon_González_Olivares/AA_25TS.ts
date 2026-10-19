/*Contexto del Ejercicio: Un club de fútbol profesional nos pide desarrollar un sistema en TypeScript para
gestionar las fichas y los salarios de su plantilla. Dependiendo de si el jugador es un delantero o un portero, el
cálculo de su sueldo mensual varía según su rendimiento específico en el campo.
1. Requisitos de la Arquitectura de Clases
Clase Padre: Futbolista
Públicas: nombre (string), edad (number).
Protegida: dorsal (number).
Constructor: Inicializa propiedades.
Métodos: obtenerFicha() y
calcularSalario() (Base: 2000€).
Clase Hija 2: Portero & Prueba Final
Clase Hija 1: Delantero
Hereda de Futbolista.
Propiedad propia: golesTemporada (number).
Polimorfismo en calcularSalario() (+100€ /
gol).
Método propio: celebrarGol().
Hereda de Futbolista, añade paradasClave (number) y sobrescribe calcularSalario() (+150€ / parada
clave).
Incluye método propio pararPenalti().
Prueba Final: Instanciar un Delantero y un Portero, invocar métodos propios, mostrar fichas y sueldos */
class Futbolista{
    nombre: string;
    edad: number;
    protected dorsal: number;
    sueldoBase: number

    constructor(nombre: string, edad: number, protected dorsal:number, sueldoBase: number){
        this.nombre = nombre;
        this.edad = edad;
        this.dorsal = dorsal;
    }
    obtenerFicha(){

    }
    calcularSalario():number{
        this.sueldoBase =2000;
        return this.sueldoBase;

    }
}

class Delantero extends Futbolista{
    constructor(nombre: string, edad: number, protected dorsal:number, golesTemporada:number){
        super(nombre,edad,dorsal);
    }
    celebrarGol():void{
        console.log("SIUUUUUUUUU")

    }
    calcularSalario(): number{

    }
}
class portero extends Futbolista{
    constructor(nombre: string, edad: number, protected dorsal:number, paradasClave: number){

    }
    calcularSalario(): number{

    }
    pararPenalti(): void{
        console.log("Paradón de casillas")
    }
}