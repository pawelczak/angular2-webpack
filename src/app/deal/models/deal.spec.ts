import {describe, expect, it, xit, inject, beforeEachProviders} from 'angular2/testing';
import {Deal} from "./deal";


describe("Deal", () => {


    it ("should be possible to create object", () => {

        //given
        let deal = new Deal("Title", 5, 50, 10, "src/img.jpg");

        //assert
        expect(deal instanceof Deal).toEqual(true);
        expect(deal.title).toEqual("Title");
        expect(deal.salePrice).toEqual(5);
        expect(deal.normalPrice).toEqual(50);
        expect(deal.dealRating).toEqual(10);
        expect(deal.thumb).toEqual("src/img.jpg");
        expect(deal.savings).toEqual((1 - 5/50) * 100);
    });

    it ("should correctly set savings", () => {

        //given
        let deal = new Deal("Title", 0, 50, 10, "src/img.jpg");

        //assert
        expect(deal.savings).toEqual(100);
    })

});

