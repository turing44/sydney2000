export interface Evento {
    nombre: string;
    descripcion: string;
    imagen: string | null;
    fecha: string;
}

const listaEventos: Evento[] = [
    {
        nombre: "Gala de Navidad 2025",
        descripcion: `Un año mas queremos celebrarla junto a todas nuestras familias nuestra Gala de Navidad 🎄 
        
        Un evento mágico donde los padres, madres y seres queridos podrán ver cómo crecen, no solo en la rítmica, sino también en confianza, compañerismo y ilusión. Vamos a disfrutar de una tarde llena de emoción, luz y esfuerzo convertido en arte. 
        Os esperamos 💫 
        
        🎟️ Entrada 2€ y participas en un sorteo.
        
        19 de Septiembre de 17:00h a 21:00h en el Centro Deportivo Mendigorría`,
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
        descripcion: "Una masterclass de la medallista Polina Berezina. Fue en Febrero de 2025 y tuvimos a más de 70 participantes de toda Andalucía",
        imagen: "/masterclass-polina-2025.jpeg",
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
