import BaseItem from "./BaseItem";
import { timingSafeEqual } from "crypto";

export default abstract class VolatileItem extends BaseItem {
    static QUALITY_MAX = 50;
    static QUALITY_MIN = 0;

    static SELLIN_PASSED_FROM = 0;

    abstract updateQuality(): void;

    updateSellIn(): void {
        this.decreaseSellIn();
    }

    processUpdate() {
        this.updateSellIn();
        this.updateQuality();
    }


    decreaseSellIn() {
        this.sellIn--;
    }

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
