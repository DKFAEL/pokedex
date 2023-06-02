import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public setAllFiltersPokemons: any;
  public getAllPokemons: any;
  public currentSection: number = 0;
  public totalSections: number = 0;
  public cardsPerSection: number = 10;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    // Método executado quando o componente é inicializado
    // Recupera a lista de todos os pokémons da API
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.setAllFiltersPokemons = this.setAllPokemons;
        this.totalSections = Math.ceil(this.setAllPokemons.length / this.cardsPerSection);
        this.updateDisplayedPokemons();
      }
    );
  }

  getDisplayedPokemons(): any {
    // Retorna a lista de pokémons a serem exibidos na seção atual
    const startIdx = this.currentSection * this.cardsPerSection;
    const endIdx = startIdx + this.cardsPerSection;
    return this.setAllFiltersPokemons.slice(startIdx, endIdx);
  }

  moveCards(direction: string) {
    // Move os cards para a esquerda ou para a direita na página
    if (direction === 'left') {
      this.currentSection = (this.currentSection - 1 + this.totalSections) % this.totalSections;
    } else if (direction === 'right') {
      this.currentSection = (this.currentSection + 1) % this.totalSections;
    }

    this.updateDisplayedPokemons();
  }

  updateDisplayedPokemons(): void {
    // Atualiza a lista de pokémons a serem exibidos na página
    this.getAllPokemons = this.getDisplayedPokemons();
  }

  public getSearch(value: string) {
    // Filtra a lista de pokémons com base no valor de pesquisa
    const filter = this.setAllPokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    });

    this.setAllFiltersPokemons = [...filter];
    this.totalSections = Math.ceil(this.setAllFiltersPokemons.length / this.cardsPerSection);
    this.currentSection = 0; // Reinicia a seção atual para a primeira seção
    this.updateDisplayedPokemons();
  } 
}
