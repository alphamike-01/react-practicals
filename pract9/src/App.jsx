import { useMemo, useState } from "react";

const initialTasks = [
  { id: 1, title: "Complete React practical record", done: false },
  { id: 2, title: "Review JavaScript arrays and keys", done: true },
  { id: 3, title: "Push project to GitHub", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => tasks.filter(t =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  ), [tasks, filter]);

  function addTask(e) {
    e.preventDefault();
    const title = text.trim();
    if (!title) return;
    setTasks(prev => [...prev, { id: Date.now(), title, done: false }]);
    setText("");
  }

  function toggle(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function remove(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <main className="app">
      <section className="todo-card">
        <h1>To-Do List Manager</h1>
        <p className="meta">Add, delete, and mark tasks as completed. React Lists + Importance of Keys.</p>
        <form className="add-row" onSubmit={addTask}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Enter a new task..." />
          <button className="primary">Add Task</button>
        </form>
        <div className="filters">
          {["all", "active", "done"].map(f => (
            <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
              {f === "all" ? "All" : f === "active" ? "Active" : "Completed"}
            </button>
          ))}
        </div>
        {visible.length === 0 && <p className="meta">No tasks in this view.</p>}
        {visible.map(task => (
          <div className="task" key={task.id}>
            <input type="checkbox" checked={task.done} onChange={() => toggle(task.id)} />
            <span className={task.done ? "completed" : ""}>{task.title}</span>
            <button className="delete" onClick={() => remove(task.id)}>Delete</button>
          </div>
        ))}
        <p className="meta">{tasks.filter(t => !t.done).length} active task(s)</p>
      </section>
    </main>
  );
}
