import { CafeMenuIterator } from './CafeMenuIterator';
import { Iterator } from './../interfaces/Iterator';
import { Menu } from './../interfaces/Menu';
import { MenuItem } from './MenuItem';

export class CafeMenu implements Menu {

    menuItems: MenuItem[] = [];

    constructor() {
        this.addItem("Veggie Burger and Air Fries", "Veggie burger on a whole wheat bun, lettuce, tomato and fries", true, 3.99);
        this.addItem("Soup of the day","A cup of the soup of the day, with a side salad", false, 3.69);
        this.addItem("Burrito","A large burrito, with whole pinto beans, salsa, guacamole", true, 4.29);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {

        let menuItem: MenuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.push(menuItem);
    }

    createIterator(): Iterator {
        return new CafeMenuIterator(this.menuItems);
    }

}