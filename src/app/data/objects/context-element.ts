export interface ContextElement {
    uid:string,
    height:number,
    width:number,
    y:number,
    x:number,
    gravity:number,
    speed:number,
    life:number
    draw(context:CanvasRenderingContext2D):void,
    update():void,
    getColisionValues():Array<number>|null,
    keypress():void,
    collision():void
}
