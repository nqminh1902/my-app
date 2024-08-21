import { AfterViewInit, Component, ComponentFactoryResolver, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.template);
    console.log(this.container.element);
    console.log(this.container);
    
  }
  @ViewChild('template') template!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor() {}


  addView() {
    this.container.createEmbeddedView(this.template, { name: 'Angular' });
  }

  destroyView(){

    this.container.clear()
  }

  showTemplate() {
    const view = this.template.createEmbeddedView({ name: 'Angular' });
    document.body.appendChild(view.rootNodes[0]);
    view.detectChanges();
  }

  loadComponent() {
    // Xóa tất cả các component hiện tại trong container
    this.container.clear();

    // Tạo ComponentFactory cho DynamicComponent

    // Tạo và chèn DynamicComponent vào container
    const componentRef = this.container.createComponent(ChildComponent);
  }
}
