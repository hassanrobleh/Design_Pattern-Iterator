import { Menu } from './../interfaces/Menu';
import { MenuItem } from './MenuItem';
import { Iterator } from './../interfaces/Iterator';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';
export class Waitress {

    pancakeHouseMenu: Menu;
    dinerMenu: Menu;

    constructor(pancake: Menu, diner: Menu) {
        this.pancakeHouseMenu = pancake;
        this.dinerMenu = diner;
    }

    public printMenuPancakeIterator() {
        let pancakeIterator = this.pancakeHouseMenu.createIterator();
        return this.printMenus(pancakeIterator);
    }

    public printMenuDinerIterator() {
        let dinerIterator: Iterator = this.dinerMenu.createIterator();
        return this.printMenus(dinerIterator);
    }

    private printMenus(iterator: Iterator) {
        let result = "";
        while(iterator.hasNext()) {
            let menuItem  = <MenuItem> iterator.next();
            
            result += menuItem.getName() + " ";
            result += menuItem.getPrice()+ " ";
            result += menuItem.getDescription();

        }
        return result;
    }

}