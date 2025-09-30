import { useState } from "react";

export function Desktop() {

    const tempPrograms = [
        {
            name: "World.exe",
            icon: "filetype-exe",
            position: {
                x: 0,
                y: 0,
            }
        },
        {
            name: "Terminal",
            icon: "terminal",
            position: {
                x: 100,
                y: 200,
            }
        }
    ];

    const [programs, setPrograms] = useState(tempPrograms);

    function ProgramPreview(program) {
        return <div className="p-2 bg-stone-700 rounded m-2 text-white absolute w-[100px] h-[100px] " style={{top: program.position.y, left: program.position.x, backgroundColor: "oklch(0.37 0.01 67.56 / 0.5)", border: "1px solid #80808085"}}>
            <div className="flex flex-col h-full gap-1">
                <i className={"inline text-center text-6xl flex-grow bi bi-" + program.icon}></i>
                <span className="text-center">{program.name}</span>
            </div>
        </div>
    }

    return <div className={"w-full h-full bg-stone-950"}>
        {programs.map(ProgramPreview)}
    </div>
}