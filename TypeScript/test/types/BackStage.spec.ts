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



})