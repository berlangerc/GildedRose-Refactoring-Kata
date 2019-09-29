import { BaseItem } from "./BaseItem";

export default class ImprovingItem extends BaseItem {
    update() {
        this.sellIn--;
        this.quality++;

        if (this.sellIn < 0) {
            this.quality++;
        }
    }

}
