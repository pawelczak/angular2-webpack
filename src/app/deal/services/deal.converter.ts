import {Injectable} from "angular2/core";
import {Deal} from "../models/deal";

@Injectable()
export class DealConverter {


    convertFromResponse(responseData: any[]): Deal[] {

        let deals = [];

        for (let i = 0, length = responseData.length; i < length; i += 1) {

            deals.push(new Deal(responseData[i].title, responseData[i].salePrice, responseData[i].normalPrice,
                responseData[i].dealRating, responseData[i].thumb));
        }

        return deals;
    }
}
