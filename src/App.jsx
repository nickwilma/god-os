import './App.css'
import {Desktop} from "./Desktop.jsx";
import {TaskBar} from "./TaskBar.jsx";
import {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProgramWindow from "./ProgramWindow.jsx";
import Photos from "./programs/Photos.jsx";

function App() {

    const tempTasks = [
        {
            name: "Terminal",
            icon: "terminal",
            content: "Hello",
            open: true,
        },
        {
            name: "Photos",
            icon: "images",
            content: <Photos/>,
            open: true,
        }
    ];

    const onTaskClose = (task) => {
        setTasks(tasks.filter(t => t.name !== task.name));
    }

    const onTaskMinimise = (task) => {

    }

    const [tasks, setTasks] = useState(tempTasks);

    return (
        <>
            {tasks.map(t => <ProgramWindow task={t} onTaskMinimise={onTaskMinimise} onTaskClose={onTaskClose}>{t.content}</ProgramWindow>)}
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
