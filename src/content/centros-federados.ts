export interface Centro {
    nombre: string,
    direccion: string,
    linkMaps: string,
    imagen: string,
    horario: Object,
    mensualidad: string
};

const listaCentros: Centro[] = [
    {
        nombre: "Escuela - Centro Deportivo Alcosa",
        direccion: "Av. de Seneca, 1",
        linkMaps: "https://maps.app.goo.gl/V1f8S1pjUxeSXD1a9",
        imagen: "",
        horario: {
            "Lunes y Miercoles": "16:30 - 19:30",
            "Viernes": "16:00 - 19:00 (CEIP Arrayanes)"
        }, 
        mensualidad: "25,00"
    },    
    {
        nombre: "Escuela - Centro Deportivo San Jerónimo",
        direccion: "Calle Medina y Galnares",
        linkMaps: "https://maps.app.goo.gl/5ewuGiFNZi2BJFbU6",
        imagen: "",
        horario: {
            "Martes y Jueves": "16:00 - 19:00",
            "Viernes" : "17:00 - 20:00 (CEIP Arrayanes)"
        }, 
        mensualidad: "25,00"
    },
    
        
];

export default listaCentros;