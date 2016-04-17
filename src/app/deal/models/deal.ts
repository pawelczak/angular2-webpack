export class Deal {

    public savings: number;

    constructor(
        public title: string,
        public salePrice: number,
        public normalPrice: number,
        public dealRating: number,
        public thumb: string
    ) {
        this.countSavings();
    }


    private countSavings() {
        if (this.salePrice > 0) {
            this.savings = (1 - this.salePrice / this.normalPrice) * 100;
        } else {
            this.savings = 100;
        }
    }
}
