import { Component, OnInit } from '@angular/core';
import { Doctor } from './interfaces/doctor';
import { DoctorsService } from './services/doctors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'seamhealth_assessment';

  constructor(private doctorService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorService.populateDoctors().subscribe((res: Doctor[]) => {
      console.log(res);
      res.forEach(value => this.doctorService.addDoctor(value))
    })
  }

}
