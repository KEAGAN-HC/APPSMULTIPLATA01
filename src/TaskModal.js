import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function TaskModal({ currentTask, addTask, updateTask, setShowModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (currentTask) {
      setName(currentTask.name);
      setDescription(currentTask.description);
      setCompleted(currentTask.completed);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("El nombre de la tarea es obligatorio");
      return;
    }

    const task = {
      id: currentTask ? currentTask.id : Date.now(),
      name,
      description,
      completed,
    };

    if (currentTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl mb-4">{currentTask ? "Editar Tarea" : "Nueva Tarea"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-2 py-1 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="mr-2"
              />
              Completada
            </label>
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => setShowModal(false)}>
              Cancelar
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              {currentTask ? "Actualizar" : "Agregar"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default TaskModal;
