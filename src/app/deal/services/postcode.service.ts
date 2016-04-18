import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";

@Injectable()
export class PostcodeService {

    private _url = "http://api.postcodes.io/postcodes";

    constructor(private _http: Http) {}


    getCodes(...code: string[]) {

        let body = JSON.stringify({ "postcodes": code});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this._http.post(this._url, body, options)
            .map((res) => res.json())
            .subscribe((res) => {
                console.log(res);
            });
    }

}
