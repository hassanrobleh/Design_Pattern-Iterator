import { Iterator } from '../interfaces/Iterator';
import { Menu } from '../interfaces/Menu';
import { MenuItem } from './MenuItem';

export class CafeMenuIterator implements Iterator {

    items: Object[];
    position: number = 0;

    constructor(items: Object[] ) {
        this.items = items;

    }

    next(): object {
        let menuItem: Object = this.items[this.position];
        this.position = this.position + 1;
        return menuItem;
    }

    hasNext(): boolean {
        if(this.position >= this.items.length || this.items[this.position] === null) {
            return false;
        } else {
            return true;
        }
    }

}