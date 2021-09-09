import { MenuItem } from './MenuItem';
import { Iterator } from './../interfaces/Iterator';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';
export class Waitress {

    pancakeHouseMenu: PancakeHouseMenu;
    dinerMenu: DinerMenu;

    constructor(pan: PancakeHouseMenu, diner: DinerMenu) {
        this.pancakeHouseMenu = pan;
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