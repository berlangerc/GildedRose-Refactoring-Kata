import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';

describe('Sulfuras', function () {
    describe('When the quality is updated for [item Sulfuras, Hand of Ragnaros]', () => {
        it(`The SellIn is the same`, function () {
            const gildedRose = new GildedRose([
                new Item('Sulfuras, Hand of Ragnaros', 4, 80)

            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(4);
        });
    });

    describe('When the quality is updated for [item Sulfuras, Hand of Ragnaros]', () => {
        it(`The Quality is the same`, function () {
            const gildedRose = new GildedRose([
                new Item('Sulfuras, Hand of Ragnaros', 4, 80),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Sulfuras, Hand of Ragnaros', -1, 80)
            ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(80);
        });
    });
})

