import { MenuItem } from './MenuItem';
export class DinerMenu {

    static readonly MAX_ITEMS: number = 6;
    numberOfItems: number = 0;
    menuItems: MenuItem[] = [];

    constructor() {
        // this.menuItems = new MenuItem(DinerMenu.MAX_ITEMS);
        this.addItem("Vegetarian BLT", "(Fakin) Bacon with lettuce & tomato on whole wheat", true, 2.99);
        this.addItem("BLT", "Bacon with lettuce & tomato on whole wheat", false, 2.99);
        this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29);
        this.addItem("Hotdog", "A hot dog, with saurkraut,relish, onions, topped with cheese",false, 3.05);
    }

    addItem(name: string, description: string,vegetarian: boolean, price: number) {

        let menuItem = new MenuItem(name, description, vegetarian, price);

        if(this.numberOfItems >= DinerMenu.MAX_ITEMS) {
            console.log("Désolé, le menu est plein ! Impossible d’ajouter un plat");
        } else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems += this.numberOfItems;
        }

    }

    getMenuItems() {
        return this.menuItems;
    }

}