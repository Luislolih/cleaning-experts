import windowsClean from "./windows-clean.jpg";
import houseClean from "./house-clean.jpg";
import carClean from "./car-clean.jpg";

const services = {
  en: [
    {
      id: 1,
      title: "House Cleaning",
      description:
        "Professional house cleaning services. We are experts in houses!",
      fullDescription:
        "Professional house cleaning services. We are experts in houses! Our dedicated team ensures a thorough and detailed cleaning, leaving your home spotless and refreshed.",
      image: houseClean,
      slug: "house-cleaning",
      rangePrice: {
        min: "$99.99",
        max: "$499.99",
      },
    },
    {
      id: 2,
      title: "Carwash",
      description:
        "Car detailing and cleaning. We are experts in all types of vehicles!",
      fullDescription:
        "Car detailing and cleaning. We are experts in all types of vehicles! Our comprehensive carwash services include detailed interior and exterior cleaning, ensuring your vehicle looks brand new.",
      image: carClean,
      slug: "car-wash",
      rangePrice: {
        min: "$99.99",
        max: "$499.99",
      },
    },
    {
      id: 3,
      title: "Window Polishing",
      description:
        "Window cleaning for your home or office. We are experts in windows!",
      fullDescription:
        "Window cleaning for your home or office. We are experts in windows! Our skilled team ensures crystal-clear windows, allowing natural light to brighten up your living or working space.",
      image: windowsClean,
      slug: "windows-polishing",
      rangePrice: {
        min: "$99.99",
        max: "$499.99",
      },
    },
  ],
  es: [
    {
      id: 1,
      title: "Limpieza de Casas",
      description:
        "Servicios profesionales de casas. Somos los mejores en casas!",
      fullDescription:
        "Servicios profesionales de casas. Somos los mejores en casas! Nuestro dedicado equipo garantiza una limpieza exhaustiva y detallada, dejando su hogar impecable y renovado.",
      image: houseClean,
      slug: "house-cleaning",
      rangePrice: {
        min: "$99.99",
        max: "$499.99",
      },
    },
    {
      id: 2,
      title: "Lavado de Autos",
      description:
        "Detallado y limpieza de automóviles Detallado. Somos los mejores!",
      fullDescription:
        "Detallado y limpieza de automóviles Detallado. Somos los mejores! Nuestros servicios de lavado de autos abarcan una limpieza detallada tanto del interior como del exterior, asegurando que su vehículo luzca como nuevo.",
      image: carClean,
      slug: "car-wash",
      rangePrice: {
        min: "$99.99",
        max: "$499.99",
      },
    },
    {
      id: 3,
      title: "Pulido de Ventanas",
      description:
        "Limpieza de ventanas para tu hogar u oficina. Servicio excepcional!",
      fullDescription:
        "Limpieza de ventanas para tu hogar u oficina. Servicio excepcional! Nuestro equipo calificado garantiza ventanas cristalinas, permitiendo que la luz natural ilumine su espacio de vida o trabajo.",
      image: windowsClean,
      slug: "windows-polishing",
      rangePrice: {
        min: "$99.99",
        max: "$499.99",
      },
    },
  ],
};

export default services;
