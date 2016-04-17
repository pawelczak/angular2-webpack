import {Component} from "angular2/core";
import {DealComponent} from "./deal/deal.component";
//import {AppState} from "./app.service";


@Component({
    selector: 'app',
    template: `
        <div  id="page-wrapper">

            <h1>Deal shark</h1>

            <deal></deal>

        </div>
    `,
    directives: [
        DealComponent
    ]
})
export class AppComponent {

    /*
  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  */
  
}
