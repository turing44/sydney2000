//import imgtorneo from "/4_chicas_podio.jpeg";

export interface Evento {
    nombre: string;
    descripcion: string;
    imagen: string | null;
    fecha: string;
}

const listaEventos: Evento[] = [
    {
        nombre: "Gala de Navidad 2025",
        descripcion: "19 de Septiembre de 17:00h a 21:00h en el Centro Deportivo Mendigorría",
        imagen: "/gala-navidad-2025.jpeg",
        fecha: ""
    },
    {
        nombre: "Masterclass",
        descripcion: "De la gimnasta Natalia Garcia",
        imagen: "/masterclass-natalia-garcia-2025.jpeg",
        fecha: ""
    },
    {
        nombre: "Torneo",
        descripcion: "Hacemos torneos todos los años",
        imagen: "/4_chicas_podio.jpeg",
        fecha: ""
    },
    {
        nombre: "Masterclass",
        descripcion: "Una masterclass de la medallista Polina Berezina",
        imagen: "/entrenadora_ensennando.jpeg",
        fecha: ""
    },
    {
        nombre: "Gala de Navidad",
        descripcion: "Todos los años celebramos la gala de Navidad",
        imagen: "/medallistas_suelo.jpeg",
        fecha: ""
    },
];

export default listaEventos;
