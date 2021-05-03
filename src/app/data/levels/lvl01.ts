import { ContextLevel } from "./context-level";

export class Lvl01 implements ContextLevel{
    quantity = [
        {
            'floor': 1
        },
        {
            'player': 1
        },
        {
            'balls': {
                'release-time': 10,
                'size-min': 50,
                'size-max': 250
            }
        }
    ];
    constructor(){
        
    }

    play(context: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
}
