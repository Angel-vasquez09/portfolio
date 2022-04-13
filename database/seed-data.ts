


export interface SeedProyects {
    name       : string;
    imgs       : string[];
    tecnologias: string[];
    url        : string;
    description: string;
}

interface SeedData {
    proyects: SeedProyects[];
}


export const seedData: SeedData = {
    proyects: [
        {
            name: 'food-delivery',
            imgs: ['/proyects/proyect1/img1.jpg','/proyects/proyect1/img2.jpg','/proyects/proyect1/img3.jpg','/proyects/proyect1/img4.jpg','/proyects/proyect1/img5.jpg','/proyects/proyect1/img6.jpg'],
            tecnologias: ['nextjs.png', 'materialUi.png', 'mdb.png'],
            url: 'https://delifoods.herokuapp.com/',
            description: 'Food Delivery es una aplicación web que permite a los clientes pedir comida a domicilio.'
        }
    ]
}