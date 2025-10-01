import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.html',
  styleUrls: ['./property-binding.css']
})
export class PropertyBindingComponent {
  public imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  public isDisabled: boolean = true;
  public name: string = 'Angular';
}
