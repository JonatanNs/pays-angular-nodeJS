import {Component, inject, OnInit, signal} from '@angular/core';
import {ApiPaysService} from '../../../../core/api/api.pays.service';
import {IPays} from '../../model/IPays';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiMessageService } from '../../../../core/api/api.message.service';

@Component({
  selector: 'app-list-pays',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './list.pays.html',
  styleUrl: './list.pays.scss',
})
export class ListPays implements OnInit {
  private apiPaysService = inject(ApiPaysService);
  private apiMessage = inject(ApiMessageService);

  listPays = signal<IPays[]>([]);

  loadAllPays() {
    this.apiPaysService.getAllPays().subscribe({
      next: (pays) => {
        this.listPays.set(pays.data);
        console.log(pays);
      },
      error: (err) => {
        console.log(err);
        this.apiMessage.showError(err.error.message);
      },
    });
  }

  ngOnInit() {
    this.loadAllPays();
  }
}
