import './App.css'
import {Desktop} from "./Desktop.jsx";
import {TaskBar} from "./TaskBar.jsx";
import {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProgramWindow from "./ProgramWindow.jsx";
import Photos from "./programs/Photos.jsx";
import Terminal from './programs/Terminal.jsx';



const tempTasks = [
    {
        name: "Terminal",
        icon: "terminal",
        content: <Terminal/>,
        show: 'open',
    },
    {
        name: "Photos",
        icon: "images",
        content: <Photos/>,
        show: 'closed',
    },
    {
        name: 'Unknown',
        icon: 'question-circle',
        content: <div>Unknown program</div>,
        show: 'closed',
    }
];

function App() {


    const onTaskClose = (task) => {
        setTasks(tasks.filter(t => t.name !== task.name));
    }

    const onTaskMinimise = (task) => {
        setTasks(tasks.map(t => {
            if(t.name === task.name) {
                return {...t, show: 'minimised'}
            }
            return t;
        }))
    }

    const [tasks, setTasks] = useState(tempTasks);

    return (
        <>
            {tasks.map(t => (
                <ProgramWindow 
                    key={t.name}
                    task={t} 
                    onTaskMinimise={onTaskMinimise} 
                    onTaskClose={onTaskClose}
                >
                    {t.content}
                </ProgramWindow>
            ))}
            <div className={"flex flex-col w-screen h-screen bg-green-50"}>
                <div className={"flex-grow"}>
                    <Desktop/>
                </div>
                <div className={""}>
                    <TaskBar tasks={tasks}/>
                </div>
            </div>
        </>
    );
}

export default App
