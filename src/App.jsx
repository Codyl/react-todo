import { useState } from "react";
import logo from "./logo.svg";
function App() {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState(null);
  return (
    <div className="App">
      <header>
        <label htmlFor="addTask">Task</label>
        <input
          id="addTask"
          type="text"
          value={userInput || ""}
          onChange={(e) => setUserInput(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            const taskItem = {
              content: userInput,
              completed: false,
              id: Date.now(),
            };
            setTasks([...tasks, taskItem]);
            setUserInput("");
          }}
        >
          Add Task
        </button>
      </header>
      <main>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    const taskIndex = tasks.findIndex(
                      (taskb) => taskb.id === task.id
                    );
                    tasks[taskIndex].completed = !tasks[taskIndex].completed;
                    setTasks([...tasks]);
                  }}
                />
                <span>{task.content}</span>
                <button
                  onClick={() => {
                    setTasks(tasks.filter((taskb) => taskb.id !== task.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
