import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';

describe('BackStage pass', function () {
    describe('When the concert takes place in 11 or more days', () => {
        it(`The Quality is increased by 1`, function () {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 50, 10),
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(11);
            expect(items[1].quality).to.equal(11);
        });
    });

    describe('When the concert takes place in between 6 or 10 days', () => {
        it(`The Quality is increased by 2`, function () {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10),
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(12);
            expect(items[1].quality).to.equal(12);
        });
    });

    describe('When the concert takes place in between 5 or 1 days', () => {
        it(`The Quality is increased by 3`, function () {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10),
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(13);
            expect(items[1].quality).to.equal(13);
        });
    });

    describe('When the concert is over', () => {
        it(`The Quality is 0`, function () {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });

    describe('When the quality needs increasing but reaches 50', () => {
        it(`The Quality increases but doesn't go over 50`, function () {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 11, 49),
                new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50),
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[1].quality).to.equal(50);
            expect(items[2].quality).to.equal(50);
            expect(items[3].quality).to.equal(50);

        });
    });
})