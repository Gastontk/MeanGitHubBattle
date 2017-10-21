webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ranking_ranking_component__ = __webpack_require__("./src/app/ranking/ranking.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'ranking',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__ranking_ranking_component__["a" /* RankingComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Git Hub Battle</h1>       <a [routerLink]=\"['']\">Battle</a>\n -  <a [routerLink] = \"['ranking']\">Rankings-unstable</a> <br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__github_service__ = __webpack_require__("./src/app/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ranking_ranking_component__ = __webpack_require__("./src/app/ranking/ranking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sort_pipe__ = __webpack_require__("./src/app/sort.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__ranking_ranking_component__["a" /* RankingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sort_pipe__["a" /* OrderByPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__github_service__["a" /* GithubService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        this.player = { id: 0, name: '', score: 0, image: '' };
        this.players = [];
    }
    //check if player is in db, and submit to server if not.
    GithubService.prototype.addPlayerToDB = function (param) {
        this.playerToServer = param;
        for (var x = 0; x < this.players.length; x++) {
            if (this.players[x].id == param.id) {
                console.log(param, 'is already in the db');
                // return
            }
        }
        this.players.push(param);
        console.log('player to server is:', this.playerToServer);
        this._http.post('/player', this.playerToServer).subscribe(function (res) { console.log('Response from server is', res); }, function (err) {
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
    };
    //.promise called from landing component
    GithubService.prototype.getPlayer = function (player) {
        console.log('In service getPlayer', player);
        return this._http.get("https://api.github.com/users/" + player.name);
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
    };
    GithubService.prototype.getPlayers = function () {
        return this._http.get("/index");
    };
    return GithubService;
}());
GithubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GithubService);

var _a;
//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ "./src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landingContainer{\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: 150px;\n\tmargin-top: 10px;\n}\n\n\n.leftContestant{\n\tborder:solid black 1px;\n\tbackground-color: linen;\n\tdisplay:inline-block;\n\twidth: 30%;\n\theight: 100%;\n\tmargin-left: 10%;\n\t/*margin-right: 10%;*/\n\tpadding: 5px;\n\ttext-align: center;\n}\n.rightContestant{\n\tborder:solid black 1px;\n\tbackground-color: linen;\n\tdisplay:inline-block;\n\tmargin-left: 10%;\n\n\twidth: 30%;\n\theight: 100%;\n\tpadding: 5px;\n\ttext-align: center;\n\n\n\n}\n.longButton{\n\tmargin-top: 10px;\n\twidth: 80%;\n\tbackground-color: #519fff;\n\tcolor: white;\n\n}\n.extraLongButton{\n\t/*margin-left: 9%;*/\n\tmargin-top: 10px;\n\twidth: 90%;\n\t/*background-color: #519fff;*/\n\tcolor: white;\n\t\n}\n.resetButton{\n\tmargin-top: 20px;\n\tbackground-color: black;\n\tcolor: white;\n\twidth: 100%;\n}\n\n.playerFound{\n\tborder:solid black 1px;\n\tbackground-color: linen;\n\tdisplay:inline-block;\n\twidth: 30%;\n\theight: 100%;\n\tpadding: 5px;\n\ttext-align: center;\n\tmargin-left: 10%;\n\n\n}\n.centerMe{\n\ttext-align: center;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class = 'landingContainer'>\n  <div *ngIf='!battleTime'>\n\t<div *ngIf = '!player1.score' class = 'leftContestant'>\n\t\t<p>Player 1</p>\n\t\t<form name = 'leftForm'  #leftForm = 'ngForm' (submit) = 'submitLeftForm($event)'>\n\t\t\tGitgub Username: <input type=\"text\" name= 'name' #name = 'ngModel' [(ngModel)] = 'player1.name' required>\n\t\t\t<input [disabled]='!player1.name' class='longButton' type=\"submit\">\n\n\t\t</form>\n\t\n\t\t\n\t</div>\n\t<div class = 'playerFound' *ngIf = 'player1.score'>\t\t<h3>{{player1.name}}</h3>  \n\t\t<img width ='75'src=\"{{player1.image}}\" alt=\"\"></div>\n\t<div *ngIf = '!player2.score' class = 'rightContestant'>\n\t\t<p>Player 2</p>\n\t\t<form name='rightForm' #rightForm = 'ngForm'(submit) = 'submitRightForm($event)'>\n\t\t\tGitgub Username: <input name='name' #name = 'ngModel' [(ngModel)]= 'player2.name' type=\"text\">\n\t\t\t<input [disabled]='!player2.name' class = 'longButton'type=\"submit\">\n\n\t\t</form>\n\n\t</div>\n\t<div class = 'playerFound' *ngIf = 'player2.score'>\n\t\t<h3>{{player2.name}}</h3>  \n\t\t<img width ='75' src=\"{{player2.image}}\" alt=\"\">\n\t</div>\n<!-- Add button to show score (Battle!!) -->\n\t<div class = 'centerMe' *ngIf='player1.score && player2.score'>\n\t\t<button (click) = 'battle()' class = 'extraLongButton btn btn-warning'>Battle</button>\n\t</div>\n<!-- section for deciding which winning message to show -->\n\n  </div>\n\n\t<div *ngIf = 'battleTime'>\n\n\t\t<div *ngIf = '(player1.score  > player2.score)'><h3 >{{player1.name}} wins with a score of {{player1.score}} to {{player2.score}}</h3>\n\t\t\t<div class = 'playerFound' >\n\t\t<h3>{{player1.name}}</h3>  \n\t\t<img width ='75' src=\"{{player2.image}}\" alt=\"\">\n\t</div></div>\n\n\n\n\t\t<div *ngIf = '(player2.score  > player1.score)'><h3 >{{player2.name}} wins wins with a score of {{player2.score}} to {{ player1.score}}</h3>\n\t\t\t<div class = 'playerFound' >\n\t\t<h3>{{player2.name}}</h3>  \n\t\t<img width ='75' src=\"{{player2.image}}\" alt=\"\">\n\t</div></div>\n\n\n\t\t<div *ngIf = '(player2.score == player1.score)'><h3 >Huzzah!! A tie!! {{player2.score}}<span *ngIf='player1.name == player2.name'>Of course you were playing the same person twice...</span></h3>\n\t\t\t\t<img width ='75' src=\"{{player1.image}}\" alt=\"\">\n\t\t\t\t<img width ='75' src=\"{{player2.image}}\" alt=\"\">\n\t\t</div>\n\t\t<button class='resetButton' (click) = 'reset()' >Reset</button>\n \t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__github_service__ = __webpack_require__("./src/app/github.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    // player1Score:number = null
    // player2Score:number = null
    // player1Image:string='';
    // player2Image:string='';
    // player1Name: string='';
    // player2Name: string='';
    function LandingComponent(_http, _githubService) {
        this._http = _http;
        this._githubService = _githubService;
        this.player1 = { id: null, name: null, score: null, image: '' };
        this.player2 = { id: null, name: null, score: null, image: '' };
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.submitLeftForm = function ($event) {
        var _this = this;
        console.log('Left form submitted', this.player1);
        $event.preventDefault();
        this._githubService.getPlayer(this.player1).subscribe(function (response) {
            console.log(response.json());
            _this.player1.id = response.json().id;
            _this.player1.name = response.json().name;
            _this.player1.score = (response.json().public_repos + response.json().followers) * 12;
            _this.player1.image = response.json().avatar_url;
            _this._githubService.addPlayerToDB(_this.player1);
            // this.player.score = (response.json().followers + response.json().public_repos)*12;
            // this.player.image =  response.json().avatar_url;
            // this.player.name = response.json().name
            // console.log('Successful response from the server', response);
            // callback(response);
            // this.players = response.json();
        }, function (err) {
            console.log('ERROR', err);
            alert('No GitHub login for ' + _this.player1.name);
            _this.player1.name = '';
        });
    };
    LandingComponent.prototype.submitRightForm = function ($event) {
        var _this = this;
        console.log('Right form submitted', this.player2);
        $event.preventDefault();
        this._githubService.getPlayer(this.player2).subscribe(function (response) {
            console.log('body is', response.json());
            // if(response.json().login == ''){
            //   alert('Give us a name!')
            //   return
            // }
            // else{
            _this.player2.id = response.json().id;
            _this.player2.name = response.json().name;
            _this.player2.score = (response.json().public_repos + response.json().followers) * 12;
            _this.player2.image = response.json().avatar_url;
            console.log('Player2 is:', _this.player2);
            _this._githubService.addPlayerToDB(_this.player2);
            // }
            // this.player.score = (response.json().followers + response.json().public_repos)*12;
            // this.player.image =  response.json().avatar_url;
            // this.player.name = response.json().name
            // console.log('Successful response from the server', response);
            // callback(response);
            // this.players = response.json();
        }, function (err) {
            console.log(err);
            console.log('ERROR', err);
            alert('No GitHub login for ' + _this.player2.name);
            _this.player2.name = '';
        });
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
    };
    //battle simply sets variable to show final score
    LandingComponent.prototype.battle = function () {
        console.log('Going to war!!');
        this.battleTime = true;
    };
    //reload to start over
    LandingComponent.prototype.reset = function () {
        console.log('reloading');
        window.location.reload();
        // this.player1.score = null;
        // this.player2.score = null;
        // this.player1 = null;
        // this.player2 = null;
        // this.battleTime = false
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("./src/app/landing/landing.component.html"),
        styles: [__webpack_require__("./src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__github_service__["a" /* GithubService */]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "./src/app/ranking/ranking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n\tdisplay: inline-block;\n}\n\n.image{\n\t/*display:inline-block;*/\n}\n\n.score{\n\t/*display:inline-block;*/\n}\n\n.gitmonautHolder{\n\tmax-width: 200px;\n\tdisplay:inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/ranking/ranking.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n\t<li *ngFor = \"let player of players | orderby \">\n\t\t{{player.name}} scores {{player.score }}\n\n\t</li>\n</ul>\n<div class='container'*ngFor=\"let player of players \" >\n\t<div class='gitmonautHolder'>\n\n\t\t<div class = 'image'>\n\t\t\t<img width = '100' src=\"{{player.image}}\" alt=\"\"><br>\n\t\t\t{{player.name}}\n\n\t\t</div>\n\t\t<div class = 'score'>\n\t\t\t<h4>Score: {{player.score}}</h4>\n\t\t</div>\n\t</div>\n\n\t\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/ranking/ranking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_service__ = __webpack_require__("./src/app/github.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingComponent = (function () {
    function RankingComponent(_githubService) {
        var _this = this;
        this._githubService = _githubService;
        this._githubService.getPlayers().subscribe(function (response) {
            var players;
            _this.players = response.json();
            console.log('Rspns from server', response.json());
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
        }, function (err) {
            console.log('ERROR', err);
            // alert('No GitHub login for ' + this.player1.name);
            // this.player1.name = '';
        });
    }
    RankingComponent.prototype.ngOnInit = function () {
    };
    return RankingComponent;
}());
RankingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-ranking',
        template: __webpack_require__("./src/app/ranking/ranking.component.html"),
        styles: [__webpack_require__("./src/app/ranking/ranking.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__github_service__["a" /* GithubService */]) === "function" && _a || Object])
], RankingComponent);

var _a;
//# sourceMappingURL=ranking.component.js.map

/***/ }),

/***/ "./src/app/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    //testing where pipe is failing:
    // transform(value:any){
    // 	console.log(value);
    // 	// value[score] = 77
    // 	// var addMe = 999999
    // 	// value.score +=addMe;
    // 	return value+88;
    // }
    //end testing
    OrderByPipe.prototype.transform = function (xx) {
        console.log('in transform, array is', xx);
        if (xx !== undefined) {
            xx.sort(function (a, b) {
                console.log(a, ' a - b ', b);
                if (a.score < b.score) {
                    return -1;
                }
                else if (a.score > b.score) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        console.log(xx);
        return xx;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'orderby'
    })
], OrderByPipe);

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map