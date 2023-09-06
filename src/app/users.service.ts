import { Injectable } from '@angular/core';
import { User } from './core/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [];
  constructor() {}

  // Ajouter un utilisateur
  add(user: User): boolean {
    if (this.users.length < 5) {
      this.users.push(user);
      return true;
    } else {
      return false;
    }
  }

  // Mettre à jour un utilisateur
  update(user: User): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  // Obtenir un utilisateur par ID
  get(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  // Obtenir tous les utilisateurs
  getAll(): User[] {
    return this.users;
  }
}
