export interface Centro {
    nombre: string,
    direccion: string,
    linkMaps: string,
    imagen: string,
    horario: Object
};

const listaCentros: Centro[] = [
    {
        nombre: "Escuela San Luis",
        direccion: "C\\ San Luis nº 29",
        linkMaps: "https://maps.app.goo.gl/4P6nqXr4RiHjBtMp8",
        imagen: "",
        horario: {
            "Lunes": "16:00 - 17:30",
            "Martes": "16:00 - 17:30",
            "Miercoles": "16:00 - 17:30",
            "Jueves": "16:00 - 17:30",
            "Viernes": "16:00 - 18:00"
        }
    },
    {
        nombre: "Escuela San Pablo",
        direccion: `Av. Doctor Laffón Soto`,
        linkMaps: "https://maps.app.goo.gl/WQXrsDgeRuALiPsM7",
        imagen: "",
        horario: {
            "Lunes": "16:00 - 17:30",
            "Miercoles": "16:00 - 17:30",
        }
    },
    {
        nombre: "Escuela Sevilla Este",
        direccion: "Calle Cueva de la Pileta S/N",
        linkMaps: "https://maps.app.goo.gl/mVUNz1TArSAL8YKu7",
        imagen: "",
        horario: {
            "Jueves": "16:00 - 18:00"
        }
    },
    {
        nombre: "Escuela CEIP Arrayanes",
        direccion: "Av. Ciudad de Chiva, 32",
        linkMaps: "https://maps.app.goo.gl/3WAX7ZqC3rqt8Gu97",
        imagen: "",
        horario: {
            "Lunes Grupo 1": "16:00 - 17:30",
            "Miercoles Grupo 1": "16:00 - 17:30",
            "Lunes Grupo 2": "17:30 - 19:00",
            "Miercoles Grupo 2": "17:30 - 19:00"
        }
    },
        
];

export default listaCentros;