import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Doctor } from 'src/app/interfaces/doctor';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  public searchInput?: string;
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorsService) { }

  ngOnInit(): void {
    this.doctors = this.doctorService.getDoctors();
  }

}
