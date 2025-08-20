// src/App.tsx
import { useState } from "react";
import type { Tarea } from "./types";
import { ListaTareas } from "./components/ListaTareas";
import { FormularioTarea } from "./components/FormularioTarea";

export default function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = (texto: string) => {
    const nueva: Tarea = {
      id: Date.now(),
      texto,
      completada: false,
    };
    setTareas([...tareas, nueva]);
  };

  const toggleTarea = (id: number) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Gestor de Tareas 📝</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        onToggle={toggleTarea}
        onEliminar={eliminarTarea}
      />
    </div>
  );
}