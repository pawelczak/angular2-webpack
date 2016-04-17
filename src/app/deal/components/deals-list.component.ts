import {Input} from "angular2/core";
import {Deal} from "../models/deal";
import {Component} from "angular2/core";

@Component({
    selector: "deals-list",
    template: `
    <ul class="deals row" >
        <li *ngFor="#deal of deals" class="col-sm-12">

            <div class="col-sm-2">
                <img src="{{deal.thumb}}" />
            </div>

            <div class="col-sm-10">
                <p class="title" >
                    {{deal.title}}

                    <span *ngIf="deal.savings > 0" class="label label-danger" >on Sale</span>
                </p>

                <p>Sales price: {{deal.salePrice}}</p>
                <p>Normal price: {{deal.normalPrice}}</p>

                <p class="label label-success" >{{deal.dealRating}}</p>
            </div>


        </li>
    </ul>
    `,
    styles: [`
        .deals {
            list-style: none;
        }

        .deals li {
            border-top: 1px solid #ccc;
            margin-top: 8px;
            padding: 4px 6px;
        }

        .deals li .col-sm-3 {
            text-align: left;
        }

        .deals li .title {
            font-weight: bold;
            font-size: 18px;
        }

        .deals li img {
            max-height: 60px;
            max-width: 120px;
        }
    `]
})
export class DealsListComponent {

    @Input() deals: Deal[];
}
