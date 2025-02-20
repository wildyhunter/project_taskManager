import AddTAsks from './components/AddTAsks';
import Tasks from './components/Tasks';

import { v4 } from 'uuid';
import { useEffect, useState } from 'react';

function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });
        setTasks(newTasks);
    }

    function deleteTask(taskId) {
        const deleteTask = tasks.filter((task) => task.id !== taskId);
        setTasks(deleteTask);
    }

    function onAddTaskSubmit(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
                <div className="w-[500px] space-y-4">
                    <h1 className="text-3xl text-slate-100 font-bold text-center bg-slate-400 p-2 rounded-md">
                        Taks Manager
                    </h1>
                    <AddTAsks onAddTaskSubmit={onAddTaskSubmit} />
                    <Tasks
                        tasks={tasks}
                        onTaskClick={onTaskClick}
                        deleteTask={deleteTask}
                    />
                </div>
            </div>
        </>
    );
}
export default App;
