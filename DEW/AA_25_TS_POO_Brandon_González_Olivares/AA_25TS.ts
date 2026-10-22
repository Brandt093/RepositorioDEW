class Futbolista{
    constructor(public nombre: string, public edad: number, protected dorsal:number, public sueldoBase: number){}
    
    obtenerFicha(): String{
        return("Jugador: " + this.nombre + ", Edad: " + this.edad + ", Dorsal: " +this.dorsal)
    }

    calcularSalario():number{
        if(this.sueldoBase<2000){
        this.sueldoBase = 2000;        
        }return this.sueldoBase;
    }
}

class Delantero extends Futbolista{
    constructor(nombre: string, edad: number, protected dorsal:number, public golesTemporada:number, sueldoBase: number){
          super(nombre,edad,dorsal,sueldoBase);
    }
    celebrarGol():void{
        console.log("GOLAZO")

    }
    calcularSalario(): number{
        const nuevoSalario = super.calcularSalario();        
        return nuevoSalario + (this.golesTemporada * 190);
    } 
    obtenerFicha(): String{
        const fichaFutbolista = super.obtenerFicha();
        return fichaFutbolista + ", Posición: Delantero, Goles en esta temporada: " + this.golesTemporada;
    }
}
class portero extends Futbolista{
    constructor(nombre: string, edad: number, protected dorsal:number, public paradasClave: number, sueldoBase: number){
        super(nombre,edad,dorsal,sueldoBase);
    }
    calcularSalario(): number{
        const nuevoSalario = super.calcularSalario();
        return nuevoSalario + (this.paradasClave * 150);
    }
    pararPenalti(): void{
        console.log("PARADÓN")
    }
    obtenerFicha(): String{
        const fichaFutbolista = super.obtenerFicha();
        return fichaFutbolista + ", Posición: Portero, Paradas en esta temporada: " + this.paradasClave;
    }
}
const jugador = new Futbolista("Sergio", 29, 14, 1500);
console.log("Salario Ajustados: " + jugador.calcularSalario());
console.log(jugador.obtenerFicha());

const delantero = new Delantero("Ronaldo", 38, 7, 25, 2500)
delantero.celebrarGol();
console.log(delantero.obtenerFicha());
console.log("Salario Ajustados: " + delantero.calcularSalario());

const nuevoPortero = new portero("Courtois", 31, 1, 30, 2200);
nuevoPortero.pararPenalti();
console.log(nuevoPortero.obtenerFicha());
console.log("Salario Ajustados: " + nuevoPortero.calcularSalario());
