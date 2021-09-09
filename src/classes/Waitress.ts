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

    public printMenu() {
        let pancakeIterator: Iterator = this.pancakeHouseMenu.createIterator();
        let dinerIterator: Iterator = this.dinerMenu.createIterator();

        console.log("MENU\n----\nBREAKFAST");
        this.printMenus(pancakeIterator);

        console.log("\nLUNCH")
        this.printMenus(dinerIterator);
    }

    private printMenus(iterator: Iterator) {
        while(iterator.hasNext()) {
            let menuItem: MenuItem  = <MenuItem> iterator.next();
            console.log(menuItem.getName() + " ");
            console.log(menuItem.getPrice() + " ");
            console.log(menuItem.getDescription());
        }
    }

}