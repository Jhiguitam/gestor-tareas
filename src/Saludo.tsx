import React from "react";

type SaludoProps = {
    nombre: string
    edad: number
};

const Saludo: React.FC<SaludoProps> = ({ nombre, edad }) => {
    return <h1>¡Hola, {nombre}! Tienes {edad} años.</h1>;
};

export default Saludo;
