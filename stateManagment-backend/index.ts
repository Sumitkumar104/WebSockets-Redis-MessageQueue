// import { games } from "./store";
// import { startLogger } from "./logger";

// startLogger();

// setInterval(() => {
//     games.push({
//         "whitePlayer": "harkirat",
//         "blackPlayer": "jaskirat",
//         moves: []
//     })
// }, 5000)




// for singletonpattern
import { GameManager } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000)

