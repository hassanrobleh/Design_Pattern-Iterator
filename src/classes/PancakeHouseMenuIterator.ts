import { MenuItem } from './MenuItem';
import { Iterator } from '../interfaces/Iterator';

export class PancakeHouseMenuIterator implements Iterator {
    items: MenuItem[];
    position: number = 0;

    constructor(items: MenuItem[] ) {
        this.items = items;
    }

    hasNext() {
        if(this.position >= this.items.length || this.items[this.position] == null) {
            return false;
        } else {
            return true;
        }
    }

    next(): object {
        let menuItem = this.items[this.position];
        this.position = this.position + 1;
        return menuItem;
    }

}