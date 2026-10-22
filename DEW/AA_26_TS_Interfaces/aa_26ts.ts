interface Ientrenamiento{
intensidad:string;
calentar():void;
ejecutarRutina(duracionMinutos: number):void;
}

class entrenamientoCarrera implements Ientrenamiento{
constructor(public intensidad: string = "Baja") {}
/*private static instancia: entrenamientoCarrera;
private constructor(public intensidad:string = "baja"){
  console.log("-> [SISTEMA] Instancia de entrenamiento carrera creada en memoria por primera vez.");
 }
  public static _crearInstanciaInterna(): entrenamientoCarrera {
    return new entrenamientoCarrera();
  }
*/
calentar():void{
    console.log("estiramientos en pista")
}
ejecutarRutina(duracionMinutos:number):void{
    console.log("Iniciando rurina de Carrera, tiempo estimado: " + duracionMinutos)
}

}
class entrenamientoCiclismo implements Ientrenamiento{
constructor(public intensidad: string = "Alta") {}
/*private static instancia: entrenamientoCiclismo;
private constructor(public intensidad:string = "media"){
  console.log("-> [SISTEMA] Instancia de entrenamiento ciclismo creada en memoria por primera vez.");
 }
  public static _crearInstanciaInterna(): entrenamientoCiclismo {
    return new entrenamientoCiclismo();
  }
*/
calentar():void{
    console.log("revisar presión de neumáticos")
}

ejecutarRutina(duracionMinutos:number):void{
     console.log("Iniciando rurina de ciclismo, tiempo estimado: " + duracionMinutos)
}

}
class entrenamientoNatacion implements Ientrenamiento   {
constructor(public intensidad: string = "Media") {}
/*private static instancia: entrenamientoNatacion;
private constructor(public intensidad:string = "alta"){
  console.log("-> [SISTEMA] Instancia de entrenamiento natación creada en memoria por primera vez.");
 }
  public static _crearInstanciaInterna(): entrenamientoNatacion {
    return new entrenamientoNatacion();
  }
*/
calentar():void{
    console.log("movilidad articular en seco")
}

ejecutarRutina(duracionMinutos:number):void{
     console.log("Iniciando rurina de natación, tiempo estimado: " + duracionMinutos)
}

}

enum TipoEntrenamiento{
    Carrera ="CARRERA",
    Ciclismo = "CICLISMO",
    Natacion = "NATACION"
}
class sesionEntrenamientoFactory{
   // private static instancias: Map<TipoEntrenamiento, Ientrenamiento> = new Map();
    
    public static crearSesion(sesion:TipoEntrenamiento, intensidad?:string):Ientrenamiento{
        /* if (!this.instancias.has(sesion)) {
      let nuevaInstancia: Ientrenamiento;
*/
        switch (sesion){
            case TipoEntrenamiento.Carrera:
                return new entrenamientoCarrera(intensidad!);
                //return new entrenamientoCarrera._crearInstanciaInterna(intensidad!);
            case TipoEntrenamiento.Ciclismo:
                return new entrenamientoCiclismo(intensidad!);
                //return new entrenamientoCicilismo._crearInstanciaInterna(intensidad!);
            case TipoEntrenamiento.Natacion:
                return new entrenamientoNatacion(intensidad!);
                //return new entrenamientoNatacion._crearInstanciaInterna(intensidad!);
                default:
                    const _checkExhaustivo: never = sesion;
                    throw new Error(`Tipo de entrenamiento no soportado: ${_checkExhaustivo}`);
        }
       //  this.instancias.set(sesion, nuevaInstancia);
      //  } return this.instancias.get(sesion)!;
    }
}
class AtletaManager{
    
    constructor (private entrenamiento: Ientrenamiento){}
    
    iniciarSesion(minutos:number){
        this.entrenamiento.calentar();
        this.entrenamiento.ejecutarRutina(minutos)
        console.log("La rutina de es de intensidad: " + this.entrenamiento.intensidad)
    }
}
const sesionCarrera = sesionEntrenamientoFactory.crearSesion(TipoEntrenamiento.Carrera, "Alta"); 
const managerCarrera = new AtletaManager(sesionCarrera); 
managerCarrera.iniciarSesion(45); 
const sesionCiclismo = sesionEntrenamientoFactory.crearSesion(TipoEntrenamiento.Ciclismo, "Media"); 
const managerCiclismo = new AtletaManager(sesionCiclismo); 
managerCiclismo.iniciarSesion(90);
const sesionNatacion = sesionEntrenamientoFactory.crearSesion(TipoEntrenamiento.Natacion, "Alta"); 
const managerNatacion = new AtletaManager(sesionNatacion);
managerNatacion.iniciarSesion(60);

// INSTRUCCIONES DE EJECUCIÓN:
//npm install -g typescript
//npm install typescript --save-dev
//npx tsc --init
// 1. Compilar el proyecto completo:
//    npx tsc -p .
//
// 2. O compilar solo este fichero:
//    npx tsc 01ejemplo.ts
//
// 3. Ejecutar el fichero JavaScript generado:
//    node 01ejemplo.js
