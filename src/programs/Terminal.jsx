import { useState } from "react"


export default function Terminal() {

    const tempTextRows = [
        "Herzlichen Wilkommen..."
    ];

    const commands = {
        ls: commandLs,
        cd: commandCd,
    }

    const [dir, setDir] = useState("C:/aliens/mark");

    const [textRows, setTextRows] = useState(tempTextRows);
    const [inputVal, setInputVal] = useState("");

    function addTextRow(row) {
        setTextRows(textRows.concat([row]));
    }

    function addTextRows(rows) {
        setTextRows(textRows.concat(rows));
    }

    function handleInputChange(e) {
        setInputVal(e.target.value);
    }

    function handleInputKeyDown(e) {
        if (e.key === "Enter") {
            const rows = [];
            rows.push(dir +" > " + inputVal);

            const inputLower = inputVal.toLowerCase().split(" ")[0];
            const rest = inputVal.toLowerCase().split(" ").slice(1);

            if(commands.hasOwnProperty(inputLower)) {
                rows.push(commands[inputLower](rest));
            } else {
                rows.push("command not found!");
            }

            setInputVal("");
            addTextRows(rows);
        }
    };

    function commandLs() {
        return "hallo, 123";
    }

    function commandCd(rest) {
        if(rest.length <= 0) {
            return "Error: no dir specified";
        }

        setDir(rest[0]);
    }

    return <div className="w-full h-full bg-slate-900 text-white p-2 flex flex-col">
        {textRows.map(textRow => <span>
            {textRow}
        </span>)}
        <span className="w-full flex flex-row">
            <span>{dir + " > "}</span>
            <input type="text" className="flex-grow" style={{outline: "none"}} autoFocus value={inputVal} onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
        </span>
    </div>
}