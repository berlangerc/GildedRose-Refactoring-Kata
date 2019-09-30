import BaseItem from "./BaseItem";

export default abstract class VolatileItem extends BaseItem {
    static QUALITY_MAX = 50;
    static QUALITY_MIN = 0;

    static SELLIN_PASSED_FROM = 0;

    increaseQuality() {
        if (this.quality < VolatileItem.QUALITY_MAX) {
            this.quality++;
        }
    }

    decreaseQuality() {
        if (this.quality > VolatileItem.QUALITY_MIN) {
            this.quality--;
        }
    }

    isSellInPassed() {
        return this.sellIn < VolatileItem.SELLIN_PASSED_FROM;
    }

}
