import './App.css'
import {Desktop} from "./Desktop.jsx";
import {TaskBar} from "./TaskBar.jsx";
import {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProgramWindow from "./ProgramWindow.jsx";


function App() {

    const addTask = (task) => {
        if (tasks.some(t => t.name === task.name)) {
            return;
        }
        setTasks([...tasks, {...task, show: 'open'}]);
    }

    const onTaskClose = (task) => {
        setTasks(tasks.filter(t => t.name !== task.name));
    }

    const onTaskMinimise = (task) => {
        setTasks(tasks.map(t => {
            if (t.name === task.name) {
                return {...t, show: 'minimised'}
            }
            return t;
        }))
    }

    const onTaskFocus = (task) => {
        setTasks(tasks.map(t => {
            if (t.name === task.name) {
                return {...t, show: 'focused'};
            }
            if (t.name !== task.name && t.show === 'focused') {
                return {...t, show: 'open'};
            }
            return t;
        }));
    }

    const [tasks, setTasks] = useState([]);

    return (
        <>
            {tasks.map(t => (
                <ProgramWindow
                    key={t.name}
                    task={t}
                    onTaskMinimise={onTaskMinimise}
                    onTaskClose={onTaskClose}
                    onTaskFocus={onTaskFocus}
                >
                    {t.content}
                </ProgramWindow>
            ))}
            <div className={"flex flex-col w-screen h-screen bg-green-50"}>
                <div className={"flex-grow"}>
                    <Desktop startProgram={addTask}/>
                </div>
                <div className={""}>
                    <TaskBar tasks={tasks} onTaskFocus={onTaskFocus}/>
                </div>
            </div>
        </>
    );
}

export default App
