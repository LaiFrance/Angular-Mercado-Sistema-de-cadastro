import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>('http://localhost:3001/LoginPage');
    }

    register(LoginPage: any) {
        return this.http.post('http://localhost:3001/LoginPage',LoginPage);
    }

    
}