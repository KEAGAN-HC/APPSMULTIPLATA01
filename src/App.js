import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setShowModal(false);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setShowModal(false);
  };

  const handleAddTask = () => {
    setCurrentTask(null);
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-custom-pink-50 min-h-screen">
      <h1 className="text-2xl font-bold text-custom-pink-900 mb-4">Gestion de TAREAS</h1>
      <button
        className="bg-custom-pink-600 text-white px-4 py-2 rounded-xl hover:bg-custom-pink-700 transition"
        onClick={handleAddTask}
      >
        Nueva Tarea
      </button>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setCurrentTask={setCurrentTask}
        setShowModal={setShowModal}
      />
      {showModal && (
        <TaskModal
          currentTask={currentTask}
          addTask={addTask}
          updateTask={updateTask}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default App;
