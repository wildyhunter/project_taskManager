import { ChevronLeftIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TaskPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const navigate = useNavigate();

    return (
        <div className="h-screean w-screen bg-slate-500 p-6 flex justify-center">
            <div className="w-[500px] space-y-4">
                <div className='flex justify-center align-center relative'>
                    <button className='absolute left-0 bg-slate-400 text-white p-2 rounded-md h-full cursor-pointer' onClick={()=> navigate('/')}>
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center bg-slate-400 p-2 rounded-md w-full">
                        Taks Details
                    </h1>
                </div>
                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskPage;
