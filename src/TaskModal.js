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
      <div className="bg-custom-pink-50 p-6 rounded-xl shadow-lg w-96 border border-custom-pink-300">
        <h2 className="text-xl mb-4 text-custom-pink-900 font-bold">{currentTask ? "Editar Tarea" : "Nueva Tarea"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-custom-pink-900 font-medium">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-2 py-1 w-full rounded-lg bg-white text-custom-pink-900 border-custom-pink-300 focus:ring-2 focus:ring-custom-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-custom-pink-900 font-medium">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border px-2 py-1 w-full rounded-lg bg-white text-custom-pink-900 border-custom-pink-300 focus:ring-2 focus:ring-custom-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-custom-pink-900 font-medium">
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
            <button 
              type="button" 
              className="bg-custom-pink-300 text-custom-pink-900 px-4 py-2 rounded-xl mr-2 hover:bg-custom-pink-400 transition"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="bg-custom-pink-600 text-white px-4 py-2 rounded-xl hover:bg-custom-pink-700 transition"
            >
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
