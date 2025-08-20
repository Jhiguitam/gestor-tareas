// src/components/ItemTareaX.tsx

// Importamos el tipo `Tarea` desde la carpeta types.
// Esto nos da una definición de cómo luce un objeto "tarea".
import type { Tarea } from "../types";

// Definimos las props que recibirá este componente:
// - `tarea`: un objeto de tipo Tarea (con campos como id, texto, completada).
// - `onToggle`: una función que recibe el id de la tarea y cambia su estado (pendiente/completada).
// - `onEliminar`: una función que recibe el id de la tarea y la elimina.
interface Props {
  tarea: Tarea;
  onToggle: (id: number) => void;
  onEliminar: (id: number) => void;
}

// Definimos el componente funcional `ItemTarea`.
export function ItemTarea({ tarea, onToggle, onEliminar }: Props) {
  return (
    <li>
      {/* Checkbox que muestra si la tarea está completada.
          - `checked={tarea.completada}`: refleja el estado de la tarea.
          - `onChange={() => onToggle(tarea.id)}`: al marcar/desmarcar llama a la función
            onToggle con el id de la tarea para cambiar su estado. */}
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => onToggle(tarea.id)}
      />

      {/* Texto de la tarea.
          - Si está completada, se muestra tachada con "line-through".
          - Si no, se muestra normal. */}
      <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.texto}
      </span>

      {/* Botón para eliminar la tarea.
          - Al hacer clic, se llama a onEliminar con el id de la tarea. */}
      <button onClick={() => onEliminar(tarea.id)}>❌</button>
    </li>
  );
}
