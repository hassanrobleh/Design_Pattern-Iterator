import { PancakeHouseMenuIterator } from './PancakeHouseMenuIterator';
import { MenuItem } from './MenuItem';

export class PancakeHouseMenu {

    menuItems: MenuItem[] = [];

    constructor() {
        // this.menuItems = arrayList;

        this.addItem("K&B’s Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99);
        this.addItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage" ,false, 2.99);
        this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49);
        this.addItem("Crêpe du chef", "Crème fraîche et fruits rouges au choix", true, 3.59);

    }

    addItem(name: string, description: string,vegetarian: boolean, price: number) {

        let menuItem = new MenuItem(name, description, vegetarian, price)
        this.menuItems.push(menuItem);
    }

    createIterator() {
        return new PancakeHouseMenuIterator(this.menuItems)
    }

    // getMenuItems() {
    //     return this.menuItems;
    // }



}

// let pancakeHouseMenu = new PancakeHouseMenu();
// let breakfastItems = pancakeHouseMenu.createIterator();

// for (let i = 0; i < breakfastItems.length; i++) {
//     const menuItem = breakfastItems[i];    
//     console.log(menuItem.getName() + " ");
//     console.log(menuItem.getPrice() + " ");
//     console.log(menuItem.getDescription());
// }
