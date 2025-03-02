import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-breadcrumb-two',
    templateUrl: './breadcrumb-two.component.html',
    styleUrls: ['./breadcrumb-two.component.scss'],
    standalone: false
})
export class BreadcrumbTwoComponent {

  @Input() title! : string;
  @Input() subtitle! : string;
}
