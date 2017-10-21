import { Component, OnInit } from '@angular/core';
//imported for forms and validation
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

//added
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Player } from '../player';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	player1:Player = {id: null, name:null, score:null, image:''};
	player2:Player = {id: null, name:null, score:null, image:''};
  battleTime:boolean;
  // player1Score:number = null
  // player2Score:number = null
  // player1Image:string='';
  // player2Image:string='';
  // player1Name: string='';
  // player2Name: string='';
  constructor(private _http: Http,
    private _githubService: GithubService) {

   }

  ngOnInit() {
  }

  submitLeftForm($event){
  	console.log('Left form submitted', this.player1)
  	$event.preventDefault();
    this._githubService.getPlayer(this.player1).subscribe(
          (response) => {
            console.log(response.json());
            this.player1.id = response.json().id
            this.player1.name = response.json().name;
            this.player1.score =  (response.json().public_repos + response.json().followers)*12;
            this.player1.image =  response.json().avatar_url;
            this._githubService.addPlayerToDB(this.player1);

     


            // this.player.score = (response.json().followers + response.json().public_repos)*12;
            // this.player.image =  response.json().avatar_url;
            // this.player.name = response.json().name
            // console.log('Successful response from the server', response);
            // callback(response);
            // this.players = response.json();
          },
          (err) => {
            console.log('ERROR',err);
                alert('No GitHub login for ' + this.player1.name);
            this.player1.name = '';
          }
    )








  }
  submitRightForm($event){
  	console.log('Right form submitted', this.player2)
  	$event.preventDefault();
    this._githubService.getPlayer(this.player2).subscribe(
              (response) => {
                console.log('body is',response.json());
                // if(response.json().login == ''){

                //   alert('Give us a name!')
                //   return
                // }
                // else{
                    this.player2.id = response.json().id;
                    this.player2.name = response.json().name;
                    this.player2.score =  (response.json().public_repos + response.json().followers)*12;
                    this.player2.image =  response.json().avatar_url;
                    console.log('Player2 is:', this.player2);
                  this._githubService.addPlayerToDB(this.player2);
                // }


                // this.player.score = (response.json().followers + response.json().public_repos)*12;
                // this.player.image =  response.json().avatar_url;
                // this.player.name = response.json().name
                // console.log('Successful response from the server', response);
                // callback(response);
                // this.players = response.json();
              },
              (err) => {
                console.log(err);
                console.log('ERROR',err);
                alert('No GitHub login for ' + this.player2.name);
                this.player2.name = '';
              }
        )



    // this._http.get(`https://api.github.com/users/`+this.player2.name)
    //     .subscribe( 
    //       (response) => {
    //         console.log(response.json());
    //         this.player2Score = (response.json().followers + response.json().public_repos)*12;
    //         this.player2Image =  response.json().avatar_url;
    //         this.player2Name = response.json().name
    //         // console.log('Successful response from the server', response);
    //         // callback(response);
    //         // this.players = response.json();
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    // )
  }

//battle simply sets variable to show final score
  battle(){
    console.log('Going to war!!');
    this.battleTime =  true;


  }
//reload to start over
  reset(){
    console.log('reloading');
    window.location.reload()
    // this.player1.score = null;
    // this.player2.score = null;
    // this.player1 = null;
    // this.player2 = null;
    // this.battleTime = false

  }

}












