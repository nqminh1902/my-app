import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {

  @Input() appHighlight = '';

  @Input() isRed = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.appHighlight || 'transparent');
  }

  @HostListener('click') onClick(){
    this.showAlert()
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private showAlert(){
    const text = this.el.nativeElement.innerText
    alert(text)

    if(this.isRed === "red"){
      this.el.nativeElement.style.display = "none"
    }else{
      this.el.nativeElement.style.display = "block"
    }
  }

  setColor(color: string){
    this.el.nativeElement.style.color = color
  }
}
