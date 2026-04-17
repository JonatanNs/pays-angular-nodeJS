import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiMessageService {
  message = signal<string | null>(null);
  type = signal<'success' | 'error'>('success');

  showSuccess(msg: string) {
    this.message.set(msg);
    this.type.set('success');
    setTimeout(() => this.clear(), 3000);
  }

  showError(msg: string) {
    this.message.set(msg);
    this.type.set('error');
    setTimeout(() => this.clear(), 3000);
  }

  clear() {
    this.message.set(null);
  }
}
