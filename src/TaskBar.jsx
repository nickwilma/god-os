import { useEffect, useState } from "react";

export function TaskBar({tasks}) {

    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            updateClock();
        }, 1000 * 10);

        updateClock();

        return () => clearInterval(interval);

    }, [time]);

    function updateClock() {
        setTime(new Date().toTimeString().slice(0, 5) + " Uhr");
    }

    function StartButton() {
        return <button className="flex flex-row gap-2 btn bg-purple-800 rounded p-2 px-3 text-white">
            <i className="bi bi-microsoft"></i>
            Start
        </button>;
    }

    function VerticalLine() {
        return <div className="border-l border-gray-400"></div>
    }

    function Tasks() {
        return tasks.map(task => 
            <button className="">
                <i className={"bg-stone-700 text-white rounded p-2 px-3 h-full w-auto fill-current bi bi-" + task.icon}></i>
            </button>
        );
    }

    function Widget() {
        return <span className="text-white p-2 ms-auto flex flex-row gap-2">
            <i className="bi bi-wifi"></i>
            <span> {time} </span>
        </span>
    }

    return <div className={"flex flex-row w-full h-full bg-stone-800 p-2 gap-2"}>
        <StartButton />
        <VerticalLine />
        <Tasks />
        <Widget />
    </div>


}