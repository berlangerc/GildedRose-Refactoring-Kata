import { BaseItem } from "./BaseItem";

export abstract class VolatileItem extends BaseItem {
    increaseQuality() {
        if (this.quality < 50) {
            this.quality++;
        }
    }
    decreaseQuality() {
        if (this.quality > 0) {
            this.quality--;
        }
    }
}
