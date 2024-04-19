import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  createNewUser(username: string, fullName: string, password: string) {
    return this.http.post<{ token: string }>(BASE_URL + '/auth/register', {
      username,
      fullName,
      password,
    });
  }

  loginUser(username: string, password: string) {
    return this.http.post<{ token: string }>(BASE_URL + '/auth/login', {
      username,
      password,
    });
  }
}
