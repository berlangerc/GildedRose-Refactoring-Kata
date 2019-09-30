import VolatileItem from "./VolatileItem";

export default class ImprovingItem extends VolatileItem {
    updateQuality(): void {
        this.increaseQuality();

        if (this.isSellInPassed()) {
            this.increaseQuality();
        }
    }
}
