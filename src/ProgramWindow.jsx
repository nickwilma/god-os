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
            className={`absolute bg-slate-400 resize z-10 gap-2 m-2 rounded min-w-1/3 min-h-1/3 border-2 border-gray-400 overflow-hidden ${task.show === 'focused' ? "z-20" : "z-10"}`}>
            <div className="absolute h-full w-full">
                <div className="flex flex-col h-full w-full">
                    <WindowHeader task={task} onTaskClose={onTaskClose} onTaskFocus={onTaskFocus} onTaskMinimise={onTaskMinimise} className={"header"}/>
                    <HorizontalLine/>
                    <div className="flex-grow overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </Draggable>
}

function WindowHeader({task, onTaskMinimise, onTaskClose, onTaskFocus, className = ''}) {
    return <div onMouseDown={() => onTaskFocus(task)} className={`flex flex-row justify-between pl-2 ${className}`}>
        <i className={"bi bi-" + task.icon}></i>
        <span className="select-none flex-grow ms-2">{task.name}</span>
        <div className={"flex flex-row"}>
            <button onClick={() => onTaskMinimise(task)} className="btn btn-sm bg-gray-500 text-white px-3">
                <i className="bi bi-dash-lg"></i>
            </button>
            <button onClick={() => onTaskClose(task)} className="btn btn-sm bg-red-500 text-white px-3">
                <i className="bi bi-x-lg"></i>
            </button>
        </div>
    </div>
}

function HorizontalLine() {
    return <div className={"border-b border-gray-400"}></div>
}