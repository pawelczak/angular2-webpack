import {Component} from "angular2/core";
import {DealSearchService} from "./services/deal-search.service";
import {OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {DealSearchForm} from "./models/deal-search-form";
import {DealsListComponent} from "./components/deals-list.component";
import {DealConverter} from "./services/deal.converter";

@Component({
    selector: "deal",
    templateUrl: './src/app/deal/deal.component.html',
    providers: [
        HTTP_PROVIDERS,
        DealSearchService,
        DealConverter
    ],
    directives: [
        DealsListComponent
    ]
})
export class DealComponent implements OnInit {

    public deals: any[] = [];

    public dealSearchForm: DealSearchForm = new DealSearchForm("", false, false, 0, 50);

    constructor(
        private _dealSearchService: DealSearchService
    ) {}

    ngOnInit() {
        this.search();
    }

    search() {
        this.deals = [];

        this._dealSearchService.search(this.dealSearchForm)
            .subscribe(res => {
                this.deals = res;
            });
    }

}
