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
        open: true,
    },
    {
        name: "Photos",
        icon: "images",
        open: true,
    }
];

function App() {


    const onTaskClose = (task) => {
        setTasks(tasks.filter(t => t.name !== task.name));
    }

    const onTaskMinimise = (task) => {

    }

    const [tasks, setTasks] = useState(tempTasks);

    const renderTaskContent = (task) => {
        switch(task.name) {
            case 'Photos':
                return <Photos/>;
            case 'Terminal':
                return <h1>Hello</h1>;
            default:
                return <div>Unknown program</div>;
        }
    }

    return (
        <>
            {tasks.map(t => (
                <ProgramWindow 
                    key={t.name}
                    task={t} 
                    onTaskMinimise={onTaskMinimise} 
                    onTaskClose={onTaskClose}
                >
                    {renderTaskContent(t)}
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
