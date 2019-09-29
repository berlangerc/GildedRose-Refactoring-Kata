import { BaseItem } from "./BaseItem";

export default class DecreasingItem extends BaseItem {
    update() {
        this.sellIn--;
        if (this.sellIn < 0) {
            this.quality = this.quality - 2;
        }
        else {
            this.quality = this.quality - 1;
        }

    }
}
