import { useState } from 'react';


const AddTAsks = ({ onAddTaskSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    console.log(title, description);

    return (
        <>
            <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">
                <input
                    type="text"
                    placeholder="Enter the task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Enter the task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                />
                <button
                    onClick={() => {
                        if (!title.trim() || !description.trim()) {
                            return alert('Fill in the emptyfields');
                        }
                        onAddTaskSubmit(title, description),
                            setTitle(''),
                            setDescription('');
                    }}
                    className="bg-slate-500 text-white p-2 rounded-md cursor-pointer"
                >
                    To add
                </button>
            </div>
        </>
    );
};

export default AddTAsks;
