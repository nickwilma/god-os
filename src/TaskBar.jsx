export function TaskBar({tasks}) {

    function StartButton() {
        return <button className="flex flex-row gap-2 btn bg-blue-200">
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
                <i className={"h-full w-auto fill-current bi bi-" + task.icon}></i>
            </button>
        );
    }

    function Clock() {
        return <span className="p-2 ms-auto">12:14 Uhr</span>
    }

    return <div className={"flex flex-row w-full h-full bg-stone-800 p-2 gap-2"}>
        <StartButton />
        <VerticalLine />
        <Tasks />
        <Clock />
    </div>


}