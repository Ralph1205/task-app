import { Link } from "react-router-dom";
import { useState } from "react";

function AllTasks() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div className="p-8 bg-linear-to-b   from-yellow-50 via-orange-100 to-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">
        All Tasks
      </h1>
      <ul className="space-y-4 max-w-xl mx-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border-2 border-orange-300 rounded-xl p-4 shadow-lg bg-white"
          >
            <h2 className="font-semibold text-orange-500 text-xl">
              {task.title}
            </h2>
            <p className="text-sm text-gray-500">Due: {task.date}</p>
            <div className="flex gap-4 mt-2">
              <Link
                className="text-yellow-600 hover:underline cursor-pointer"
                to={`/tasks/${task.id}`}
              >
                View
              </Link>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:underline cursor-pointer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTasks;
