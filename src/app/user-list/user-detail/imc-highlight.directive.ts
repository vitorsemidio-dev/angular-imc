import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImcHighlight]'
})
export class ImcHighlightDirective implements OnInit {
  @Input() height: number;
  @Input() weight: number;

  private color = [
    '#33aaff',
    '#33ffff',
    '#ff55ff',
    '#ffaf',
    '#ff3333',
    '#ff1111',
  ];

  private levels = [
    'Magreza',
    'Saudável',
    'Sobrepeso',
    'Obesidade I',
    'Obesidade II (severa)',
    'Obesidade III (morbida)',
  ]

  constructor(
    private el: ElementRef,
  ) {}

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
    const imc = this.calcImc(this.weight, this.height);
    const color = this.getStatusColor(imc);
    this.el.nativeElement.style.backgroundColor = color;
  }

  private calcImc(weight: number, height: number) {
    return (weight / (height * height));
  }

  private getStatus(imc: number) {
    if (imc < 18.5) {
      return this.levels[0];
    } else if (imc < 24.9) {
      return this.levels[1];
    } else if (imc < 29.9) {
      return this.levels[2];
    } else if (imc < 34.9) {
      return this.levels[3];
    } else if (imc < 39.9) {
      return this.levels[4];
    } else {
      return this.levels[5];
    }
  }
  private getStatusColor(imc: number) {
    if (imc < 18.5) {
      return this.color[0];
    } else if (imc < 24.9) {
      return this.color[1];
    } else if (imc < 29.9) {
      return this.color[2];
    } else if (imc < 34.9) {
      return this.color[3];
    } else if (imc < 39.9) {
      return this.color[4];
    } else {
      return this.color[5];
    }
  }

}
