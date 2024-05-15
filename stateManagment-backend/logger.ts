// import { games } from "./store";

// export function startLogger() {
//     setInterval(() => {
//         console.log(games);
//     }, 4000)
// }





// for  singleton pattern 
import { GameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        GameManager.getInstance().logState();
    }, 4000)
}