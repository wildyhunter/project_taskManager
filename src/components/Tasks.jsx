import { ChevronRightIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Tasks = (props) => {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
    query.set('title',task.title);
    query.set('description',task.description);
        navigate(`/task?${query.toString()}`);
    }
    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow">
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button
                            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                                task.completed ? 'line-through' : ''
                            }`}
                            onClick={() => props.onTaskClick(task.id)}
                        >
                            {task.title}
                        </button>
                        <button className="bg-slate-400 text-white p-2 rounded-md cursor-pointer" onClick={()=> onSeeDetailsClick(task)}>
                            <ChevronRightIcon />
                        </button>
                        <button className="bg-slate-400 text-white p-2 rounded-md cursor-pointer" onClick={() => props.deleteTask(task.id)}>
                            <TrashIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Tasks.defaultProps = {
    tasks: [],
};

export default Tasks;
