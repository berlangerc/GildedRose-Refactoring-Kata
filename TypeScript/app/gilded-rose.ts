import ItemFactory from "./Factory";
import Item from "./types/Item";

export { Item };

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            const updatedItem = ItemFactory.makeItem(item);
            updatedItem.processUpdate();
            item.quality = updatedItem.quality;
            item.sellIn = updatedItem.sellIn;
        });

        return this.items;
    }
}