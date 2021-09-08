import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LeagueAngular';
  apiKey: string;
  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
    this.loadProfile();
  }
  loadProfile(){
    this.http.get('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/suitednboosted?api_key={apiKey}').subscribe((response)=>{
      alert(JSON.stringify(response));
    });
  }
}
