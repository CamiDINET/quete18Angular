import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private role: string= 'ANONYMOUS';
  constructor() { }

  getRole(){
    return this.role;
  }
}
