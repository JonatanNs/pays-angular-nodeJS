import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from '../core/components/header/header';
import {Footer} from '../core/components/footer/footer';
import { NgClass } from '@angular/common';
import { ApiMessageService } from '../core/api/api.message.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected uiState = inject(ApiMessageService);
  protected readonly title = signal('WorldCountry');
}
