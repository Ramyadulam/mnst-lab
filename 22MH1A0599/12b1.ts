export namespace ProductUtility {
    export class Product {
        private productId: number;
        private productName: string;
        private price: number;
        private availability: boolean;

        constructor(productId: number, productName: string, price: number, availability: boolean) {
            this.productId = productId;
            this.productName = productName;
            this.price = price;
            this.availability = availability;
        }

        getProductId(): number {
            return this.productId;
        }

        setProductId(newId: number): void {
            this.productId = newId;
        }
    }
}
