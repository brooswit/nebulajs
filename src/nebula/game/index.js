class Game {
    constructor(nebula) {
        nebula.on('heartbeat', ()=>{
            console.log('hi');
        });
    }
}
export default Game;