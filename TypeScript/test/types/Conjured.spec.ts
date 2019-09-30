import { expect } from 'chai';
import Conjured from '../../app/types/Conjured';

describe('Conjured item', function () {
    const items = [
        { item: new Conjured('Conjured', 11, 10), expectedQuality: 8 },
        { item: new Conjured('Conjured', 50, 1), expectedQuality: 0 },
        { item: new Conjured('Conjured', 50, 0), expectedQuality: 0 }
    ];

    items.forEach(({ item, expectedQuality }) => {
        describe(`When the quality is updated for conjured items with quality ${item.quality} and sellIn ${item.sellIn}`, () => {
            item.processUpdate();

            it(`The quality is decreases with 2 and equals to ${expectedQuality}`, function () {
                expect(item.quality).to.equal(expectedQuality);
            });
        });
    });

})