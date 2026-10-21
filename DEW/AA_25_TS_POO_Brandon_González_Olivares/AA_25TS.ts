
class Futbolista{
    nombre: string;
    edad: number;
    protected dorsal: number;
    sueldoBase: number

    constructor(public nombre: string, public edad: number, protected dorsal:number, public sueldoBase: number){}
    obtenerFicha(): void{
        console.log("Jugador: " + this.nombre + " Edad: " + this.edad + " Dorsal: " +this.dorsal)
    }
    calcularSalario(sueldoBase:number):number{
        if(sueldoBase<=2000){
        this.sueldoBase = 2000;
        return this.sueldoBase;
        }
    }
}

class Delantero extends Futbolista{
    constructor(nombre: string, edad: number, protected dorsal:number, golesTemporada:number, sueldoBase: number){
        super(nombre,edad,dorsal,sueldoBase);
    }
    celebrarGol():void{
        console.log("GOLAZO")

    }
    calcularSalario(sueldoBase: number): number{
        this.sueldoBase += (this.golesTemporada * 190)
        return this.sueldoBase;
    } 
}
class portero extends Futbolista{
    constructor(nombre: string, edad: number, protected dorsal:number, public paradasClave: number, sueldoBase: number){
        super(nombre,edad,dorsal,sueldoBase);
    }
    calcularSalario(sueldoBase: number): number{
        this.sueldoBase += (this.paradasClave * 150)
        return this.sueldoBase;
    }
    pararPenalti(): void{
        console.log("PARADÓN")
    }
}