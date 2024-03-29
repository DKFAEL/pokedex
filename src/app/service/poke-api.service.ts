import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"

  constructor(
    private hhtp: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any> {
    return this.hhtp.get<any>(this.url).pipe(
      tap( res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.apiGetpokemons(resPokemons.url).subscribe(
            res =>  resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetpokemons (url: string):Observable<any>{
    return this.hhtp.get<any>(url).pipe(
      map(
        res=> res
      )
    )
  }
}
