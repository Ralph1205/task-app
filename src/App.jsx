import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import TaskDetails from "./pages/TaskDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<AllTasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </>
  );
}

export default App;
