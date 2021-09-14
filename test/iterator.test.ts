import { MenutestDrive } from './../src/classes/MenuTestDrive';

describe('Pattern Iterator test', () => {
    
    it("Should be return diner()", () => {
        let menutestDrive = new MenutestDrive();
        expect(menutestDrive.diner()).toContain("Vegetarian BLT 2.99 (Fakin) Bacon with lettuce & tomato on whole wheatBLT 2.99 Bacon with lettuce & tomato on whole wheatSoup of the day 3.29 Soup of the day, with a side of potato saladHotdog 3.05 A hot dog, with saurkraut,relish, onions, topped with cheese");
    });

    it("Should be return diner()", () => {
        let menutestDrive = new MenutestDrive();
        expect(menutestDrive.pancake()).toContain("K&B’s Pancake Breakfast 2.99 Pancakes with scrambled eggs, and toastRegular Pancake Breakfast 2.99 Pancakes with fried eggs, sausageBlueberry Pancakes 3.49 Pancakes made with fresh blueberriesCrêpe du chef 3.59 Crème fraîche et fruits rouges au choix");
    });

    it("Should be return cafe()", () => {
        let menu = new MenutestDrive();
        expect(menu.cafe()).toBe("Veggie Burger and Air Fries 3.99 Veggie burger on a whole wheat bun, lettuce, tomato and friesSoup of the day 3.69 A cup of the soup of the day, with a side saladBurrito 4.29 A large burrito, with whole pinto beans, salsa, guacamole");
    })
})
