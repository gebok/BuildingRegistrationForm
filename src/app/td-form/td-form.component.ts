import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent {

  constructor() { }
  
  onSubmit(f: NgForm) {
    console.log(f);
  }
  getValue() { 
    console.log();
    
  }
}
