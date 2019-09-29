import { VolatileItem } from "./VolatileItem";

export default class ImprovingItem extends VolatileItem {
    processUpdate() {
        this.sellIn--;
        this.increaseQuality();

        if (this.sellIn < 0) {
            this.increaseQuality();
        }
    }

}
