import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((t) => t.id === Number(id));

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task?.title || "");
  const [date, setDate] = useState(task?.date || "");
  const [details, setDetails] = useState(task?.description || "");

  if (!task)
    return <p className="p-8 text-center text-orange-600">Task not found</p>;

  const handleSave = () => {
    if (!title || !date || !details) return alert("All fields are required");

    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, title, date, description: details } : t,
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsEditing(false);
    navigate(`/tasks/${task.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-linear-to-b from-yellow-50 via-orange-100 to-pink-50 p-8">
      {!isEditing ? (
        <h1 className="text-4xl font-bold mb-6 text-orange-500 text-center">
          {task.title}
        </h1>
      ) : (
        <input
          className="border-2 border-orange-300 p-2 mb-6 w-full max-w-md rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}

      <div className="mb-6">
        {!isEditing ? (
          <div className="bg-yellow-200 px-6 py-2 rounded-lg text-orange-700 font-semibold shadow-md text-center">
            Due: {task.date}
          </div>
        ) : (
          <input
            type="date"
            className="border-2 border-orange-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        )}
      </div>

      <div className="border-4 border-orange-300 rounded-2xl bg-white p-6 max-w-2xl w-full shadow-lg">
        {!isEditing ? (
          <p className="text-gray-700 leading-relaxed text-center">
            {task.description}
          </p>
        ) : (
          <textarea
            className="border-2 border-orange-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        )}
      </div>

      <div className="flex gap-4 mt-6">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded hover:scale-105 transition cursor-pointer"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-linear-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded hover:scale-105 transition cursor-pointer"
          >
            Save
          </button>
        )}

        <Link
          to="/tasks"
          className="text-gray-700 px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default TaskDetails;
