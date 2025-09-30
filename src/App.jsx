import './App.css'
import {Desktop} from "./Desktop.jsx";
import {TaskBar} from "./TaskBar.jsx";
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProgramWindow from "./ProgramWindow.jsx";

function App() {

    const tempTasks = [
        {
            name: "Task1",
            icon: "terminal",
            content: "",
        },
        {
            name: "Task2",
            icon: "browser-firefox",
            content: "",
        }
    ];

    const [tasks, setTasks] = useState(tempTasks);

    return (
        <>
            <ProgramWindow task={tasks[0]}>
                <p>Content</p>
            </ProgramWindow>
            <div className={"flex flex-col w-screen h-screen bg-green-50"}>
                <div className={"flex-grow"}>
                    <Desktop/>
                </div>
                <div className={""}>
                    <TaskBar tasks={tasks} />
                </div>
            </div>
        </>
    );
}

export default App
