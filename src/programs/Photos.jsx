import {useProgressionStore} from "../progression.js";

export default function Photos() {
    const photosSolved = useProgressionStore((state) => state.photosSolved);
    const solvePhotos = useProgressionStore((state) => state.solvePhotos);
    const achievements = useProgressionStore((state) => state.achievements);
    const addAchievement = useProgressionStore((state) => state.addAchievement);

    return <div>
        <p>Hello from photos</p>
        <p>You have {photosSolved ? '' : 'not'} solved the puzzle</p>
        <button onClick={solvePhotos}>Solve Puzzle</button>
        <p>You have {achievements} achievements</p>
        <button onClick={() => addAchievement()}>Add achievement</button>
    </div>
}