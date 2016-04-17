import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {DealSearchForm} from "../models/deal-search-form";
import {DealConverter} from "./deal.converter";

@Injectable()
export class DealSearchService {

    private _url = "http://www.cheapshark.com/api/1.0/deals";

    constructor(
        private _http: Http,
        private _dealConverter: DealConverter
    ) {}

    search(searchForm: DealSearchForm) {
        return this._http
            .get(this._url + searchForm.generateParams())
            .map((res) => {
                return this._dealConverter.convertFromResponse(res.json());
            });
    }

}
