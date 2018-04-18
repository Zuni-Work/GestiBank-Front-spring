import {User} from '../modele/user';

export class Visitor extends User {
  
   affectation: number;
  
  constructor(id: number, prenom: string, email: string, username: string, pwd: string,
     address: string, numTel: string,Role: string, affectation: number) {
    super(id, prenom, email, username, pwd, address, numTel, Role);
    this.affectation = affectation;
  }
  
  
}