import React from "react";

function TaskItem({ task, handleEditTask }) {
  return (
    <div className="border p-4 mb-2 flex justify-between">
      <div>
        <h2 className="font-bold">{task.name}</h2>
        <p>{task.description}</p>
        <span className={`text-sm ${task.completed ? "text-green-500" : "text-red-500"}`}>
          {task.completed ? "Finalizada" : "Pendiente"}
        </span>
      </div>
      <button className="text-blue-500 underline" onClick={() => handleEditTask(task)}>
        Editar
      </button>
    </div>
  );
}

export default TaskItem;
