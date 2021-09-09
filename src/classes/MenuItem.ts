export class MenuItem {

    name: string = "";
    description: string = "";
    vegetarian: boolean = true;
    price: number = 0;

    constructor(name: string, desc: string, vege: boolean, price: number) {
        this.name = name;
        this.description = desc;
        this.vegetarian = vege;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    getVegetarian(): boolean {
        return this.vegetarian;
    }
}