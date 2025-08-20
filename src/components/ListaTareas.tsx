// src/components/ListaTareas.tsx

// Importamos el tipo Tarea desde types (cada tarea tiene id, texto, completada, etc.)
import type { Tarea } from "../types";

// Importamos el componente ItemTarea, que representa una tarea individual.
import { ItemTarea } from "./ItemTareaX";

// Definimos las props que recibe ListaTareas:
// - tareas: un array de objetos Tarea.
// - onToggle: función para marcar/desmarcar una tarea (recibe el id).
// - onEliminar: función para eliminar una tarea (recibe el id).
interface Props {
  tareas: Tarea[];
  onToggle: (id: number) => void;
  onEliminar: (id: number) => void;
}

// Definimos el componente ListaTareas
export function ListaTareas({ tareas, onToggle, onEliminar }: Props) {
  // Si no hay tareas en el array, muestra un mensaje en lugar de la lista.
  if (tareas.length === 0) return <p>No hay tareas 🚀</p>;

  // Si sí hay tareas, renderiza una lista (<ul>) con un <ItemTarea> por cada tarea.
  return (
    <ul>
      {tareas.map(t => (
        // Por cada tarea se crea un ItemTarea.
        // - key={t.id}: necesario para que React identifique cada elemento único.
        // - tarea={t}: pasamos la tarea completa como prop.
        // - onToggle y onEliminar: pasamos las funciones que vienen del padre.
        <ItemTarea
          key={t.id}
          tarea={t}
          onToggle={onToggle}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}
