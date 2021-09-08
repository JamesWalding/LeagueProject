import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LeagueAngular';
  constructor(private http: HttpClient) {
    this.loadProfile();
  }
  loadProfile(){
    this.http.get('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/suitednboosted?api_key=RGAPI-35dc4fb9-53df-44db-a867-f0b08c0dc060').subscribe((response)=>{
      alert(JSON.stringify(response));
    });
  }
}
