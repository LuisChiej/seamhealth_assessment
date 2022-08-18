import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private url = 'https://jsonplaceholder.typicode.com/users'
  private doctors: Doctor[] = [];

  constructor(private http: HttpClient) { }

  public populateDoctors() {
    return this.http.get<Doctor[]>(this.url)
  }

  public getDoctors(): Doctor[] {
    return this.doctors;
  }

  public addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }
}
