import { Component, OnInit } from '@angular/core';
import { IWeatherItem, SearchService} from '../core/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public weatherItems: IWeatherItem[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getWeather().subscribe((res: IWeatherItem[]) => {
      if (Array.isArray(res)) {
        this.weatherItems = res;
      } else {
        this.weatherItems = null;
        console.log('Fehler beim Laden der Wetterdaten');
      }
    });



  }

}
