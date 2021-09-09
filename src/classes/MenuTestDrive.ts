import { Waitress } from './Waitress';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';

export class MenutestDrive {

    main() {
        let pancakeHouseMenu = new PancakeHouseMenu();
        let dinerMenu = new DinerMenu();
        let waitress = new Waitress(pancakeHouseMenu, dinerMenu);

        return waitress.printMenuPancakeIterator();
    }
}

// let app = new MenutestDrive()
// app.main();