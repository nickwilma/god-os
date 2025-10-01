import Draggable from "react-draggable";
import {useRef} from "react";

export default function ProgramWindow({task, onTaskMinimise,onTaskClose, onTaskFocus,children}) {
    const nodeRef = useRef(null);

    return <Draggable
        handle=".header"
        defaultPosition={{x: 100, y: 100}}
        position={null}
        scale={1}
        nodeRef={nodeRef}>
        <div
            style={{display: task.show === 'open' || task.show === 'focused' ? "block" : "none"}}
            ref={nodeRef}
            className={`absolute bg-emerald-200 resize gap-2 m-2 rounded overflow-scroll min-w-1/5 min-h-1/5 border-2 border-gray-400 ${task.show === 'focused' ? "z-20" : "z-10"}`}>
            <WindowHeader task={task} onTaskClose={onTaskClose} onTaskMinimise={onTaskMinimise} onTaskFocus={onTaskFocus} className={"header"}/>
            <HorizontalLine/>
            {children}
        </div>
    </Draggable>
}

function WindowHeader({task, onTaskMinimise, onTaskClose, onTaskFocus, className = ''}) {
    return <div onMouseDown={() => onTaskFocus(task)} className={`flex flex-row justify-between pe-2 pl-2 ${className}`}>
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