class clubfutbol{

    #presupuesto

    constructor(nombre, presupuestoInicial = 0,estado){
        this.nombre = nombre; 
        this.presupuesto = presupuestoInicial;      
    }
    
    validacionInicial(presupuestoInicial) {
        if (presupuestoInicial<0) {
            console.log("Aviso: El presupuesto inicial no puede ser 0");
            this.#presupuesto = 0;            
        }else{
            this.#presupuesto = presupuestoInicial;
        }
        return this.#presupuesto;
    }
    
    get presupuesto(){
        return this.#presupuesto;
    }
    
    set presupuesto (nuevoPresupuesto){
        if(nuevoPresupuesto<0){
            console.log("El presupuesto no puede ser negativo");
        }else{
            this.#presupuesto = nuevoPresupuesto;
            console.log("Se ha asignado un nuevo presupuesto al " + this.nombre);
        }
        }
        consultarEstado(){
            this.estado = "El nombre del club es " + this.nombre + " cuyo presupuesto actual es: " + this.#presupuesto;
            return this.estado;  
        }
        ingresarDinero(cantidad){
            if(cantidad<0){
                console.log("La cantidad a ingresar no puede ser negativa")
            } else{
                this.#presupuesto += cantidad;
                console.log("Has depositado " + cantidad + " euros.");
            }
        }
        retirarDinero(cantidad){
            if(cantidad<0){
                console.log("Aviso: Por favor no pongas una cantidad negativa, simplemente pon el número que quieres retirar en positivo")
            return false;
            }else if(cantidad<=this.#presupuesto && cantidad>0){
                this.#presupuesto-= cantidad;
                console.log("Has retirado " + cantidad + " euros.");
                return true;
            }else{
                console.error("La cantidad a retirar es mayor al presupuesto")
                return false
        }
    }
    static ficharJugador(clubComprador,clubVendedor,nombreJugador,costoFichaje){
        console.log("Se ha iniciado una transferencia del club " + clubComprador.nombre + " al club " + clubVendedor.nombre + " de unos " + costoFichaje + "€ por " + nombreJugador);
        const operacionValida = clubComprador.retirarDinero(costoFichaje);
        if (operacionValida) {
            clubVendedor.ingresarDinero(costoFichaje);
            console.log("El fichaje ha sido exitoso")            
        }else{
            console.log("No hay suficient saldo, la transferencia se cancela")
        }
    }
    
}

console.log("----------Clubes----------");
const FCB = new clubfutbol("Fútbol Club Barcelona", 2000) 
const RM = new clubfutbol("Real Madrid", 3000)
console.log("Estado del club")
console.log(FCB.consultarEstado());
console.log(RM.consultarEstado());
clubfutbol.ficharJugador(FCB, RM, "Pedri", 500)
console.log(FCB.consultarEstado());
console.log(RM.consultarEstado());
