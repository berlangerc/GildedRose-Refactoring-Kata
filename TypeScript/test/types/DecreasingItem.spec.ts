import { expect } from 'chai';
import DecreasingItem from '../../app/types/DecresingItem';

describe('Decreasing Item', function () {

    describe('Updating quality when sellIn has not been passed', () => {

        const items = [
            { item: new DecreasingItem("decrease1", 1, 1), expectedQuality: 0 },
            { item: new DecreasingItem("decrease1", 50, 10), expectedQuality: 9 }
        ];

        items.forEach(({ item, expectedQuality }) => {
            describe(`When the quality is updated for item ${item.name} with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
                it(`The quality is decreased with 1 and equals to ${expectedQuality}`, function () {
                    item.update();
                    expect(item.quality).to.equal(expectedQuality);
                });
            });
        });
    });
});