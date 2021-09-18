import { CafeMenu } from './menu/CafeMenu';
import { Waitress } from './Waitress';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';

export class MenutestDrive {

    diner() {
        let pancakeHouseMenu = new PancakeHouseMenu();
        let dinerMenu = new DinerMenu();
        let cafeMenu = new CafeMenu();

        let waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
        return waitress.printMenuDinerIterator();
    }

    pancake() {
        let pancakeHouseMenu = new PancakeHouseMenu();
        let dinerMenu = new DinerMenu();
        let cafeMenu = new CafeMenu();

        let waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
        return waitress.printMenuPancakeIterator();
    }

    cafe() {
        let pancakeHouseMenu = new PancakeHouseMenu();
        let dinerMenu = new DinerMenu();
        let cafeMenu = new CafeMenu();

        let waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
        return waitress.printMenuCafeIterator();
    }
}

// let app = new MenutestDrive();
// console.log(app.main());
