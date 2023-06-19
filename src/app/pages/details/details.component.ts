import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private urlPokemon : string = "https://pokeapi.co/api/v2/pokemon";
  private urlName : string =  "https://pokeapi.co/api/v2/pokemon-species";
  public pokemon : any;
  public isLoading: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activateRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetpokemons(`${this.urlPokemon}/${id}`);
    const name  =  this.pokeApiService.apiGetpokemons(`${this.urlName}/${id}`);

     return forkJoin ([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
        this.isLoading = true;
        console.log(res)
      }
    );
  }

  
}
