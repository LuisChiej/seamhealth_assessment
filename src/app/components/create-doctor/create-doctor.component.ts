import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  submitted: boolean = false;
  createDoctorForm!: FormGroup<{
    name: FormControl<string>,
    username: FormControl<string>, // Middle name is optional.
    email: FormControl<string>,
    phonenumber: FormControl<string>,
    city: FormControl<string>,
    website: FormControl<string>
  }>;

  constructor(private fb: FormBuilder, private doctorService: DoctorsService) { }

  ngOnInit(): void {
    this.createDoctorForm = this.fb.group({
      name: this.fb.nonNullable.control('', {
        validators: [Validators.required]
      }),
      username: this.fb.nonNullable.control('', {
        validators: [Validators.required]
      }),
      email: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.email]
      }),
      phonenumber: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.pattern('(^0)(7|8|9){1}(0|1){1}[0-9]{8}')]
      }),
      city: this.fb.nonNullable.control('', {
        validators: [Validators.required]
      }),
      website: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.pattern('([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]
      }),
    })
  }

  get formControl() { return this.createDoctorForm.controls }

  submit(): void {
    this.submitted = true;

    if(this.createDoctorForm.invalid) return;

    this.submitted = false;

    const { name, email, username, phonenumber, city, website } = this.createDoctorForm.value;

    this.doctorService.addDoctor({
      id: 0,
      name: name as string,
      website: website as string,
      phone: phonenumber as string,
      username: username as string,
      email: email as string,
      address: {
        city: city as string,
      }
    });
  }

}
