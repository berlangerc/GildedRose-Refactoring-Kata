import ImprovingItem from "./ImprovingItem";

export default class BackStage extends ImprovingItem {
    updateQuality() {
        this.increaseQuality();

        if (this.sellIn < 10) {
            this.increaseQuality();
        }

        if (this.sellIn < 5) {
            this.increaseQuality();
        }

        if (this.sellIn < 0) {
            this.quality = 0;
        }
    }

}
