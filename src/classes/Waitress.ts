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
        let pancakeIterator: Iterator = this.pancakeHouseMenu.createIterator();
        return this.printMenus(pancakeIterator);
    }

    public printMenuDinerIterator() {
        let dinerIterator: Iterator = this.dinerMenu.createIterator();
        return this.printMenus(dinerIterator);
    }

    private printMenus(iterator: Iterator) {
        while(iterator.hasNext()) {
            let menuItem: MenuItem  = <MenuItem> iterator.next();
            return `
                ${menuItem.getName()} ${menuItem.getPrice()} ${menuItem.getDescription()}
            `
            // console.log(menuItem.getName() + " ");
            // console.log(menuItem.getPrice() + " ");
            // console.log(menuItem.getDescription());
        }
    }

}