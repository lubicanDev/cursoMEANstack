import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  title = 'app works!';
  mensajes: string[] = [];
  contador: number = 0;

  hacerClick() {
    this.contador++;
    this.title += " pulsa " + this.contador;
  }
  ngOnChanges(cambios: SimpleChanges) {
    this.ng("ngOnChange" + cambios);
  }
  ngOnInit() {
    this.ng("ngOnInit");
  }
  ngDoCheck() {
    this.ng("DoCheck");
  }
  ngAfterContentInit() {
    this.ng("AfterContentInit");
  }
  ngAfterContentChecked() {
    this.ng("AfterContentChecked");
  }
  ngAfterViewChecked() {
    this.ng("AfterViewChecked");
  }
  ngAfterViewInit() {
    this.ng("AfterViewInit");
  }
  ngOnDestroy() {
    this.ng("OnDestroy");
  }

  ng(nombreMetodo: string) {
    this.mensajes.push(new Date().toISOString() + ": " + nombreMetodo);
  }
}
