import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: Array<any> = []
  url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.url);
  }
}
