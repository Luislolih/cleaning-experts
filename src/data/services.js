import houseCleaning from "./house-cleaning.jpg";
import petSitting from "./pet-sitting.jpg";
import carwash from "./carwash.jpg";
import childcare from "./childcare.jpg";
import elderlyCare from "./elderly-care.jpg";
import homeIroning from "./home-ironing.jpg";

const services = {
    en: [
        {
            id: 1,
            title: "House Cleaning",
            description:
                "Professional house services. We are experts in cleaning!",
            fullDescription:
                "Professional house cleaning services. We are experts in houses! Our dedicated team ensures a thorough and detailed cleaning, leaving your home spotless and refreshed.",
            image: houseCleaning,
            slug: "house-cleaning",
        },
        {
            id: 2,
            title: "Pet Sitting",
            description: "We care for your pets with love and responsibility.",
            fullDescription:
                "We care for your pets as if they were our own, with love and responsibility. We walk them, take care of them, and play with them.",
            image: petSitting,
            slug: "pet-sitting",
        },
        {
            id: 3,
            title: "Carwash",
            description:
                "Car detailing and cleaning. We are experts in all types of vehicles!",
            fullDescription:
                "Car detailing and cleaning. We are experts in all types of vehicles! Our comprehensive carwash services include detailed interior and exterior cleaning, ensuring your vehicle looks brand new.",
            image: carwash,
            slug: "carwash",
        },
        {
            id: 4,
            title: "Childcare",
            description:
                "We take care of the little ones at home while you work or engage in other activities.",
            fullDescription:
                "We take care of the little ones at home while you work or engage in other activities. We can also pick them up from school or any activity they have.",
            image: childcare,
            slug: "childcare",
        },
        {
            id: 5,
            title: "Elderly Care",
            description:
                "We provide detailed and caring services for the elderly.",
            fullDescription:
                "We provide detailed and caring services for the elderly. Our elderly care services encompass a thorough understanding of their needs and preferences, ensuring their well-being and comfort.",
            image: elderlyCare,
            slug: "elderly-care",
        },
        {
            id: 6,
            title: "Home Ironing",
            description:
                "Professional ironing service in the comfort of your home.",
            fullDescription:
                "Professional ironing service in the comfort of your home. We take care of leaving your clothes impeccable and ready to use, saving you time and effort.",
            image: homeIroning,
            slug: "home-ironing",
        },
    ],

    es: [
        {
            id: 1,
            title: "Limpieza de Casas",
            description:
                "Servicios profesionales para casas. ¡Somos los mejores!",
            fullDescription:
                "Servicios profesionales de limpieza para casas. Nuestro dedicado equipo garantiza una limpieza exhaustiva y detallada, dejando su hogar impecable y renovado.",
            image: houseCleaning,
            slug: "house-cleaning",
        },
        {
            id: 2,
            title: "Cuidado de mascotas",
            description: "Cuidamos a tus mascotas con amor y responsabilidad.",
            fullDescription:
                "Cuidamos a tus mascotas como si fueran nuestras, con amor y responsabilidad. Los paseamos, cuidamos y jugamos con ellas.",
            image: petSitting,
            slug: "pet-sitting",
        },
        {
            id: 3,
            title: "Lavado de autos",
            description:
                "Detallado y limpieza de automóviles Detallado. Somos los mejores!",
            fullDescription:
                "Detallado y limpieza de automóviles Detallado. Somos los mejores! Nuestros servicios de lavado de autos abarcan una limpieza detallada tanto del interior como del exterior, asegurando que su vehículo luzca como nuevo.",
            image: carwash,
            slug: "carwash",
        },
        {
            id: 4,
            title: "Cuidado de niños",
            description:
                "Cuidamos a los pequeños de la casa mientras trabajas o realizas otras actividades.",
            fullDescription:
                "Cuidamos a los pequeños de la casa mientras trabajas o realizas otras actividades. También los podemos recoger de la escuela o alguna actividad que tengan.",
            image: childcare,
            slug: "childcare",
        },
        {
            id: 5,
            title: "Cuidado de mayores",
            description:
                "Cuidamos a las personas mayores con atención y dedicación.",
            fullDescription:
                "Brindamos cuidado a las personas mayores con atención y dedicación. Nos ocupamos de sus necesidades diarias y les ofrecemos compañía y apoyo en todo momento.",
            image: elderlyCare,
            slug: "elderly-care",
        },
        {
            id: 6,
            title: "Planchado a domicilio",
            description:
                "Servicio de planchado profesional en la comodidad de tu hogar.",
            fullDescription:
                "Ofrecemos servicio de planchado profesional en la comodidad de tu hogar. Nos encargamos de dejar tu ropa impecable y lista para usar, ahorrándote tiempo y esfuerzo.",
            image: homeIroning,
            slug: "home-ironing",
        },
    ],
};

export default services;
