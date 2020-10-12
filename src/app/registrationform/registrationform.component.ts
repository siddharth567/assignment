import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private _router:Router) { }

  ngOnInit(): void {
    this.initializeData();
  }


    //Initialize the data
    initializeData() {
      this.buildForm()
    }

    //Building the form
  buildForm(): any {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gendor:['',Validators.required],
      phonenumber:[''],
      email: ['', [Validators.required,Validators.email]],
      accountno:['',Validators.required],
      ifsccode:['',Validators.required],
      notes:[''],
    

    });
  }

      // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    console.log(this.registerForm.value)
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}



}
