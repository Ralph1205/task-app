import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date) return alert("All fields required");

    const newTask = {
      date,
      id: Date.now(),
      title,
      description,
    };

    onAdd(newTask);
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input
        className="border-2 border-orange-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="border-2 border-orange-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <textarea
        className="border-2 border-orange-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-lg w-full hover:scale-105 transition cursor-pointer">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
