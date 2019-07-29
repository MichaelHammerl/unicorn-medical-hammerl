import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

export interface ISearchResultItem  {
    answer_count: number;
    closed_date: number;
    closed_reason: string;
    creation_date: number;
    is_answered: boolean;
    last_activity_date: number;
    link: string;
    score: number;
    tags: Array<string>;
    title: string;
    view_count: number;
}

export interface IWeatherItem {
  Datum: string;
  Zeit: string;
  'Temp. A.': string;
  Wind: string;
  Richtung: number;
}

@Injectable()
export class SearchService {

    private static readonly apiUrl =
        "https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=";

    private static readonly weatherUrl = "./assets/weatherdata.json";

    constructor(private http: Http) {

    }

    search(keyword: string): Observable<JSON> {
        return this.http.get(SearchService.apiUrl + keyword)
            .map((res: Response) => {
                let data = res.json();
                console.log("API USAGE: " + data.quota_remaining + " of " + data.quota_max + " requests available" );
                return data;
            })
            .catch((err: Response) => Observable.of(err.json()));
    }
    getWeather() {
      return this.http.get( SearchService.weatherUrl )
        .map((res: Response) => res.json())
        .catch((err: Response) => Observable.of(err));
    }
}
