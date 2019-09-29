import { expect } from 'chai';
import StableItem from '../../app/types/StableItem'
describe('StableItem', function () {
    describe('When the quality is updated for a stable item', () => {
        it(`The SellIn is the same`, function () {
            const item = new StableItem('stable item', 4, 80)

            item.processUpdate();
            expect(item.sellIn).to.equal(4);
        });
    });

    describe('When the quality is updated for a stable item', () => {
        it(`The Quality is the same`, function () {
            const item = new StableItem('stable item', 4, 80)

            item.processUpdate();
            expect(item.quality).to.equal(80);
        });
    });
})

