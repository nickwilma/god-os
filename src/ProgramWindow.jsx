import Draggable from "react-draggable";
import {useRef} from "react";

export default function ProgramWindow({task, onTaskMinimise,onTaskClose,children}) {
    const nodeRef = useRef(null);

    return <Draggable
        handle=".header"
        defaultPosition={{x: 100, y: 100}}
        position={null}
        scale={1}
        nodeRef={nodeRef}>
        <div
            style={{display: task.open ? "block" : "none"}}
            ref={nodeRef}
            className={"absolute bg-emerald-200 resize z-10 gap-2 m-2 rounded min-w-1/5 min-h-1/5 border-2 border-gray-400 overflow-auto"}>
            <div className="flex flex-col h-full w-full">
                <WindowHeader task={task} onTaskClose={onTaskClose} onTaskMinimise={onTaskMinimise} className={"header"}/>
                <HorizontalLine/>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </div>
    </Draggable>
}

function WindowHeader({task, onTaskMinimise, onTaskClose, className = ''}) {
    return <div className={`flex flex-row justify-between pe-2 pl-2 ${className}`}>
        <i className={"bi bi-" + task.icon}></i>
        <span className="select-none">{task.name}</span>
        <div className={"flex flex-row gap-2"}>
            <button onClick={() => onTaskMinimise(task)} className="btn btn-sm">
                <i className="bi bi-dash-lg"></i>
            </button>
            <button onClick={() => onTaskClose(task)} className="btn btn-sm">
                <i className="bi bi-x-lg"></i>
            </button>
        </div>
    </div>
}

function HorizontalLine() {
    return <div className={"border-b border-gray-400"}></div>
}