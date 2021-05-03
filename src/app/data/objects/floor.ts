import { ContextElement } from "./context-element";

export class Floor implements ContextElement{
    height: number = 50;
    width: number = 1000;
    y: number = 650 - this.height;
    x: number = 0;
    gravity: number = 1;
    speed: number = 0;
    life: number = 100;
    uid:string;
    //--------------------
    constructor(id:string){
        this.uid = id;
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = '#350';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(): void {
        throw new Error("Method not implemented.");
    }

    getColisionValues(): number[] | null {
        throw new Error("Method not implemented.");
    }
    
    keypress(): void {
        throw new Error("Method not implemented.");
    }
    collision(): void {
        //**como calcular a colisão? */
        
    }
}
