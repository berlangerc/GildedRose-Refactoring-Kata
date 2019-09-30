import VolatileItem from "./VolatileItem";

export default class DecreasingItem extends VolatileItem {
    updateQuality() {
        this.decreaseQuality();

        if (this.isSellInPassed()) {
            this.decreaseQuality();
        }
    }
}
