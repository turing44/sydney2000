export interface Premio {
    titulo: string,
    descripcion: string,
    link: string
};

const listaPremios: Premio[] = [
    {
        titulo: "Monaco 2025",
        descripcion: "4 de 4 medallas de oro",
        link: "https://www.elcorreoweb.es/sevilla/2025/06/24/gimnasia-ritmica-sevillana-alcanza-mayor-119014521.html"
    },
    {
        titulo: "Copa de Andalucía",
        descripcion: "3° puesto en categoría Infantil individual Tábata en con aparato pelota y Siria con aparato de cuerda. 3 puesto en equipo. ",
        link: ""
    },
    {
        titulo: "Copa Andalucía",
        descripcion: "4° puesto en Copa Andalucía en categoría infantil individual Mar con aparato Pelota.",
        link: ""
    },
    {
        titulo: "Copa Andalucía",
        descripcion: "4° puesto en Copa de Andalucía en categoría Alevín, Sofía con aparato Aro.",
        link: ""
    },
    {
        titulo: "Campeonato Nacional Masculino",
        descripcion: "Campeonato nacional Masculino 4° puesto en categoría Cadete Alejandro, con aparato Aro celebrado en Castellón",
        link: ""
    },
    {
        titulo: "Sydney 2000",
        descripcion: "Tu historia en las Olimpiadas...",
        link: ""
    },
];

export default listaPremios;