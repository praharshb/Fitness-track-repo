// import { Component, OnInit } from '@angular/core';
// import { Http } from "@angular/http";
// import { Game, User, Quote } from '../models/game';
// import { MessagesService } from '../services/messages.service';
// import { GameService } from '../services/game.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-game',
//   templateUrl: './game.component.html',
//   styleUrls: ['./game.component.css']
// })
// export class GameComponent implements OnInit {

//     Model = new Game();
//     Me: User;

//     private _api = "http://localhost:8080/game";

//   constructor(
//       private http: Http,
//       private _Messages: MessagesService, 
//       private _Game: GameService, 
//       private _Router: Router
//     ) {
//         this.Me = _Game.Me;
//         if(!this.Me){
//             _Router.navigate(['/login']);
//         }
//         this.join(this.Me.Name);

//     setInterval(()=> this.refresh(), 1000)
//   }

//   ngOnInit() {
//   }

//   refresh(){
//     this.http.get(this._api + "/state")
//         .subscribe(data=> this.Model = data.json())
//   }

//   flipPicture(e: MouseEvent){
//       this._Messages.Messages.push({ Text: 'Picture Flipped', Type: 'success'})
//     this.http.post(this._api + "/picture",{})
//         .subscribe();
//   }

//   submitQuote(e: MouseEvent, text: string){
//     e.preventDefault();

//     if(this.MyPlayedQuote() || this.IAmTheDealer()) return;

//     this._Messages.Messages.push({ Text: 'Quote submitted: ' + text, Type: 'success'})
//     this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.Name })
//         .subscribe(data=> {
//             if(data.json().success){
//                 this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
//             }
//         }, err=> {
//             console.log(err);
//         });
//   }

//   chooseQuote(e: MouseEvent, quote: Quote){
//     e.preventDefault();
//     this.http.post(this._api + "/quotes/choose", { Text: quote.Text, PlayerId: this.Me.Name })
//         .subscribe(data=> {
//         }, err=> {
//             console.log(err);
//         });
//   }

//   join(name: string){
//     this._Messages.Messages.push({ Text: 'You\'ve joined this game. Welcome ' + name , Type: 'success'})
//     this.http.get(this._api + "/quotes", { params : { playerId: name } })
//     .subscribe(data=> this.Me.MyQuotes = data.json() )
//   }

//   MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name );
//   ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
//   IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
//   IAmTheDealer = () => this.Me.Name == this.Model.DealerId;
// }




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cal_bmi(lbs: any, ins: number)
  {
      let h2 = ins * ins;
      let bmi = lbs/h2 * 703
      let f_bmi = Math.floor(bmi);
      let diff  = bmi - f_bmi;
      diff = diff * 10;
      diff = Math.round(diff);
      if (diff == 10)    // Need to bump up the whole thing instead
      {
        f_bmi += 1;
        diff   = 0;
      }
      var new_bmi = f_bmi + "." + diff;
      return new_bmi;
    }
  compute()
  {
      var f = self.document.forms[0];
      let w = f.wt.value;
      let v = f.htf.value;
      let u = f.hti.value;
      if (!this.chkw(u))
      {
      var ii = 0;
      f.hti.value = 0;
      } else
      {
      let it = f.hti.value*1;
      var ii = it;
      }
      var fi = f.htf.value * 12;
      var i =  f.htf.value * 12 + f.hti.value*1.0;  
      if (!this.chkw(v))
      {
      alert("Please enter a number for your height.");
      f.htf.focus();
      return;
      }
      if (!this.chkw(w))
      {
      alert("Please enter a number for your weight.");
      f.wt.focus();
      return;
      }
      // Perform the calculation
      f.bmi.value = this.cal_bmi(w, i);
      f.bmi.focus();
  }

    chkw(w: any){
      if (isNaN(parseInt(w))){
        return false;
      } else if (w < 0){
        return false;
      }
      else{
        return true;
      }
    }
}