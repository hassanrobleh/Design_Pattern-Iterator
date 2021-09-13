import { Menu } from './../interfaces/Menu';
import { Iterator } from './../interfaces/Iterator';
import { DinerMenuIterator } from './DinerMenuIterator';
import { MenuItem } from './MenuItem';

export class DinerMenu implements Menu {

    static readonly MAX_ITEMS: number = 6;
    numberOfItems: number = 0;
    menuItems: MenuItem[] = [];

    constructor() {
        this.addItem("Vegetarian BLT", "(Fakin) Bacon with lettuce & tomato on whole wheat", true, 2.99);
        this.addItem("BLT", "Bacon with lettuce & tomato on whole wheat", false, 2.99);
        this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29);
        this.addItem("Hotdog", "A hot dog, with saurkraut,relish, onions, topped with cheese",false, 3.05);
    }

    addItem(name: string, description: string,vegetarian: boolean, price: number) {

        let menuItem = new MenuItem(name, description, vegetarian, price);

        if(this.numberOfItems >= DinerMenu.MAX_ITEMS) {
            return "Désolé, le menu est plein ! Impossible d’ajouter un plat";
        } else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems = this.numberOfItems + 1;
        }
    }

    createIterator(): Iterator {
        return new DinerMenuIterator(this.menuItems);
    }

}