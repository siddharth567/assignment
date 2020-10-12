import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.scss']
})
export class CustomdirectiveComponent implements OnInit {
  orderForm: FormGroup;
items: FormArray;

constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.orderForm = new FormGroup({
    items: new FormArray([])
  });
}

createItem(): FormGroup {
  return this.formBuilder.group({
    name: '',
  });
}

addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
  console.log(this.orderForm.value)
}
  

}
