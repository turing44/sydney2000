//import imgtorneo from "/4_chicas_podio.jpeg";

export interface Evento {
    nombre: string;
    descripcion: string;
    imagen: string | null;
    fecha: string;
}

const listaEventos: Evento[] = [
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
        descripcion: "Celebramos la gala anual de Navidad",
        imagen: "/medallistas_suelo.jpeg",
        fecha: ""
    },
];

export default listaEventos;
