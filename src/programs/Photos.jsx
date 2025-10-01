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

    let counter = 0;
    const [pic, setPic] = useState(pics[counter]);
    const [showProps, setShowProps] = useState(false);

    function nextPic() {
        counter = Math.min(counter + 1, pics.length-1);
        setPic(pics[counter]);
    }

    function prevPic() {
        counter = Math.max(counter - 1, 0);
        setPic(pics[counter]);
    }

    function toggleProps() {
        setShowProps(!showProps);
    }

    return <div className="w-full h-full bg-slate-900 text-white p-2 flex flex-col gap-2">
        <span className="w-full text-center">{pic.name + " (" + (counter+1) + "/" + (pics.length) + ")"}</span>
        <div className="w-full flex flex-row justify-center h-[300px]">
            {
                showProps ? <div>{
                    Object.keys(pic.props || {}).map(key => <span className="flex w-[300px]">
                        <div className="w-1/2">{key}</div>
                        <div className="w-1/2">{pic.props[key]}</div>
                    </span>)
                }</div> : <img src={pic.url} alt={pic.name} className="w-[300px]"/>
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