import { expect } from 'chai';
import DecreasingItem from '../../app/types/DecreasingItem';

describe('Decreasing Item', function () {

    describe('Updating quality when sellIn has not been passed', () => {

        const items = [
            { item: new DecreasingItem("decrease1", 1, 1), expectedQuality: 0, expectedSellIn: 0 },
            { item: new DecreasingItem("decrease2", 50, 10), expectedQuality: 9, expectedSellIn: 49 }
        ];

        items.forEach(({ item, expectedQuality, expectedSellIn }) => {
            describe(`When the quality is updated for item ${item.name} with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                item.update();
                it(`The quality is decreased with 1 and equals to ${expectedQuality}`, function () {
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
            { item: new DecreasingItem("decrease1", 0, 2), expectedQuality: 0, expectedSellIn: -1 },
            { item: new DecreasingItem("decrease2", -10, 10), expectedQuality: 8, expectedSellIn: -11 }
        ];

        items.forEach(({ item, expectedQuality, expectedSellIn }) => {
            describe(`When the quality is updated for item ${item.name} with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                item.update();

                it(`The quality is decreased with 2 and equals to ${expectedQuality}`, function () {
                    expect(item.quality).to.equal(expectedQuality);
                });
                it(`The sellIn is decreased with 1 and equals to ${expectedSellIn}`, function () {
                    expect(item.sellIn).to.equal(expectedSellIn);
                });
            });
        });
    });

    describe('Updating quality never lowers quality lower than 0', () => {

        const items = [
            { item: new DecreasingItem("decrease1", 0, 1), expectedQuality: 0 },
            { item: new DecreasingItem("decrease2", 1, 1), expectedQuality: 0 },
            { item: new DecreasingItem("decrease3", 0, 0), expectedQuality: 0 },
            { item: new DecreasingItem("decrease4", 1, 0), expectedQuality: 0 }
        ];

        items.forEach(({ item, expectedQuality }) => {
            describe(`When the quality is updated for item ${item.name} with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                item.update();

                it(`The quality is ${expectedQuality} and does not exceed 0`, function () {
                    expect(item.quality).to.equal(expectedQuality);
                });

            });
        });
    });
});