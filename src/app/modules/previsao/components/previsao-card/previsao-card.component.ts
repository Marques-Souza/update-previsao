import { Component, Input,} from '@angular/core';
import { PrevisaoDatas } from '../../../../models/interfaces/previsaoDatas';
import { faCloudSun, faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-previsao-card',
  templateUrl: './previsao-card.component.html',
  styleUrls: []
})
export class PrevisaoCardComponent {

  @Input() previsaoDatas!: PrevisaoDatas;

  minTemperaturaIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  widIcon = faWind;
  sunriseIcon = faCloudSun;
  sunsetIcon = faCloudSun;


  constructor() { }


}
