import { Waitress } from './Waitress';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';

export class MenutestDrive {

    diner() {
        let pancakeHouseMenu = new PancakeHouseMenu();
        let pancakeHouseMenu1 = new PancakeHouseMenu();
        
        let dinerMenu = new DinerMenu();
        let waitress = new Waitress(pancakeHouseMenu, dinerMenu);
        return waitress.printMenuDinerIterator();
    }

    pancake() {

        let pancakeHouseMenu = new PancakeHouseMenu();
        let dinerMenu = new DinerMenu();
        let waitress = new Waitress(pancakeHouseMenu, dinerMenu);

        return waitress.printMenuPancakeIterator();

    }
}

// let app = new MenutestDrive();
// console.log(app.main());
