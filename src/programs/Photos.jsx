import {useState} from "react";

export default function Photos() {
    const [count, setCount] = useState(0);
    return <div>
        <button onClick={() => setCount(count + 1)}>
            Click me {count}
        </button>

        <span>Hello from photos</span>
    </div>
}
