import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import ImprovingItem from '../app/types/ImprovingItem';
import BackStage from '../app/types/BackStage';
import Legendary from '../app/types/Legendary';
import DecreasingItem from '../app/types/DecreasingItem';
import ItemFactory from '../app/Factory';

describe('Factory', function () {

    describe('Correctly creating items', () => {
        const items = [
            { item: new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2), type: BackStage },
            { item: new Item('Aged Brie', -1, 2), type: ImprovingItem },
            { item: new Item('Sulfuras, Hand of Ragnaros', -1, 2), type: Legendary },
            { item: new Item('foo', -1, 2), type: DecreasingItem }
        ];

        items.forEach(({ item, type }) => {
            describe(`When the name is ${item.name}`, () => {
                it(`Then the factory creates an item with type ${type}`, function () {
                    const createdItem = ItemFactory.makeItem(item);
                    console.log(item);
                    expect(createdItem instanceof type).to.be.true;
                });
            });
        });
    });


});
