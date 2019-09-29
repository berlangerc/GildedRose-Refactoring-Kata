import { expect } from 'chai';
import BackStage from '../../app/types/BackStage';

describe('BackStage pass', function () {
    describe('When the concert takes place in 11 or more days', () => {
        const items = [
            { item: new BackStage('Backstage passes to a TAFKAL80ETC concert', 11, 10), expectedQuality: 11, expectedSellIn: 10 },
            { item: new BackStage('Backstage passes to a TAFKAL80ETC concert', 50, 10), expectedQuality: 11, expectedSellIn: 49 }
        ];

        items.forEach(({ item, expectedQuality, expectedSellIn }) => {
            describe(`When the quality is updated for backstage with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                item.processUpdate();
                it(`The quality is increased with 1 and equals to ${expectedQuality}`, function () {
                    expect(item.quality).to.equal(expectedQuality);
                });
                it(`The sellIn is decreased with 1 and equals to ${expectedSellIn}`, function () {
                    expect(item.sellIn).to.equal(expectedSellIn);
                });
            });
        });
    });

    describe('When the concert takes place in between 6 or 10 days', () => {
        const items = [
            { item: new BackStage('Backstage passes to a TAFKAL80ETC concert', 10, 10), expectedQuality: 12, expectedSellIn: 9 },
            { item: new BackStage('Backstage passes to a TAFKAL80ETC concert', 6, 10), expectedQuality: 12, expectedSellIn: 5 }
        ];

        items.forEach(({ item, expectedQuality, expectedSellIn }) => {
            describe(`When the quality is updated for backstage with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                item.processUpdate();
                it(`The quality is increased with 2 and equals to ${expectedQuality}`, function () {
                    expect(item.quality).to.equal(expectedQuality);
                });
                it(`The sellIn is decreased with 1 and equals to ${expectedSellIn}`, function () {
                    expect(item.sellIn).to.equal(expectedSellIn);
                });
            });
        });
    });

    describe('When the concert takes place in between 5 or 1 days', () => {
        const items = [
            { item: new BackStage('Backstage passes to a TAFKAL80ETC concert', 5, 10), expectedQuality: 13, expectedSellIn: 4 },
            { item: new BackStage('Backstage passes to a TAFKAL80ETC concert', 1, 10), expectedQuality: 13, expectedSellIn: 0 }
        ];

        items.forEach(({ item, expectedQuality, expectedSellIn }) => {
            describe(`When the quality is updated for backstage with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                item.processUpdate();
                it(`The quality is increased with 3 and equals to ${expectedQuality}`, function () {
                    expect(item.quality).to.equal(expectedQuality);
                });
                it(`The sellIn is decreased with 1 and equals to ${expectedSellIn}`, function () {
                    expect(item.sellIn).to.equal(expectedSellIn);
                });
            });
        });
    });
    describe('When the concert is over', () => {
        const concertHappened = new BackStage('Backstage passes to a TAFKAL80ETC concert', 0, 10);
        concertHappened.processUpdate();

        it(`The quality is 0`, function () {
            concertHappened.processUpdate();
            expect(concertHappened.quality).to.equal(0);
        });
    });


})