import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import {Player} from '../player';
import { OrderByPipe } from '../sort.pipe';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
	players:any;
  constructor(private _githubService: GithubService) {
  	this._githubService.getPlayers().subscribe(
          (response) => {
          	var players
          	this.players = response.json();
          	console.log('Rspns from server',response.json());
            // console.log(response.json());
            // this.player1.name = response.json().name;
            // this.player1.score =  (response.json().public_repos + response.json().followers)*12;
            // this.player1.image =  response.json().avatar_url;
            // this._githubService.addPlayerToDB(this.player1);

            // this.player.score = (response.json().followers + response.json().public_repos)*12;
            // this.player.image =  response.json().avatar_url;
            // this.player.name = response.json().name
            // console.log('Successful response from the server', response);
            // callback(response);
            // this.players = response.json();
          },
          (err) => {
            console.log('ERROR',err);
                // alert('No GitHub login for ' + this.player1.name);
            // this.player1.name = '';
          }
    )

   }

  ngOnInit() {
  }

}
