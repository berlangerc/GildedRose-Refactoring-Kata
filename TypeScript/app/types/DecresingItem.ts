import { BaseItem } from "./BaseItem";

export default class DecreasingItem extends BaseItem {
    update() {
        this.quality--;
        this.sellIn--;
    }
}
