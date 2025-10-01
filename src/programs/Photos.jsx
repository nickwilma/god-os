import { useState } from "react";
import {useProgressionStore} from "../progression.js";

export default function Photos() {
    
    const pics = [
        {
            name: "Holidays 1",
            url: "https://picsum.photos/200/300",
            props: {
                created: new Date().toDateString(),
                owner: "alien 1"
            }
        },
        {
            name: "Holidays 2",
            url: "https://picsum.photos/200",
        }
    ];

    const [counter, setCounter] = useState(0);
    const [showProps, setShowProps] = useState(false);

    function nextPic() {
        setCounter(Math.min(counter + 1, pics.length-1));
    }

    function prevPic() {
        setCounter(Math.max(counter - 1, 0));
    }

    function toggleProps() {
        setShowProps(!showProps);
    }

    return <div className="w-full h-full bg-slate-900 text-white p-2 flex flex-col gap-2">
        <span className="w-full text-center">{pics[counter].name + " (" + (counter+1) + "/" + (pics.length) + ")"}</span>
        <div className="w-full flex flex-row justify-center h-[300px]">
            {
                showProps ? <div>{
                    Object.keys(pics[counter].props || {}).map(key => <span className="flex w-[300px]">
                        <div className="w-1/2">{key}</div>
                        <div className="w-1/2 text-right">{pics[counter].props[key]}</div>
                    </span>)
                }</div> : <img src={pics[counter].url} alt={pics[counter].name} className="w-[300px]"/>
            }
        </div>
        <div className="w-full flex flex-row gap-2">
            <button className="btn bg-stone-700 p-2 px-3 rounded" onClick={toggleProps}>
                <i className="bi bi-info-lg"></i>
            </button>
            <button className="btn bg-purple-700 p-2 px-3 rounded flex-grow" onClick={prevPic}>
                Zurück
            </button>
            <button className="btn bg-purple-700 p-2 px-3 rounded flex-grow" onClick={nextPic}>
                Weiter
            </button>
        </div>
    </div>
}