import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrevisaoService } from '../../services/previsao.service';
import { PrevisaoDatas } from '../../../../models/interfaces/previsaoDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-previsao-home',
  templateUrl: './previsao-home.component.html',
  styleUrls: []
})
export class PrevisaoHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  nomeInicialCidade = 'brasilia';
  previsaoDatas!: PrevisaoDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private previsaoService: PrevisaoService) { }
 

  ngOnInit(): void {
    this.getPrevsiaoDados(this.nomeInicialCidade);
  }

  getPrevsiaoDados(cityName: string): void{
      this.previsaoService.getPrevsiaoDados(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next:(response) =>{
           response && (this.previsaoDatas = response);
           console.log(this.previsaoDatas)
        },
        error:(erro) => console.log(erro),
      });
  }

  onSubmit(): void{
    this.getPrevsiaoDados(this.nomeInicialCidade);
    this.nomeInicialCidade = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
