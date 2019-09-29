import { VolatileItem } from "./VolatileItem";

export default class ImprovingItem extends VolatileItem {
    update() {
        this.sellIn--;
        this.increaseQuality();

        if (this.sellIn < 0) {
            this.increaseQuality();
        }
    }

}
