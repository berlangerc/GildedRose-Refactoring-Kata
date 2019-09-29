import ImprovingItem from "./ImprovingItem";

export default class BackStage extends ImprovingItem {
    processUpdate() {
        this.sellIn--;
        this.increaseQuality();

        if (this.isSellInPassed()) {
            this.increaseQuality();
        }
    }

}
