import './App.css'
import {Desktop} from "./Desktop.jsx";
import {TaskBar} from "./TaskBar.jsx";

function App() {

    return (
        <>
            <div className={"flex flex-col w-screen h-screen bg-green-50"}>
                <div className={"flex-9"}>
                    <Desktop/>
                </div>
                <div className={"flex-1"}>
                    <TaskBar />
                </div>
            </div>
        </>
    );
}

export default App
