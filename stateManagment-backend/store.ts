// interface Game {
//     id: string;
//     whitePlayer: string;
//     blackPlayer: string;
//     moves: string[];
// }

// // this is bad approach to store and handle the state of user in backend.
// // export const games: Game[] = [];


// // we use concept of classes  
// export class gameManager{
    
//    private games:Game[]=[];

//     constructor(){
//        this.games=[];
//     }

//    public addGame(id:string,whitePlayer:string,blackPlayer:string){
//         this.games.push({
//             "id": id,
//             "whitePlayer": whitePlayer,
//             "blackPlayer": blackPlayer,
//             moves: []
//         })
//     }

//     public getGames()
//     {
//         return this.games;
//     }

//     public addMove(id:string,move:string){
//         this.games.forEach(game => {
//             if(game.id===id){
//                 game.moves.push(move);
//             }
//         });
//     }

//     public logGames(){
//         console.log(this.games);
//     }
// }

// export const gameManagerInstance=new gameManager();











// // why we use classes?
// // 1. we can create multiple instances of classes
// // 2. we can use constructor to initialize the state of class
// // 3. we can use access modifiers like private,public,protected
// // 4. we can use new class dervided from base class

// // export class updateRedisState extends gameManager{
// // }

// // 5.add new interface in base class
// // export gmaemanager implements IgameManager{}











// singleton pattern

// return always the same instance of class to prevent multiple instances of same class in memory
interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private static instance: GameManager; // Create a static instance of the class
    private games: Game[] = [];

    private constructor() {
        // Private constructor ensures that a new instance cannot be created from outside
    }

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}
