import { expect } from 'chai';
import ImprovingItem from '../../app/types/ImprovingItem';

describe('Improving Item', function () {

    describe('Updating quality when sellIn has not been passed', () => {

        const items = [
            { item: new ImprovingItem("decrease1", 1, 1), expectedQuality: 2, expectedSellIn: 0 },
            { item: new ImprovingItem("decrease2", 50, 10), expectedQuality: 11, expectedSellIn: 49 }
        ];

        items.forEach(({ item, expectedQuality, expectedSellIn }) => {
            describe(`When the quality of improving item with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
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

    describe('Updating quality when sellIn has been passed', () => {

        const items = [
            { item: new ImprovingItem("decrease1", 0, 2), expectedQuality: 4, expectedSellIn: -1 },
            { item: new ImprovingItem("decrease2", -10, 10), expectedQuality: 12, expectedSellIn: -11 }
        ];

        items.forEach(({ item, expectedQuality, expectedSellIn }) => {
            describe(`When the quality is updated for an improving item ${item.name} with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
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

    describe('Updating quality never passes 50', () => {

        const items = [
            { item: new ImprovingItem("decrease1", 0, 49), expectedQuality: 50 },
            { item: new ImprovingItem("decrease2", 0, 50), expectedQuality: 50 },
            { item: new ImprovingItem("decrease3", 1, 49), expectedQuality: 50 },
            { item: new ImprovingItem("decrease4", 1, 50), expectedQuality: 50 }
        ];

        items.forEach(({ item, expectedQuality }) => {
            describe(`When the quality is updated for an improving item ${item.name} with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                item.processUpdate();

                it(`The quality is ${expectedQuality} and does not exceed 50`, function () {
                    expect(item.quality).to.equal(expectedQuality);
                });

            });
        });
    });
});