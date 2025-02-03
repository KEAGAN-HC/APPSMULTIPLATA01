import React from "react";

function TaskItem({ task, handleEditTask }) {
  return (
    <div className="bg-white p-4 mb-2 rounded-xl shadow-md hover:shadow-lg transition flex justify-between items-center">
      <div>
        <h2 className="font-bold text-custom-pink-900">{task.name}</h2>
        <p className="text-custom-pink-700">{task.description}</p>
        <span className={`text-sm ${task.completed ? "text-green-500" : "text-red-500"}`}>
          {task.completed ? "Finalizada" : "Pendiente"}
        </span>
      </div>
      <button 
        className="text-custom-pink-600 hover:text-custom-pink-800 px-3 py-1 rounded-lg border border-custom-pink-500 hover:bg-custom-pink-100 transition"
        onClick={() => handleEditTask(task)}
      >
        Editar
      </button>
    </div>
  );
}

export default TaskItem;
