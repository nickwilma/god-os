import Draggable from "react-draggable";
import {useRef} from "react";

export default function ProgramWindow({task, children}) {
    const nodeRef = useRef(null);

    return <Draggable
        handle=".header"
        defaultPosition={{x: 100, y: 100}}
        position={null}
        scale={1}
        nodeRef={nodeRef}>
        <div
            ref={nodeRef}
            className={"absolute bg-emerald-200 resize z-10 gap-2 m-2 rounded overflow-scroll min-w-1/5 min-h-1/5 border-2 border-gray-400"}>
            <WindowHeader task={task}/>
            <HorizontalLine/>
            {children}
        </div>
    </Draggable>
}

function WindowHeader({task}) {
    return <div className={"flex flex-row justify-between pe-2 pl-2 header"}>
        <i className={"bi bi-" + task.icon}></i>
        <span>{task.name}</span>
        <div className={"flex flex-row gap-2"}>
            <i className="bi bi-dash-lg"></i>
            <i className="bi bi-x-lg"></i>
        </div>
    </div>
}

function HorizontalLine() {
    return <div className={"border-b border-gray-400"}></div>
}