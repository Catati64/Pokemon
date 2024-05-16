import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  private logged$ = new BehaviorSubject<boolean>(false);
  public  loggedObs = this.logged$.asObservable();
  private user$ = new BehaviorSubject<User>(new User());
  public  userObs = this.user$.asObservable();

  user: User = new User()

  actualizarValorLogged(valor:boolean, email: string){
    this.user.email = email;
    this.logged$.next(valor);
    this.user$.next(this.user); // Actualiza el BehaviorSubject de user
  }

  constructor() { }
}
