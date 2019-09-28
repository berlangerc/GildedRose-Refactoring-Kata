import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

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

    describe('Decreasing sellIn', () => {
        const items = [
            { item: new Item('foo', -1, 0), expectedSellIn: -2 },
            { item: new Item('Aged Brie', -1, 0), expectedSellIn: -2 },
            { item: new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0), expectedSellIn: 4 }
        ];
        items.forEach(({ item, expectedSellIn }) => {
            describe(`When the quality is updated for item ${item.name} with sellIn ${item.sellIn}`, () => {
                it(`The SellIn is ${expectedSellIn}`, function () {
                    const gildedRose = new GildedRose([item]);
                    const items = gildedRose.updateQuality();
                    expect(items[0].sellIn).to.equal(expectedSellIn);
                });
            });
        });

        describe('When the quality is updated for [item Sulfuras, Hand of Ragnaros]', () => {
            it(`The SellIn is the same`, function () {
                const gildedRose = new GildedRose([
                    new Item('Sulfuras, Hand of Ragnaros', 4, 80)

                ]);
                const items = gildedRose.updateQuality();
                expect(items[0].sellIn).to.equal(4);
            });
        })
    })

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


    })

    // describe(`When the quality is updated for a normal item with quality ${item.quality}`, () => {
    //     it(`The quality is still ${expectedQuality}`, function () {
    //         const gildedRose = new GildedRose([item]);
    //         const items = gildedRose.updateQuality();
    //         expect(items[0]).to.equal(expectedQuality);
    //     });
    // });
});
