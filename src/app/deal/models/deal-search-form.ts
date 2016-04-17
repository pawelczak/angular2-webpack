export class DealSearchForm {

    constructor(
        public title: string,
        public onSale: boolean,
        public steamWorks: boolean,

        public lowestPrice: number,
        public upperPrice: number
    ) {}


    public generateParams(): string {

        let params = "",
            empty = true;

        if(this.title !== "") {

            if (empty) {
                params += "?";
                empty = false;
            } else {
                params += "&";
            }

            params += "title=" + this.title;
        }

        if(this.onSale === true) {

            if (empty) {
                params += "?";
                empty = false;
            } else {
                params += "&";
            }

            params += "onSale=" + (this.onSale ? "1" : "0");
        }

        if(this.steamWorks === true) {

            if (empty) {
                params += "?";
                empty = false;
            } else {
                params += "&";
            }

            params += "steamWorks=" + (this.steamWorks ? "1" : "0");
        }

        return params;
    }
}
