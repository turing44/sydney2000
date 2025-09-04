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
        nombre: "Escuela San Luis",
        direccion: "C\\ San Luis nº 29",
        linkMaps: "https://maps.app.goo.gl/4P6nqXr4RiHjBtMp8",
        imagen: "",
        horario: {
            "Lunes y Miercoles": "16:00 - 17:30",
            "Martes y Jueves": "16:00 - 17:30",
            "Viernes": "16:00 - 18:00"
        },
        mensualidad: "26,50"
    },
    {
        nombre: "Centro Deportivo Alcosa",
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
        nombre: "Escuela San Pablo",
        direccion: `Av. Doctor Laffón Soto`,
        linkMaps: "https://maps.app.goo.gl/WQXrsDgeRuALiPsM7",
        imagen: "",
        horario: {
            "Lunes y Miercoles": "16:00 - 17:30",
        },
        mensualidad: "25,00"
    },
    {
        nombre: "Escuela IES Miguel Servet",
        direccion: "Calle Cueva de la Pileta S/N",
        linkMaps: "https://maps.app.goo.gl/cF5FX4SvevUEVUfq9",
        imagen: "",
        horario: {
            "Jueves": "16:00 - 18:00"
        }, 
        mensualidad: "23,00"
    },
    {
        nombre: "Escuela CEIP Arrayanes",
        direccion: "Av. Ciudad de Chiva, 32",
        linkMaps: "https://maps.app.goo.gl/3WAX7ZqC3rqt8Gu97",
        imagen: "",
        horario: {
            "Grupo 1 Lunes y Miercoles": "16:00 - 17:30",
            "Grupo 2 Lunes y Miercoles": "17:30 - 19:00"
        }, 
        mensualidad: "23,00"
    },
        
];

export default listaCentros;