import { ElementRef, Injectable, OnInit } from '@angular/core';
import { ContextElement } from '../data/objects/context-element';
import { Floor } from '../data/objects/floor';
import { UogService } from './uog.service';


@Injectable({
  providedIn: 'root'
})
export class EngineService implements OnInit{

  private contextReference:CanvasRenderingContext2D;
  private canvas:ElementRef<HTMLCanvasElement>;
  private animationCanvasID:number;

  private drawableObjects:Array<ContextElement> = [];

  constructor(
    private uog:UogService
  ) { }

  ngOnInit(): void {
        
    this.softAnimation();

    this.canvas.nativeElement.style.width = '1000px';
    this.canvas.nativeElement.style.height = '650px';
    this.canvas.nativeElement.style.position= 'absolute';
    this.canvas.nativeElement.style.top= '0px';
    this.canvas.nativeElement.style.bottom= '0px';
    this.canvas.nativeElement.style.left= '0px';
    this.canvas.nativeElement.style.right= '0px';
    this.canvas.nativeElement.style.margin= 'auto';
    
    this.contextReference.fillStyle = "#f72345";
    this.contextReference.fillRect(0,0,1000,600);


    /**Vou colovar aqui temporariamente até pensar nos levels corretamente. */
    this.addDrawableObject(new Floor(this.uog.getUID()));

    this.coreDrawElements();
  }

  setContext(context:CanvasRenderingContext2D){
    this.contextReference = context;
  }

  setCanvas(canvas:ElementRef<HTMLCanvasElement>){
    this.canvas = canvas;
  }

  coreDrawElements(){
   this.drawableObjects.forEach(element => {
     element.draw(this.contextReference);
   });
   this.softAnimation();
   this.contextReference.save();
  }

  private softAnimation(){
    this.animationCanvasID = requestAnimationFrame(() => this.softAnimation);
  }

  public addDrawableObject(obj:ContextElement){
    this.drawableObjects.push(obj);
  }

  public removeDrawableObject(obj:ContextElement){
    this.drawableObjects.filter((item) => {
      return item.uid !== obj.uid;
    })
  }


}
