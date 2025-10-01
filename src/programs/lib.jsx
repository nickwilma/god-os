import Terminal from "./Terminal.jsx";
import Photos from "./Photos.jsx";
import Mail from "./Mail.jsx";

export const programs = [
    {
        name: "Terminal",
        icon: "terminal",
        content: <Terminal/>,
        desktopPosition: {x: 100, y: 100},
    },
    {
        name: "Photos",
        icon: "images",
        content: <Photos/>,
        desktopPosition: {x: 0, y: 0},
    },
    {
        name: 'Unknown',
        icon: 'question-circle',
        content: <div>Unknown program</div>,
        desktopPosition: {x: 300, y: 300},
    },
    {
        name: 'Mail',
        icon: 'envelope',
        content: <Mail/>,
        desktopPosition: {x: 300, y: 0},
    }
];

export const initialPrograms = programs.map(p => p.name);
