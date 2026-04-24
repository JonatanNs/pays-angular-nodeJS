import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiPaysService } from '../../../../core/api/pays/api-pays.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiMessageService } from '../../../../core/api/api.message.service';
import { IPays } from '../../model/IPays';

@Component({
  selector: 'app-card-pays',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './card-pays.html',
  styleUrl: './card-pays.scss',
})
class CardPays implements OnInit {
  private apiPaysService = inject(ApiPaysService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiMessageService = inject(ApiMessageService);

  response = signal<IPays | null>(null);

  submitDelete(uuid?: string) {
    if (!uuid) return;

    this.apiPaysService.deletePays(uuid).subscribe({
      next: (d) => {
        this.response.set(d.data);
        this.apiMessageService.showSuccess(d.message);
        this.router.navigate(['/pays']);
      },
      error: (err) => {
        console.log(err);
        this.apiMessageService.showError(err.error.message);
      },
    });
  }

  getPays(uuid: string) {
    this.apiPaysService.getPays(uuid).subscribe({
      next: (pays) => {
        this.response.set(pays.data);
      },
      error: (err) => {
        console.log(err);
        this.apiMessageService.showError(err.error.message);
      },
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
