interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

// this is bad approach to store and handle the state of user in backend.
// export const games: Game[] = [];


// we use concept of classes  
export class gameManager{
    
   private games:Game[]=[];

    constructor(){
       this.games=[];
    }

   public addGame(id:string,whitePlayer:string,blackPlayer:string){
        this.games.push({
            "id": id,
            "whitePlayer": whitePlayer,
            "blackPlayer": blackPlayer,
            moves: []
        })
    }

    public getGames()
    {
        return this.games;
    }

    public addMove(id:string,move:string){
        this.games.forEach(game => {
            if(game.id===id){
                game.moves.push(move);
            }
        });
    }

    public logGames(){
        console.log(this.games);
    }
}

export const gameManagerInstance=new gameManager();