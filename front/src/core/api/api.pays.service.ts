import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IPays} from '../../feature/pays/model/IPays';
import { IApiResponse } from '../models/IApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ApiPaysService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getAllPays(): Observable<IApiResponse<IPays[]>> {
    return this.http.get<IApiResponse<IPays[]>>(`${this.baseUrl}/api/pays`);
  }

  getPays(uuid: string): Observable<IApiResponse<IPays>> {
    return this.http.get<IApiResponse<IPays>>(`${this.baseUrl}/api/pays/${uuid}`);
  }

  createPays(pays: IPays): Observable<IApiResponse<IPays>> {
    return this.http.post<IApiResponse<IPays>>(`${this.baseUrl}/api/pays/ajouter`, pays);
  }

  updatePays(uuid: string, data: { name: string | null ; code: string| null }): Observable<IApiResponse<IPays>> {
    return this.http.put<IApiResponse<IPays>>(`${this.baseUrl}/api/pays/modifier`, {
      uuid,
      name: data.name,
      code: data.code,
    });
  }

  deletePays(uuid: string): Observable<IApiResponse<any>> {
    return this.http.delete<IApiResponse<IPays>>(`${this.baseUrl}/api/pays/supprimer/${uuid}`);
  }
}
