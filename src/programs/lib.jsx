import Terminal from "./Terminal.jsx";
import Photos from "./Photos.jsx";

export const programs = [
    {
        name: "Terminal",
        icon: "terminal",
        content: <Terminal/>,
    },
    {
        name: "Photos",
        icon: "images",
        content: <Photos/>,
    },
    {
        name: 'Unknown',
        icon: 'question-circle',
        content: <div>Unknown program</div>,
    }
];