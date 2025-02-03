import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks, setCurrentTask, setShowModal }) {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(task => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  return (
    <div className="mt-4">
      <div className="mb-4">
        <select 
          className="border px-2 py-1 rounded-lg bg-custom-pink-100 text-custom-pink-900"
          onChange={(e) => setFilter(e.target.value)} 
          value={filter}
        >
          <option value="all">Todas</option>
          <option value="pending">Pendientes</option>
          <option value="completed">Finalizadas</option>
        </select>
      </div>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} handleEditTask={handleEditTask} />
      ))}
    </div>
  );
}

export default TaskList;
