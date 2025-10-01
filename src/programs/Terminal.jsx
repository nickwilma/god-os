import { useState } from "react"


export default function Terminal() {

    const tempTextRows = [
        "Herzlichen Wilkommen..."
    ];

    const commands = {
        ls: commandLs,
    }

    const dir = "C:/aliens/mark"

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

            const inputLower = inputVal.toLowerCase();

            if(commands.hasOwnProperty(inputLower)) {
                rows.push(commands[inputLower](inputLower));
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