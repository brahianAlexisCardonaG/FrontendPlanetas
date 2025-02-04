import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetUrl } from '../constants/planet.constant';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(
    private http: HttpClient,
  ) { }

  public get(data: any) {
    return this.http.get<any>(PlanetUrl.URL_GET_PLANET, {params:data});
  }

  public save(data: any) {
    return this.http
      .post<any>(PlanetUrl.URL_SAVE_PLANET, data);
  }

  public delete(id: any) {
    return this.http.delete(PlanetUrl.URL_DELETE_PLANET + `/${id}`)
  }

  public updateFavorite(data:any) {
    return this.http
      .patch<any>(PlanetUrl.URL_UPDATE_FAVORITE_PLANET, data);
  }

}
