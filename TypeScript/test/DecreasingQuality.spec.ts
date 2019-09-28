import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Decreasing quality', function () {

    describe('Updating quality when sellIn has passed', () => {
        const items = [
            { item: new Item('foo', 0, 2), expectedQuality: 0 },
            { item: new Item('foo', -1, 2), expectedQuality: 0 },
        ];
        items.forEach(({ item, expectedQuality }) => {
            describe(`When the quality is updated for item ${item.name} with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                it(`The quality is decreased twice as fast ${expectedQuality}`, function () {
                    const gildedRose = new GildedRose([item]);
                    const items = gildedRose.updateQuality();
                    expect(items[0].quality).to.equal(expectedQuality);
                });
            });
        });
    });

    describe('The quality of an item is never negative', () => {
        const decreasingQuality_items = [
            { item: new Item('foo', 0, 0), expectedQuality: 0 },
            { item: new Item('foo', -1, 0), expectedQuality: 0 }
        ];
        decreasingQuality_items.forEach(({ item, expectedQuality }) => {
            describe(`When the quality is updated for a normal item with quality ${item.quality}`, () => {
                it(`The quality is still ${expectedQuality}`, function () {
                    const gildedRose = new GildedRose([item]);
                    const items = gildedRose.updateQuality();
                    expect(items[0].quality).to.equal(expectedQuality);
                });
            });
        });
    });
});
