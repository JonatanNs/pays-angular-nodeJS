import {Component, inject, OnInit, signal} from '@angular/core';
import {ApiPaysService} from '../../../../core/api/api.pays.service';
import {IPays} from '../../model/IPays';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-pays',
  imports: [RouterLink],
  templateUrl: './list.pays.html',
  styleUrl: './list.pays.scss',
})
export class ListPays implements OnInit {
  private apiPaysService = inject(ApiPaysService);

  listPays = signal<IPays[]>([]);

  loadAllPays() {
    this.apiPaysService.getAllPays().subscribe({
      next: (pays) => {
        this.listPays.set(pays.data);
        console.log(pays);
      },
      error: (err) => console.log(err),
    });
  }

  ngOnInit() {
    this.loadAllPays();
  }
}
