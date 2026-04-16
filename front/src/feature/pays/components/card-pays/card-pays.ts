import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiPaysService } from '../../../../core/api/api.pays.service';
import { IPays } from '../../model/IPays';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-pays',
  imports: [],
  templateUrl: './card-pays.html',
  styleUrl: './card-pays.scss',
})
class CardPays implements OnInit {
  private apiPaysService = inject(ApiPaysService);
  private route = inject(ActivatedRoute);

  onePays = signal<IPays | null>(null);

  getPays(uuid: string) {
    this.apiPaysService.getPays(uuid).subscribe({
      next: (pays) => {
        this.onePays.set(pays.data);
      },
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');

    if (uuid) {
      this.getPays(uuid);
    }
  }
}



export default CardPays;
