import TaskForm from "../components/TaskForm";

function Home() {
  const addTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  return (
    <div className="p-8 bg-linear-to-b from-yellow-50 via-orange-100 to-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-orange-600 text-center">
        Add Task
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl border-2 border-orange-200">
        <TaskForm onAdd={addTask} />
      </div>
    </div>
  );
}

export default Home;
