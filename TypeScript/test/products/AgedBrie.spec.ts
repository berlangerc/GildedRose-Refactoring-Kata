import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';

describe('Aged Brie', function () {
    describe('When the quality is updated and the current sellIn is higher than 0', () => {
        it(`The Quality has increased by 1`, function () {
            const gildedRose = new GildedRose([
                new Item('Aged Brie', 4, 10),
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(11);
        });
    });
    describe('When the quality is updated and the current sellIn is 0 or lower than 0', () => {
        it(`The Quality has increased by 2`, function () {
            const gildedRose = new GildedRose([
                new Item('Aged Brie', 0, 10),
                new Item('Aged Brie', -1, 10),
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(12);
            expect(items[1].quality).to.equal(12);
        });
    });

    describe('When the quality needs increasing but reaches 50', () => {
        it(`The Quality increases but doesn't go over 50`, function () {
            const gildedRose = new GildedRose([
                new Item('Aged Brie', 1, 49),
                new Item('Aged Brie', 0, 49),
                new Item('Aged Brie', -1, 49),
                new Item('Aged Brie', -1, 50)
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[1].quality).to.equal(50);
            expect(items[2].quality).to.equal(50);
            expect(items[3].quality).to.equal(50);

        });
    });

});

