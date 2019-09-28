import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    describe('When Gilded Rose is created without an item collection', () => {
        it(`It creates a GildedRose with no items`, function () {
            const gildedRose = new GildedRose();
            const items = gildedRose.updateQuality();
            expect(items.length).to.equal(0);
        });
    });

    describe('After updating the qualities, the amount of items is the same', () => {
        const tests = [
            { args: [], expectedLength: 0 },
            { args: [new Item('foo', 0, 0)], expectedLength: 1 },
            { args: [new Item('foo', 0, 0), new Item('foo', 0, 0), new Item('foo', 0, 0)], expectedLength: 3 }
        ];

        tests.forEach(({ args, expectedLength }) => {
            describe(`When the shop has ${args.length} items and updates its values`, () => {
                it(`It still has ${expectedLength} items in the shop`, function () {
                    const gildedRose = new GildedRose(args);
                    const items = gildedRose.updateQuality();
                    expect(items.length).to.equal(expectedLength);
                });
            });
        });
    });

});
