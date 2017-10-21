import { Injectable } from '@angular/core';
import {	Http} from '@angular/http';
import { Player } from './player';
import 'rxjs';

@Injectable()
export class GithubService {
	player:Player ={id:0, name:'', score:0, image:''};
  players:Array<Player> = [];
  playerToServer:Player;
  constructor(private _http: Http) { 

  }

//check if player is in db, and submit to server if not.
  addPlayerToDB(param){
    this.playerToServer =param 
      for(var x = 0; x<this.players.length; x++){
        if(this.players[x].id == param.id){
          console.log(param, 'is already in the db')
          // return
        }

      }
      this.players.push(param);
      console.log('player to server is:', this.playerToServer);
      
      this._http.post('/player', this.playerToServer ).subscribe((res) => {  console.log('Response from server is',res); },
        (err)=>{
          console.log('There was an error posting', err);
        });




      // this._http.post(
      // '/player',  player).subscribe(
      //   data => { console.log(data); },
      //   err => { console.log(err); }
      // );

      // this._http.post('/player', {body:player})
    
      // this._http.post(`/player`, player);

      // console.log('this.players is:', this.players)
    //send post to server if player is new
  }



//.promise called from landing component
  getPlayer(player){
  	console.log('In service getPlayer',player)
  	return this._http.get(`https://api.github.com/users/`+player.name);

  	
    //     .subscribe(
    //       (response) => {
    //         console.log(response.json());
    //         // this.player.score = (response.json().followers + response.json().public_repos)*12;
    //         // this.player.image =  response.json().avatar_url;
    //         // this.player.name = response.json().name
    //         // console.log('Successful response from the server', response);
    //         // callback(response);
    //         // this.players = response.json();
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    // )


// this._http.get(`/players`)
  }

  getPlayers(){
    return this._http.get(`/index`);
  }
}
