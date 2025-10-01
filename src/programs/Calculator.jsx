import { useState } from "react";

export default function Calculator() {

    const [result, setResult] = useState("");

    function addVal(val) {
        setResult(result + String(val));
    }

    function delVal() {
        setResult("");
    }

    function evalVal() {
        setResult(String(evaluateWeirdMath(result)));
    }

    return <div className="w-full h-full bg-slate-900 text-white p-2 flex flex-col gap-2">
        <div className="text-center p-3 w-100 text-2xl">
            {result || "0"}
        </div>
        <div className="w-100 flex flex-col gap-1 items-center">
            <div className="flex flex-row gap-1">
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(1)}}>1</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(2)}}>2</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(3)}}>3</button>
                <button className="btn bg-slate-400 p-2 px-[15px] rounded-full" onClick={() => {addVal("+")}}>+</button>
            </div>
            <div className="flex flex-row gap-1">
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(4)}}>4</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(5)}}>5</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(6)}}>6</button>
                <button className="btn bg-slate-400 p-2 px-[17px] rounded-full" onClick={() => {addVal("-")}}>-</button>
            </div>
            <div className="flex flex-row gap-1">
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(7)}}>7</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(8)}}>8</button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(9)}}>9</button>
                <button className="btn bg-slate-400 p-2 px-[17px] rounded-full" onClick={() => {addVal("/")}}>/</button>
            </div>
            <div className="flex flex-row gap-1">
                <button className="btn bg-orange-500 p-2 px-3 rounded-full"onClick={delVal}><i className="bi bi-trash2"></i></button>
                <button className="btn bg-slate-500 p-2 px-4 rounded-full" onClick={() => {addVal(0)}}>0</button>
                <button className="btn bg-orange-500 p-2 px-4 rounded-full" onClick={evalVal}>=</button>
                <button className="btn bg-slate-400 p-2 px-[17px] rounded-full" onClick={() => {addVal("*")}}>*</button>
            </div>
        </div>
    </div>

    function evaluateWeirdMath(expr) {
        if (typeof expr !== 'string') {
            return "🧠 Input wasn't a string. Try again.";
        }

        const weirdOps = [
            { pattern: /\+\+/, action: 'reverseNumbers' },
            { pattern: /--/, action: 'binaryNumbers' },
            { pattern: /\+-|-+/, action: 'emojiNumbers' }
        ];

        let modifiedExpr = expr;
        let behaviorApplied = null;

        // Step 1: Detect weird operator pattern
        for (const op of weirdOps) {
            if (op.pattern.test(modifiedExpr)) {
                behaviorApplied = op.action;
                break;
            }
        }

        try {
            // Step 2: Apply weird transformation
            if (behaviorApplied === 'reverseNumbers') {
                modifiedExpr = modifiedExpr.replace(/\d+/g, num =>
                    num.split('').reverse().join('')
                );
            } else if (behaviorApplied === 'binaryNumbers') {
                modifiedExpr = modifiedExpr.replace(/\d+/g, num =>
                    parseInt(num, 10).toString(2)
                );
            } else if (behaviorApplied === 'emojiNumbers') {
                const numToEmoji = ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'];
                modifiedExpr = modifiedExpr.replace(/\d/g, d => numToEmoji[+d]);
                return `🧸 Emoji mode: ${modifiedExpr}`;
            }

            // Step 3: Normalize broken operator sequences (regardless of behavior)
            modifiedExpr = modifiedExpr
                .replace(/--/g, '+')
                .replace(/\+\+/g, '+')
                .replace(/\+-/g, '-')
                .replace(/-\+/g, '-');

            // Validate that it now looks like math
            if (!/^[\d+\-*/().\s]+$/.test(modifiedExpr)) {
                return `🧩 Still couldn't make sense of: "${modifiedExpr}"`;
            }

            // Step 4: Evaluate
            const result = Function(`return ${modifiedExpr}`)();

            if (isNaN(result) || result === undefined) {
                return "🤷 Math was too weird to finish.";
            }

            return result;
        } catch (e) {
            return "💥 Internal error, but you're safe.";
        }
    }

}