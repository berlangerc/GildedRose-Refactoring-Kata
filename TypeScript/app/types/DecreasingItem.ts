import { BaseItem } from "./BaseItem";

export default class DecreasingItem extends BaseItem {
    update() {
        this.sellIn--;
        if (this.sellIn < 0) {
            this.updateQuality(2);
        }
        else {
            this.updateQuality(1);
        }

    }
    private updateQuality(lowerWith: number) {
        if (this.quality > 0) {
            if (this.quality - lowerWith < 0) {
                this.quality = 0;
            }
            else {
                this.quality = this.quality - lowerWith;
            }
        }

    }
}
