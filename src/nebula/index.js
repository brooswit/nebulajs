import EventEmitter from "eventemitter3";
import Game from "./game";

class Box {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;

        this.pitch = 0;
        this.yaw = 0;
        this.roll = 0;
    }
}

class Nebula extends EventEmitter {
    constructor() {
        super();
        this._game = new Game(this);
        setInterval(()=>{
            this.emit('heartbeat');
        }, 1000/60);
    }

    getBoxList() {
        return [
            new Box()
        ]
    }
}

export default Nebula;
