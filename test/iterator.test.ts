import { MenutestDrive } from './../src/classes/MenuTestDrive';

describe('Pattern Iterator test', () => {
    
    it("Should be return test", () => {

        let menutestDrive = new MenutestDrive();
        expect(menutestDrive.main()).toContain("K&B’s Pancake Breakfast 2.99 Pancakes with scrambled eggs, and toast");
        // expect(menutestDrive.main()).toContain("Regular Pancake Breakfast 2.99 Pancakes with fried eggs, sausage");
    })
})
