import { useState } from "react";

export default function Calculator() {

    const [result, setResult] = useState(0);

    return <div className="w-full h-full bg-slate-900 text-white p-2 flex flex-col gap-2">
        <div className="text-center p-3 w-100 text-2xl">
            {result}
        </div>
        <div className="w-100 flex flex-col gap-1 items-center">
            <div className="flex flex-row gap-1">
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">1</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">2</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">3</button>
                <button className="btn bg-slate-400 p-2 px-[15px] rounded-full">+</button>
            </div>
            <div className="flex flex-row gap-1">
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">4</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">5</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">6</button>
                <button className="btn bg-slate-400 p-2 px-[17px] rounded-full">-</button>
            </div>
            <div className="flex flex-row gap-1">
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">7</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">8</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">9</button>
                <button className="btn bg-slate-400 p-2 px-[17px] rounded-full">/</button>
            </div>
            <div className="flex flex-row gap-1">
                <button className="btn bg-orange-500 p-2 px-3 rounded-full"><i className="bi bi-trash2"></i></button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full">0</button>
                <button className="btn bg-orange-500 p-2 px-4 rounded-full">=</button>
                <button className="btn bg-slate-400 p-2 px-[17px] rounded-full">*</button>
            </div>
        </div>
    </div>
}