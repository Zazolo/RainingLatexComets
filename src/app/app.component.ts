import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './core/engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  @ViewChild('gamecanvas', { static: true }) canvasElement: ElementRef<HTMLCanvasElement>;

  public context: CanvasRenderingContext2D | undefined;

  ngOnInit(): void {
    this.iniciar();
  }

  constructor(
    private engine:EngineService
  ){}

  private iniciar(){
    this.context = this.canvasElement.nativeElement.getContext('2d') || undefined;    
    if(this.canvasElement && this.context){
      this.engine.setCanvas(this.canvasElement);
      this.engine.setContext(this.context);
      this.engine.ngOnInit();
    }
    
  }
  
  

}
