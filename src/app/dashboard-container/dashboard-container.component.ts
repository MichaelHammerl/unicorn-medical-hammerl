import {Component, Input, OnInit} from '@angular/core';
import {ISearchResultItem, SearchService} from '../core/services/search.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  // Suchbegriff und Überschrift für Container
  @Input() searchTerm: string;
  // Anzahl der ausgegebenen SO-Einträge
  @Input() limit = 10;
  public items: ISearchResultItem[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {

      this.searchService.search(this.searchTerm).subscribe((res: any) => {

        if (res.items !== undefined) {
          this.items = res.items as ISearchResultItem[];
        } else {
          this.items = null;
          console.log('Fehler beim Laden der SO-Daten');
        }

      });

  }

}
