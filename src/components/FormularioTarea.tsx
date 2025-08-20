// src/components/FormularioTarea.tsx
// Importamos el hook useState de React, que nos permite manejar valores que cambian con el tiempo
import { useState } from "react";

// Definimos la interfaz Props: el componente recibirá una función llamada `onAgregar`
// Esta función espera un string (el texto de la tarea) y no devuelve nada (void).
interface Props {
  onAgregar: (texto: string) => void;
}

// Definimos el componente funcional FormularioTarea
// Recibe las props (en este caso, solo la función onAgregar)
export function FormularioTarea({ onAgregar }: Props) {
  // Creamos un estado llamado `texto` y una función `setTexto` para actualizarlo.
  // Inicialmente `texto` será una cadena vacía ("").
  const [texto, setTexto] = useState("");

  // Función que se ejecuta cuando el formulario se envía (submit).
  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario.
    if (!texto.trim()) return; // Si el texto está vacío (o solo tiene espacios), no hace nada.
    onAgregar(texto); // Llama a la función recibida por props, pasando el texto de la tarea.
    setTexto(""); // Limpia el campo de texto después de agregar la tarea.
  };

  // Lo que el componente "pinta" en pantalla (su JSX):
  return (
    <form onSubmit={manejarSubmit}>
      {/* Input controlado: su valor depende del estado `texto`.
          Cada vez que el usuario escribe algo, se actualiza `texto` con setTexto */}
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Escribe una tarea..."
      />

      {/* Botón para enviar el formulario (y ejecutar manejarSubmit) */}
      <button type="submit">Agregar</button>
    </form>
  );
}

