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
            "Grupo 1 Lunes y Miercoles": "16:00 - 17:30",
            "Grupo 2 Lunes y Miercoles": "17:30 - 19:00"
        }, 
        mensualidad: "25,00"
    },    
    {
        nombre: "Escuela - Centro Deportivo San Jerónimo",
        direccion: "Calle Medina y Galnares",
        linkMaps: "https://maps.app.goo.gl/5ewuGiFNZi2BJFbU6",
        imagen: "",
        horario: {
            "Martes y Jueves": "16:00 - 17:30",
        }, 
        mensualidad: "25,00"
    },
    
        
];

export default listaCentros;