import {useProgressionStore} from "./progression.js";
import {programs} from "./programs/lib.jsx";

export function Desktop({startProgram}) {

    const availablePrograms = useProgressionStore(state => state.availablePrograms);

    const displayPrograms = programs.filter(p => availablePrograms.includes(p.name));

    function ProgramPreview(program) {
        return <div className="p-2 bg-stone-700 rounded m-2 text-white absolute w-[100px] h-[100px] " style={{top: program.desktopPosition.y, left: program.desktopPosition.x, backgroundColor: "oklch(0.37 0.01 67.56 / 0.5)", border: "1px solid #80808085"}}>
            <div onDoubleClick={() => startProgram(program)} className="flex flex-col h-full gap-1">
                <i className={"inline text-center text-6xl flex-grow bi bi-" + program.icon}></i>
                <span className="text-center">{program.name}</span>
            </div>
        </div>
    }

    return <div className={"w-full h-full bg-stone-950"}>
        {displayPrograms.map(ProgramPreview)}
    </div>
}