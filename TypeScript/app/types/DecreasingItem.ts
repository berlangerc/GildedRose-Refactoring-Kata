import { VolatileItem } from "./VolatileItem";

export default class DecreasingItem extends VolatileItem {
    processUpdate() {
        this.sellIn--;
        this.decreaseQuality();

        if (this.sellIn < 0) {
            this.decreaseQuality();
        }
    }
}
