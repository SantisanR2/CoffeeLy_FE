export class Finca {
    id: number;
    nombre: string;
    ubicacion: string;
    altitud: number;
    clima: string;
    inclinacion: number;
    lumenes: number;
    coordenadas: string;
    tierra: string;
    ph: number;
    cultivos: string;
    microorganismos: string;

    constructor(id: number, nombre: string, ubicacion: string, altitud: number, clima: string, inclinacion: number, lumenes: number, coordenadas: string, tierra: string, ph: number, cultivos: string, microorganismos: string) {
        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.altitud = altitud;
        this.clima = clima;
        this.inclinacion = inclinacion;
        this.lumenes = lumenes;
        this.coordenadas = coordenadas;
        this.tierra = tierra;
        this.ph = ph;
        this.cultivos = cultivos;
        this.microorganismos = microorganismos;
    }

}